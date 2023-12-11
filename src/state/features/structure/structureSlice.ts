import { createSelector, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';
import { v4 as uuidv4 } from 'uuid';
import { bfsNodeAction, dfsCbOnEach, dfsNodeAction } from './utils/traversal';
import { findSortable } from './utils/sorting';
import getTree from './utils/getTree';

// type NestedRecord<T extends any[]>
//     = T extends [any, ...infer R]
//     ? Record<string, NestedRecord<R>>
//     : string

export type ItemType = 'file' | 'folder';

export type ValidExtensions = 'js' | 'jsx' | 'css' | 'md' | 'ts' | 'tsx';

export const validExtensions = ['js', 'jsx', 'css', 'md', 'ts', 'tsx'];
export interface FileStructure {
  id: string;
  name: string;
  type: 'file';
  content: string;
  extension: ValidExtensions;
  path: string[];
}

export interface NormalizedFolder {
  id: string;
  name: string;
  type: 'folder';
  collapsed: boolean;
  childrenFlat: Identifier[];
  path: string[];
  // subFoldersAndFiles: FileStructure[] | FolderStructure[];
}

interface FileOrFolder {
  id: string;
  name: string;
  type: ItemType;
  collapsed?: boolean;
  childrenFlat?: Identifier[];
  content?: string;
  extension?: ValidExtensions;
  path?: string[] | undefined;
}

export interface Identifier {
  id: string;
  type: ItemType;
}

export interface FileInFolder {
  id: string;
  type: 'file';
  subFoldersAndFiles: null;
}

export interface Directory {
  id: string;
  type: 'folder';
  subFoldersAndFiles: Array<Directory | FileInFolder>;
}

export interface Normalized {
  folders: {
    byId: Record<string, NormalizedFolder>;
    allIds: string[];
  };
  files: {
    byId: Record<string, FileStructure>;
    allIds: string[];
  };
}

interface ContextSelected {
  id: string;
  type: ItemType;
  e:
    | {
        x: number;
        y: number;
      }
    | false;
}

type ToCopy = {
  id: string;
  type: ItemType;
  subFoldersAndFiles: Directory[];
  isCut: boolean;
  parentId: string;
} | null;

interface MatchingLine {
  line: number;
  content: string;
}

export interface MatchingFile {
  id: string;
  name: string;
  extension: ValidExtensions;
  matches: MatchingLine[];
}

export interface SearchResults {
  files: MatchingFile[];
  numOfResults: number;
  numOfLines: number;
}

interface FileSystem {
  normalized: Normalized;
  selected: string;
  contextSelected: ContextSelected;
  toCopy: ToCopy;
  parentItemId: string;
  initialFolder: Directory;
  searchTerm: string;
  searchFocus: boolean;
  resizeCollapsed: boolean;
  projectName: string;
  // tabs: Tabs;
}

const initialState: FileSystem = {
  normalized: {
    files: {
      byId: {

      }, 
      allIds: [
      ],
    },
    folders: {
      byId: {
        head: {
          id: 'head',
          name: 'head',
          type: 'folder',
          collapsed: false,
          childrenFlat: [
          ],
          path: ['/'],
        },
      },
      allIds: ['head'],
    },
  },
  initialFolder: {
    id: 'head',
    type: 'folder',
    subFoldersAndFiles: [
    ],
  },
  selected: 'head',
  contextSelected: {
    id: 'head',
    type: 'folder',
    e: false,
  },
  toCopy: null,
  parentItemId: 'head',
  searchTerm: '',
  resizeCollapsed: false,
  searchFocus: false,
  projectName: 'Project',
  // tabs: [],
};

export const structureSlice = createSlice({
  name: 'structure',
  initialState,
  reducers: {
    addNode: (
      state,
      action: PayloadAction<{ value: string; inputType: ItemType }>,
    ) => {
      // if (!state.contextSelected) return;
      const { value, inputType } = action.payload;
      let newName = value;
      let newExtension = '';
      if (inputType === 'file') {
        newName = value.substring(0, value.lastIndexOf('.'));
        newExtension = value.substring(value.lastIndexOf('.') + 1);
      }

      const newChild: FileOrFolder = {
        id: `${inputType}-${uuidv4()}`,
        name: newName,
        type: inputType,
        extension:
          inputType === 'file' ? (newExtension as ValidExtensions) : undefined,
        collapsed: inputType === 'folder' ? true : undefined,
        childrenFlat: inputType === 'folder' ? [] : undefined,
        content: inputType === 'file' ? '' : undefined,
      };
      if (state.contextSelected.id === state.initialFolder.id) {
        state.initialFolder.subFoldersAndFiles = [
          ...state.initialFolder.subFoldersAndFiles,
          {
            id: newChild.id,
            type: newChild.type,
            subFoldersAndFiles: newChild.type === 'folder' ? [] : null,
          } as Directory,
        ];
      } else {
        bfsNodeAction(state.initialFolder, state.contextSelected.id, (item) => {
          item.subFoldersAndFiles = [
            ...(item.subFoldersAndFiles as Directory[]),
            {
              id: newChild.id,
              type: newChild.type,
              subFoldersAndFiles: newChild.type === 'folder' ? [] : null,
            } as Directory,
          ];
        });
      }
      state.normalized.folders.byId[state.contextSelected.id].childrenFlat = [
        ...state.normalized.folders.byId[state.contextSelected.id].childrenFlat,
        { id: newChild.id, type: newChild.type },
      ];
      const inputTypeForFetch =
        `${inputType}s` as keyof typeof state.normalized;
      state.normalized[inputTypeForFetch].byId[newChild.id] = newChild as
        | FileStructure
        | NormalizedFolder;
      state.normalized[inputTypeForFetch].allIds = [
        ...state.normalized[inputTypeForFetch].allIds,
        newChild.id,
      ];

      structureSlice.caseReducers.setPath(state, {
        payload: newChild.id,
        type: '',
      });

      structureSlice.caseReducers.sortFolder(state, {
        payload: { id: state.contextSelected.id },
        type: '',
      });
    },

    removeNode: (
      state,
      action: PayloadAction<
        { id: string; type: ItemType } | { id: null; type: null }
      >,
    ) => {
      const id = action.payload.id
        ? action.payload.id
        : state.contextSelected?.id;
      const type = action.payload.type
        ? action.payload.type
        : state.contextSelected?.type;
      if (id === state.initialFolder.id) return;
      dfsNodeAction(
        state.initialFolder.subFoldersAndFiles as Directory[],
        id,
        (item, parents) => {
          const parent = parents[parents.length - 1];
          parent.subFoldersAndFiles = parent.subFoldersAndFiles.filter(
            ({ id }) => {
              return id !== item.id;
            },
          );
          const parentId = parent.id;
          state.normalized.folders.byId[parentId].childrenFlat =
            state.normalized.folders.byId[parentId].childrenFlat.filter(
              ({ id: _id }) => _id !== item.id,
            );

          const deleteNodes = (subItems: Array<Directory | FileInFolder>) => {
            for (const item of subItems) {
              const { id, type } = item;
              // state.normalized[type + "s"].byId[id] = undefined;
              state.normalized[
                (type + 's') as keyof typeof state.normalized
              ].allIds = state.normalized[
                (type + 's') as keyof typeof state.normalized
              ].allIds.filter((_id) => _id !== id);
              if (item.type === 'folder') {
                deleteNodes(item.subFoldersAndFiles);
              }
            }
          };
          if (item.type === 'folder') {
            deleteNodes(item.subFoldersAndFiles);
          }

          if (parent.subFoldersAndFiles.length === 0) {
            state.normalized.folders.byId[parentId].collapsed = true;
          }
        },
        [state.initialFolder],
      );

      // state.normalized[type + "s"].byId[id] = undefined;
      state.normalized[(type + 's') as keyof typeof state.normalized].allIds =
        state.normalized[
          (type + 's') as keyof typeof state.normalized
        ].allIds.filter((_id) => _id !== id);
      const allIds =
        state.normalized[(type + 's') as keyof typeof state.normalized].allIds;

      if (allIds.find((id) => id === state.contextSelected.id) === undefined) {
        state.contextSelected = {
          id: state.initialFolder.id,
          type: 'folder',
          e: false,
        };
      }

      if (allIds.find((id) => id === state.selected) === undefined) {
        state.selected = state.initialFolder.id;
      }

      if (allIds.find((id) => id === state.parentItemId) === undefined) {
        state.parentItemId = state.initialFolder.id;
      }
      // remove Tab
      // state.tabs = state.tabs.filter(
      //   (tab) =>
      //     state.normalized.files.allIds.find((id) => id === tab.id) !==
      //     undefined
      // );
    },

    renameNode: (state, action: PayloadAction<{ value: string }>) => {
      let parentId = '';
      let newName = action.payload.value;
      let newExtension = '';
      if (state.contextSelected.type === 'file') {
        newName = action.payload.value.substring(
          0,
          action.payload.value.lastIndexOf('.'),
        );
        newExtension = action.payload.value.substring(
          action.payload.value.lastIndexOf('.') + 1,
        );
      }
      dfsNodeAction(
        state.initialFolder.subFoldersAndFiles as Directory[],
        state.contextSelected.id,
        (_, parents) => {
          const parent = parents[parents.length - 1];
          // item.name = action.payload.value;
          parentId = parent.id;
        },
        [state.initialFolder],
      );
      state.normalized[
        (state.contextSelected.type + 's') as keyof typeof state.normalized
      ].byId[state.contextSelected.id].name = newName;

      if (state.contextSelected.type === 'file') {
        state.normalized.files.byId[state.contextSelected.id].extension =
          newExtension as ValidExtensions;
      }

      structureSlice.caseReducers.sortFolder(state, {
        payload: { id: parentId },
        type: '',
      });
      // update tab
      // state.tabs = state.tabs.map((tab) => {
      //   if (
      //     state.normalized.files.allIds.find((id) => id === tab.id) !==
      //     undefined
      //   ) {
      //     return {
      //       ...tab,
      //       extension: newExtension as ValidExtensions,
      //     };
      //   }
      //   return tab;
      // });
    },

    updateFileContents: (
      state,
      action: PayloadAction<{ id: string; value: string }>,
    ) => {
      state.normalized.files.byId[action.payload.id].content =
        action.payload.value;
    },

    // normalizeState: (state) => {
    //   state.normalized.folders.byId["head"] = {
    //     ...state.initialFolder,
    //     childrenIds: undefined,
    //     childrenFlat: [],
    //   };
    //   state.normalized.folders.allIds = ["head"];

    //   const mapStructureRecursively = (structure: any, normalized: any) => {
    //     for (let item of structure) {
    //       if (item.type === "folder") {
    //         normalized.folders.byId[item.id] = {
    //           ...item,
    //           childrenIds: undefined,
    //           childrenFlat: item.children.map((child) => {
    //             return { id: child.id, name: child.name, type: child.type };
    //           }),
    //         };
    //         normalized.folders.allIds = [...normalized.folders.allIds, item.id];
    //         mapStructureRecursively(item.children, normalized);
    //       } else if (item.type === "file") {
    //         normalized.files.byId[item.id] = item;
    //         normalized.files.allIds = [...normalized.files.allIds, item.id];
    //       }
    //     }
    //   };
    //   mapStructureRecursively(state.initialFolder.children, state.normalized);
    //   structureSlice.caseReducers.sortFolder(state, {
    //     payload: { id: null },
    //   });
    // },

    collapseOrExpand: (
      state,
      action: PayloadAction<{ item: Identifier; collapse: boolean }>,
    ) => {
      if (action.payload.item.type === 'folder') {
        const { item, collapse } = action.payload;
        // bfsNodeAction(state.initialFolder, item.id, (folder) => {
        //   if (collapse) {
        //     folder.collapsed = !folder.collapsed;
        //   } else {
        //     folder.collapsed = false;
        //   }
        // });
        if (collapse) {
          // state.selected = item.id;
          // state.contextSelected.id = null;
        }
        if (collapse) {
          state.normalized.folders.byId[item.id].collapsed =
            !state.normalized.folders.byId[item.id].collapsed;
        } else {
          state.normalized.folders.byId[item.id].collapsed = false;
        }
      } else if (action.payload.item.type === 'file') {
        // state.contextSelected.id = null;
      }
      // state.selected = action.payload.item.id;
    },

    copyNode: (state) => {
      if (!state.toCopy) return;

      if (state.toCopy.isCut) {
        if (state.toCopy.type === 'folder') {
          const recursiveCut = state.normalized.folders.byId[
            state.contextSelected.id
          ].path.includes(state.toCopy.id);

          if (recursiveCut || state.toCopy.id === state.contextSelected.id) {
            state.toCopy = null;
            return;
          }
        }
        const sameCut = state.normalized.folders.byId[
          state.contextSelected.id
        ].childrenFlat.find(({ id }) => id === state.toCopy?.id);
        if (sameCut) {
          state.toCopy = null;
          return;
        }
      }
      const item =
        state.normalized[
          (state.toCopy.type + 's') as keyof typeof state.normalized
        ].byId[state.toCopy.id];
      const toCopyItem = {
        ...item,
        childrenFlat:
          state.toCopy.type === 'folder'
            ? state.toCopy.subFoldersAndFiles.map(({ id, type }) => {
                return { id, type };
              })
            : undefined,
        subFoldersAndFiles: state.toCopy.subFoldersAndFiles,
        // subFoldersAndFiles: state.toCopy.subFoldersAndFiles
        //   ? state.toCopy.subFoldersAndFiles
        //   : undefined,
        id: `${state.toCopy.type}-${uuidv4()}`,

        wholeName:
          item.type === 'file' ? `${item.name}.${item.extension}` : item.name,
        // path: item.type === "file" ? [] : "",
      };

      const knownNames = state.normalized.folders.byId[
        `${state.contextSelected.id}`
      ].childrenFlat.map(({ id, type }) => {
        if (type === 'folder') {
          return state.normalized[`${type}s`].byId[id].name;
        } else {
          const file = state.normalized[`${type}s`].byId[id];
          return `${file.name}.${file.extension}`;
        }
      });
      let newName = toCopyItem.wholeName;
      const isNameTaken =
        knownNames.filter((knownName) => knownName === toCopyItem.wholeName)
          .length > 0;
      if (isNameTaken) {
        let i = 1;
        while (
          knownNames.filter((knownName) => {
            // eslint-disable-next-line
            if (toCopyItem.type === 'file') {
              return (
                knownName ===
                `${toCopyItem.name}_Copy_${i}.${toCopyItem.extension}`
              );
            } else {
              return knownName === `${toCopyItem.name}_Copy_${i}`;
            }
          }).length > 0
        ) {
          i++;
        }
        newName =
          toCopyItem.type === 'folder'
            ? `${toCopyItem.name}_Copy_${i}`
            : `${toCopyItem.name}_Copy_${i}.${toCopyItem.extension}`;
        toCopyItem.wholeName = newName;
      }

      const newNode = {
        ...toCopyItem,
        name:
          toCopyItem.type === 'file'
            ? newName.substring(0, newName.lastIndexOf('.'))
            : newName,
        extension:
          toCopyItem.type === 'file' ? newName.split('.').pop() : undefined,
        // subFoldersAndFiles: state.toCopy.type === "folder" ? [] : null,
        collapsed: state.toCopy.type === 'folder' ? false : undefined,
      };
      state.normalized.folders.byId[state.contextSelected.id].collapsed = false;
      state.normalized.folders.byId[state.contextSelected.id].childrenFlat = [
        ...state.normalized.folders.byId[state.contextSelected.id].childrenFlat,
        { id: newNode.id, type: newNode.type },
      ];

      if (newNode.type === 'folder') {
        state.normalized.folders.byId[newNode.id] = {
          id: newNode.id,
          name: newNode.name,
          type: 'folder',
          collapsed: false,
          childrenFlat: newNode.childrenFlat as Identifier[],
          path: [] as string[],
        };
      } else {
        state.normalized.files.byId[newNode.id] = {
          id: newNode.id,
          name: newNode.name,
          type: 'file',
          extension: newNode.extension as ValidExtensions,
          content: newNode.content,
          path: [] as string[],
        };
      }
      // state.normalized[`${newNode.type}s`].byId[newNode.id] = {
      //   ...newNode,
      //   subFoldersAndFiles: null,
      // };
      state.normalized[`${newNode.type}s`].allIds = [
        ...state.normalized[`${newNode.type}s`].allIds,
        newNode.id,
      ];

      const actionOnChildren = (newNode: Directory) => {
        if (state.toCopy?.type === 'folder') {
          const toCopyFolderPath = state.normalized.folders.byId[
            newNode.id
          ].path.slice(0, -1);

          dfsCbOnEach(
            newNode.subFoldersAndFiles as Directory[],
            (item, parentIds) => {
              const parentId = parentIds[parentIds.length - 1];
              const newItem = {
                ...state.normalized[`${item.type}s`].byId[item.id],
              };
              newItem.id = `${newItem.type}-${uuidv4()}`;
              newItem.path = [...toCopyFolderPath, ...parentIds, newItem.id];

              state.normalized[`${newItem.type}s`].byId[newItem.id] = newItem;
              state.normalized[`${newItem.type}s`].allIds = [
                ...state.normalized[`${newItem.type}s`].allIds,
                newItem.id,
              ];
              state.normalized.folders.byId[parentId].childrenFlat =
                state.normalized.folders.byId[parentId].childrenFlat.map(
                  (existingItem) => {
                    if (existingItem.id === item.id) {
                      return { ...existingItem, id: newItem.id };
                    } else {
                      return existingItem;
                    }
                  },
                );
              item.id = newItem.id;
            },
            [],
            [newNode.id],
          );
        }
        return newNode;
      };

      const inputTypeForNormalized =
        `${newNode.type}s` as keyof typeof state.normalized;

      if (state.contextSelected.id === state.initialFolder.id) {
        state.normalized[inputTypeForNormalized].byId[newNode.id].path = [
          '/',
          state.initialFolder.id,
          newNode.id,
        ];

        const node = actionOnChildren(newNode as Directory);

        state.initialFolder.subFoldersAndFiles = [
          ...state.initialFolder.subFoldersAndFiles,
          {
            id: node.id,
            type: node.type,
            subFoldersAndFiles:
              node.type === 'folder' ? node.subFoldersAndFiles : null,
          } as Directory,
        ];
      } else {
        dfsNodeAction(
          state.initialFolder.subFoldersAndFiles as Directory[],
          state.contextSelected.id,
          (parent, beforeParents) => {
            const parentPath = state.normalized.folders.byId[parent.id].path;
            const parentsIds = [
              ...beforeParents.map(({ id }) => id),
              parent.id,
            ];
            state.normalized[inputTypeForNormalized].byId[newNode.id].path = [
              '/',
              ...parentsIds,
              newNode.id,
            ];
            const node = actionOnChildren(newNode as Directory);
            parent.subFoldersAndFiles = [
              ...(parent.subFoldersAndFiles as Directory[]),
              {
                id: node.id,
                type: node.type,
                subFoldersAndFiles: node.subFoldersAndFiles,
              },
            ];
            const inputTypeForFetch =
              `${newNode.type}s` as keyof typeof state.normalized;
            state.normalized[inputTypeForFetch].byId[newNode.id].path = [
              ...parentPath,
              newNode.id,
            ];
          },
          [state.initialFolder],
        );
      }

      // else {
      //   state.initialFolder.subFoldersAndFiles = [
      //     ...state.initialFolder.subFoldersAndFiles,
      //     {
      //       id: newNode.id,
      //       type: newNode.type,
      //       subFoldersAndFiles:
      //         newNode.type === "folder"
      //           ? state.toCopy.subFoldersAndFiles
      //           : null,
      //     },
      //   ];
      // }
      structureSlice.caseReducers.sortFolder(state, {
        payload: { id: state.contextSelected.id },
        type: '',
      });

      if (state.toCopy.isCut) {
        structureSlice.caseReducers.removeNode(state, {
          payload: { id: state.toCopy.id, type: state.toCopy.type },
          type: '',
        });
      }

      if (state.toCopy.isCut) {
        state.toCopy = null;
      }
    },

    setSelected: (
      state,
      action: PayloadAction<{
        id: string;
        type: ItemType;
      }>,
    ) => {
      if (state.selected !== action.payload.id) {
        // state.contextSelected = {
        //   id: state.initialFolder.id,
        //   type: 'folder',
        //   e: false,
        // };
        state.selected = action.payload.id;
      }
    },
    setContextSelectedForFileAction: (state, action: PayloadAction<string>) => {
      state.contextSelected = {
        id: action.payload,
        type: 'folder',
        e: false,
      };
      // state.selected = action.payload;

    },

    contextClick: (
      state,
      action: PayloadAction<{
        id: string;
        type: string;
        threeDot:
          | {
              x: number;
              y: number;
            }
          | false;
      }>,
    ) => {
      const { id, type, threeDot } = action.payload;
      // Don't run this if the user clicks on the same item
      // if (id === state.contextSelected.id) return;
      const newContext = {
        id: '',
        type: '',
        e: threeDot
          ? {
              x: threeDot.x,
              y: threeDot.y,
            }
          : false,
      };
      if (id !== null) {
        newContext.id = id;
        newContext.type = type;
        if (threeDot) {
          newContext.e = threeDot;
        }
      } else {
        newContext.id = state.initialFolder.id;
        newContext.type = 'folder';

        if (threeDot) {
          newContext.e = threeDot;
        }
      }

      state.contextSelected = newContext as ContextSelected;
    },
    setToCopy: (
      state,
      action: PayloadAction<{
        id: string;
        type: ItemType;
        isCut: boolean;
      }>,
    ) => {
      const children: Directory[] = [];

      const newCopy = {
        id: action.payload.id,
        type: action.payload.type,
        isCut: action.payload.isCut,
        parentId: '',
        subFoldersAndFiles: children,
      };

      if (newCopy.type === 'folder') {
        dfsNodeAction(
          state.initialFolder.subFoldersAndFiles as Directory[],
          action.payload.id,
          (toCopyFolder, parents) => {
            const parent = parents[parents.length - 1];
            newCopy.subFoldersAndFiles =
              toCopyFolder.subFoldersAndFiles as Directory[];
            newCopy.parentId = parent.id;
          },
          [state.initialFolder],
        );
      }

      state.toCopy = newCopy;
    },
    setParentItemId: (state, action: PayloadAction<string>) => {
      if (action.payload !== '') {
        if (action.payload.includes('file')) {
          let parentId = '';
          dfsNodeAction(
            state.initialFolder.subFoldersAndFiles as Directory[],
            action.payload,
            (_, parents) => {
              const parent = parents[parents.length - 1];
              parentId = parent.id;
            },
            [state.initialFolder],
          );
          state.parentItemId = parentId;
        } else {
          state.parentItemId = action.payload;
        }
      } else {
        let parentId = '';
        dfsNodeAction(
          state.initialFolder.subFoldersAndFiles as Directory[],
          state.contextSelected.id,
          (_, parents) => {
            const parent = parents[parents.length - 1];
            parentId = parent.id;
          },
          [state.initialFolder],
        );
        state.parentItemId = parentId;
      }
    },
    setPath: (state, action: PayloadAction<string>) => {
      dfsNodeAction(
        state.initialFolder.subFoldersAndFiles as Directory[],
        action.payload,
        (item, parents) => {
          const inputTypeForFetch =
            `${item.type}s` as keyof typeof state.normalized;

          const itemData = state.normalized[inputTypeForFetch].byId[item.id];
          itemData.path = ['/', ...parents.map(({ id }) => id), item.id];
          // const filePath = parents
          //   .map(({ id }) => state.normalized.folders.byId[id].name)
          //   .join("/");
          // fileData.path =
          //   `${filePath}/${fileData.name}.${fileData.extension}`.split("/");
        },
        [state.initialFolder],
      );
    },
    sortFolder: (state, action: PayloadAction<{ id: string }>) => {
      findSortable(
        state.initialFolder,
        (structure: Directory) => {
          if (
            action.payload.id !== null &&
            action.payload.id !== structure.id
          ) {
            return;
          }
          if (
            action.payload.id === null ||
            structure.id === action.payload.id
          ) {
            const toSort = structure.subFoldersAndFiles.map(
              (item: Directory | FileInFolder) => {
                return state.normalized[`${item.type}s`].byId[item.id];
              },
            );
            toSort.sort(
              (
                a: FileStructure | NormalizedFolder,
                b: FileStructure | NormalizedFolder,
              ) => {
                if (a.type === 'folder' && b.type === 'file') {
                  return -1;
                } else if (a.type === 'file' && b.type === 'folder') {
                  return 1;
                } else {
                  return a.name.localeCompare(b.name);
                }
              },
            );

            structure.subFoldersAndFiles = toSort.map(
              ({ id, type }: FileStructure | NormalizedFolder) => {
                const subFoldersAndFiles = structure.subFoldersAndFiles.find(
                  ({ id: _id }) => _id === id,
                )?.subFoldersAndFiles;
                return { id, type, subFoldersAndFiles };
              },
            ) as Directory[];
          }
        },
        action.payload.id,
      );
    },
    search: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload.replace(
        /[-[\]{}()*+?.,\\^$|#\s]/g,
        '\\$&',
      );
    },
    setResizeCollapsed: (state, action: PayloadAction<boolean>) => {
      state.resizeCollapsed = action.payload;
    },
    setSearchFocused: (state, action: PayloadAction<boolean>) => {
      state.searchFocus = action.payload;
    },
    setProjectName: (state, action: PayloadAction<string>) => {
      state.projectName = action.payload;
    }
  },
});

export const getInitialSet = (state: RootState) =>
  state.structure.initialFolder;

export const contextSelectedEvent = (state: RootState) =>
  state.structure.contextSelected?.e;

export const contextSelectedItem = (state: RootState) =>
  state.structure.contextSelected?.id;

export const contextSelectedItemType = (state: RootState) =>
  state.structure.contextSelected?.type;

export const fileIds = (state: RootState) =>
  state.structure.normalized.files.allIds;
export const folderIds = (state: RootState) =>
  state.structure.normalized.folders.allIds;

export const clipboard = (state: RootState) => state.structure.toCopy;

export const getSearchTerm = (state: RootState) => state.structure.searchTerm;

export const isResizeCollapsed = (state: RootState) =>
  state.structure.resizeCollapsed;
export const searchFocus = (state: RootState) => state.structure.searchFocus;

// export const selectedItem = (state: RootState) => state.structure.selected;

export const selectedItem = createSelector(
  (state: RootState) => state.structure.selected,
  (selected) => selected,
);

export const contextSelectedObj = createSelector(
  (state: RootState) => state.structure.contextSelected,
  (state: RootState) => state.structure.normalized,
  (contextSelected: ContextSelected, normalized: Normalized) => {
    const item =
      normalized[`${contextSelected?.type}s` as keyof typeof normalized].byId[
        contextSelected?.id
      ];

    let wholeName = item.name;
    if (item.type === 'file') {
      wholeName = `${item.name}.${item.extension}`;
    }
    const actualPath = `${item.path
      .filter((id) => id !== '/' && id !== 'head')
      .map((id, i) => {
        if (contextSelected?.type === 'file') {
          if (i < item.path.length - 3) {
            return normalized.folders.byId[id].name;
          } else {
            return `${normalized.files.byId[id].name}.${normalized.files.byId[id].extension}`;
          }
        } else if (contextSelected?.type === 'folder') {
          return normalized.folders.byId[id].name;
        }
        return 'UNKNOWN';
      })
      .join('/')}`;
    return {
      id: item.id,
      name: item.name,
      type: item.type,
      wholeName,
      actualPath,
    };
  },
);

export const getItem = createSelector(
  (state: RootState) => state.structure.contextSelected,
  (state: RootState) => state.structure.normalized,
  (contextSelected: ContextSelected, normalized: Normalized) => {
    if (!contextSelected) return { id: undefined, name: undefined };
    const item =
      normalized[`${contextSelected.type}s`].byId[contextSelected.id];
    if (item.type === 'file') {
      return {
        id: item.id,
        name: item.name,
        type: item.type,
        extension: item.extension,
      };
    } else {
      return {
        id: item.id,
        name: item.name,
        type: item.type,
      };
    }
  },
);

export const getCurrentItems = createSelector(
  (state: RootState) => state.structure.normalized,
  (state: RootState) => state.structure.parentItemId,
  (normalized: Normalized, parentItemId: string) => {
    if (!normalized || !parentItemId) return [];
    return normalized.folders.byId[`${parentItemId}`].childrenFlat.map(
      ({ id, type }) => {
        return normalized[`${type}s`].byId[id];
      },
    );
  },
);

// export const getFileTree = createSelector(
//   (state: RootState) => state.structure.normalized,
//   (normalized: Normalized) => {
//     const allFileIds = normalized.files.allIds;
//     const tree = getTree(allFileIds, normalized);
//     return tree;
//   }
// );

export const getSearchResults = createSelector(
  (state: RootState) => state.structure.searchTerm,
  (state: RootState) => state.structure.normalized.files,
  (searchTerm: string, files: Normalized['files']) => {
    const res: SearchResults = {
      files: [],
      numOfResults: 0,
      numOfLines: 0,
    };
    if (searchTerm.trim() === '') return res;
    const foundFiles: MatchingFile[] = [];
    files.allIds.forEach((id) => {
      const currentFile = files.byId[id];
      const content = currentFile.content;
      const regex = new RegExp(searchTerm, 'g');
      const matches = content.match(regex);
      const allRes: MatchingLine[] = [];
      if (matches) {
        res.numOfResults += 1;
        res.numOfLines += matches.length;
        const nL = content.split('\r');
        for (let j = 0; j < nL.length; j++) {
          if (nL[j].includes(matches[0])) {
            allRes.push({
              line: j + 1,
              content: nL[j].trim(),
            });
          }
        }
        foundFiles.push({
          id: currentFile.id,
          name: currentFile.name,
          extension: currentFile.extension,
          matches: allRes,
        });
      }
    });
    res.files = foundFiles;
    return res;
  },
);

export const {
  addNode,
  removeNode,
  renameNode,
  collapseOrExpand,
  updateFileContents,
  // normalizeState,
  setSelected,
  contextClick,
  setToCopy,
  copyNode,
  setParentItemId,
  setContextSelectedForFileAction,
  search,
  setResizeCollapsed,
  setSearchFocused,
  setProjectName
} = structureSlice.actions;

export default structureSlice.reducer;
