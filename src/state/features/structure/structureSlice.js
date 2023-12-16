import { createSelector, createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { bfsNodeAction, dfsCbOnEach, dfsNodeAction } from './utils/traversal';
import { findSortable } from './utils/sorting';
const initialState = {
    normalized: {
        files: {
            byId: {},
            allIds: [],
        },
        folders: {
            byId: {
                head: {
                    id: 'head',
                    name: 'head',
                    type: 'folder',
                    collapsed: false,
                    childrenFlat: [],
                    path: ['/'],
                },
            },
            allIds: ['head'],
        },
    },
    initialFolder: {
        id: 'head',
        type: 'folder',
        subFoldersAndFiles: [],
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
        addNode: (state, action) => {
            // if (!state.contextSelected) return;
            const { value, inputType } = action.payload;
            let newName = value;
            let newExtension = '';
            if (inputType === 'file') {
                newName = value.substring(0, value.lastIndexOf('.'));
                newExtension = value.substring(value.lastIndexOf('.') + 1);
            }
            const newChild = {
                id: `${inputType}-${uuidv4()}`,
                name: newName,
                type: inputType,
                extension: inputType === 'file' ? (newExtension) : undefined,
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
                    },
                ];
            }
            else {
                bfsNodeAction(state.initialFolder, state.contextSelected.id, (item) => {
                    item.subFoldersAndFiles = [
                        ...item.subFoldersAndFiles,
                        {
                            id: newChild.id,
                            type: newChild.type,
                            subFoldersAndFiles: newChild.type === 'folder' ? [] : null,
                        },
                    ];
                });
            }
            state.normalized.folders.byId[state.contextSelected.id].childrenFlat = [
                ...state.normalized.folders.byId[state.contextSelected.id].childrenFlat,
                { id: newChild.id, type: newChild.type },
            ];
            const inputTypeForFetch = `${inputType}s`;
            state.normalized[inputTypeForFetch].byId[newChild.id] = newChild;
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
        removeNode: (state, action) => {
            const id = action.payload.id
                ? action.payload.id
                : state.contextSelected?.id;
            const type = action.payload.type
                ? action.payload.type
                : state.contextSelected?.type;
            if (id === state.initialFolder.id)
                return;
            dfsNodeAction(state.initialFolder.subFoldersAndFiles, id, (item, parents) => {
                const parent = parents[parents.length - 1];
                parent.subFoldersAndFiles = parent.subFoldersAndFiles.filter(({ id }) => {
                    return id !== item.id;
                });
                const parentId = parent.id;
                state.normalized.folders.byId[parentId].childrenFlat =
                    state.normalized.folders.byId[parentId].childrenFlat.filter(({ id: _id }) => _id !== item.id);
                const deleteNodes = (subItems) => {
                    for (const item of subItems) {
                        const { id, type } = item;
                        // state.normalized[type + "s"].byId[id] = undefined;
                        state.normalized[(type + 's')].allIds = state.normalized[(type + 's')].allIds.filter((_id) => _id !== id);
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
            }, [state.initialFolder]);
            // state.normalized[type + "s"].byId[id] = undefined;
            state.normalized[(type + 's')].allIds =
                state.normalized[(type + 's')].allIds.filter((_id) => _id !== id);
            const allIds = state.normalized[(type + 's')].allIds;
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
        renameNode: (state, action) => {
            let parentId = '';
            let newName = action.payload.value;
            let newExtension = '';
            if (state.contextSelected.type === 'file') {
                newName = action.payload.value.substring(0, action.payload.value.lastIndexOf('.'));
                newExtension = action.payload.value.substring(action.payload.value.lastIndexOf('.') + 1);
            }
            dfsNodeAction(state.initialFolder.subFoldersAndFiles, state.contextSelected.id, (_, parents) => {
                const parent = parents[parents.length - 1];
                // item.name = action.payload.value;
                parentId = parent.id;
            }, [state.initialFolder]);
            state.normalized[(state.contextSelected.type + 's')].byId[state.contextSelected.id].name = newName;
            if (state.contextSelected.type === 'file') {
                state.normalized.files.byId[state.contextSelected.id].extension =
                    newExtension;
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
            //       extension: newExtension,
            //     };
            //   }
            //   return tab;
            // });
        },
        updateFileContents: (state, action) => {
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
        collapseOrExpand: (state, action) => {
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
                }
                else {
                    state.normalized.folders.byId[item.id].collapsed = false;
                }
            }
            else if (action.payload.item.type === 'file') {
                // state.contextSelected.id = null;
            }
            // state.selected = action.payload.item.id;
        },
        copyNode: (state) => {
            if (!state.toCopy)
                return;
            if (state.toCopy.isCut) {
                if (state.toCopy.type === 'folder') {
                    const recursiveCut = state.normalized.folders.byId[state.contextSelected.id].path.includes(state.toCopy.id);
                    if (recursiveCut || state.toCopy.id === state.contextSelected.id) {
                        state.toCopy = null;
                        return;
                    }
                }
                const sameCut = state.normalized.folders.byId[state.contextSelected.id].childrenFlat.find(({ id }) => id === state.toCopy?.id);
                if (sameCut) {
                    state.toCopy = null;
                    return;
                }
            }
            const item = state.normalized[(state.toCopy.type + 's')].byId[state.toCopy.id];
            const toCopyItem = {
                ...item,
                childrenFlat: state.toCopy.type === 'folder'
                    ? state.toCopy.subFoldersAndFiles.map(({ id, type }) => {
                        return { id, type };
                    })
                    : undefined,
                subFoldersAndFiles: state.toCopy.subFoldersAndFiles,
                // subFoldersAndFiles: state.toCopy.subFoldersAndFiles
                //   ? state.toCopy.subFoldersAndFiles
                //   : undefined,
                id: `${state.toCopy.type}-${uuidv4()}`,
                wholeName: item.type === 'file' ? `${item.name}.${item.extension}` : item.name,
                // path: item.type === "file" ? [] : "",
            };
            const knownNames = state.normalized.folders.byId[`${state.contextSelected.id}`].childrenFlat.map(({ id, type }) => {
                if (type === 'folder') {
                    return state.normalized[`${type}s`].byId[id].name;
                }
                else {
                    const file = state.normalized[`${type}s`].byId[id];
                    return `${file.name}.${file.extension}`;
                }
            });
            let newName = toCopyItem.wholeName;
            const isNameTaken = knownNames.filter((knownName) => knownName === toCopyItem.wholeName)
                .length > 0;
            if (isNameTaken) {
                let i = 1;
                while (knownNames.filter((knownName) => {
                    // eslint-disable-next-line
                    if (toCopyItem.type === 'file') {
                        return (knownName ===
                            `${toCopyItem.name}_Copy_${i}.${toCopyItem.extension}`);
                    }
                    else {
                        return knownName === `${toCopyItem.name}_Copy_${i}`;
                    }
                }).length > 0) {
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
                name: toCopyItem.type === 'file'
                    ? newName.substring(0, newName.lastIndexOf('.'))
                    : newName,
                extension: toCopyItem.type === 'file' ? newName.split('.').pop() : undefined,
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
                    childrenFlat: newNode.childrenFlat,
                    path: [],
                };
            }
            else {
                state.normalized.files.byId[newNode.id] = {
                    id: newNode.id,
                    name: newNode.name,
                    type: 'file',
                    extension: newNode.extension,
                    content: newNode.content,
                    path: [],
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
            const actionOnChildren = (newNode) => {
                if (state.toCopy?.type === 'folder') {
                    const toCopyFolderPath = state.normalized.folders.byId[newNode.id].path.slice(0, -1);
                    dfsCbOnEach(newNode.subFoldersAndFiles, (item, parentIds) => {
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
                            state.normalized.folders.byId[parentId].childrenFlat.map((existingItem) => {
                                if (existingItem.id === item.id) {
                                    return { ...existingItem, id: newItem.id };
                                }
                                else {
                                    return existingItem;
                                }
                            });
                        item.id = newItem.id;
                    }, [], [newNode.id]);
                }
                return newNode;
            };
            const inputTypeForNormalized = `${newNode.type}s`;
            if (state.contextSelected.id === state.initialFolder.id) {
                state.normalized[inputTypeForNormalized].byId[newNode.id].path = [
                    '/',
                    state.initialFolder.id,
                    newNode.id,
                ];
                const node = actionOnChildren(newNode);
                state.initialFolder.subFoldersAndFiles = [
                    ...state.initialFolder.subFoldersAndFiles,
                    {
                        id: node.id,
                        type: node.type,
                        subFoldersAndFiles: node.type === 'folder' ? node.subFoldersAndFiles : null,
                    },
                ];
            }
            else {
                dfsNodeAction(state.initialFolder.subFoldersAndFiles, state.contextSelected.id, (parent, beforeParents) => {
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
                    const node = actionOnChildren(newNode);
                    parent.subFoldersAndFiles = [
                        ...parent.subFoldersAndFiles,
                        {
                            id: node.id,
                            type: node.type,
                            subFoldersAndFiles: node.subFoldersAndFiles,
                        },
                    ];
                    const inputTypeForFetch = `${newNode.type}s`;
                    state.normalized[inputTypeForFetch].byId[newNode.id].path = [
                        ...parentPath,
                        newNode.id,
                    ];
                }, [state.initialFolder]);
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
        setSelected: (state, action) => {
            if (state.selected !== action.payload.id) {
                // state.contextSelected = {
                //   id: state.initialFolder.id,
                //   type: 'folder',
                //   e: false,
                // };
                state.selected = action.payload.id;
            }
        },
        setContextSelectedForFileAction: (state, action) => {
            state.contextSelected = {
                id: action.payload,
                type: 'folder',
                e: false,
            };
            // state.selected = action.payload;
        },
        contextClick: (state, action) => {
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
            }
            else {
                newContext.id = state.initialFolder.id;
                newContext.type = 'folder';
                if (threeDot) {
                    newContext.e = threeDot;
                }
            }
            state.contextSelected = newContext;
        },
        setToCopy: (state, action) => {
            const children = [];
            const newCopy = {
                id: action.payload.id,
                type: action.payload.type,
                isCut: action.payload.isCut,
                parentId: '',
                subFoldersAndFiles: children,
            };
            if (newCopy.type === 'folder') {
                dfsNodeAction(state.initialFolder.subFoldersAndFiles, action.payload.id, (toCopyFolder, parents) => {
                    const parent = parents[parents.length - 1];
                    newCopy.subFoldersAndFiles =
                        toCopyFolder.subFoldersAndFiles;
                    newCopy.parentId = parent.id;
                }, [state.initialFolder]);
            }
            state.toCopy = newCopy;
        },
        setParentItemId: (state, action) => {
            if (action.payload !== '') {
                if (action.payload.includes('file')) {
                    let parentId = '';
                    dfsNodeAction(state.initialFolder.subFoldersAndFiles, action.payload, (_, parents) => {
                        const parent = parents[parents.length - 1];
                        parentId = parent.id;
                    }, [state.initialFolder]);
                    state.parentItemId = parentId;
                }
                else {
                    state.parentItemId = action.payload;
                }
            }
            else {
                let parentId = '';
                dfsNodeAction(state.initialFolder.subFoldersAndFiles, state.contextSelected.id, (_, parents) => {
                    const parent = parents[parents.length - 1];
                    parentId = parent.id;
                }, [state.initialFolder]);
                state.parentItemId = parentId;
            }
        },
        setPath: (state, action) => {
            dfsNodeAction(state.initialFolder.subFoldersAndFiles, action.payload, (item, parents) => {
                const inputTypeForFetch = `${item.type}s`;
                const itemData = state.normalized[inputTypeForFetch].byId[item.id];
                itemData.path = ['/', ...parents.map(({ id }) => id), item.id];
                // const filePath = parents
                //   .map(({ id }) => state.normalized.folders.byId[id].name)
                //   .join("/");
                // fileData.path =
                //   `${filePath}/${fileData.name}.${fileData.extension}`.split("/");
            }, [state.initialFolder]);
        },
        sortFolder: (state, action) => {
            findSortable(state.initialFolder, (structure) => {
                if (action.payload.id !== null &&
                    action.payload.id !== structure.id) {
                    return;
                }
                if (action.payload.id === null ||
                    structure.id === action.payload.id) {
                    const toSort = structure.subFoldersAndFiles.map((item) => {
                        return state.normalized[`${item.type}s`].byId[item.id];
                    });
                    toSort.sort((a, b) => {
                        if (a.type === 'folder' && b.type === 'file') {
                            return -1;
                        }
                        else if (a.type === 'file' && b.type === 'folder') {
                            return 1;
                        }
                        else {
                            return a.name.localeCompare(b.name);
                        }
                    });
                    structure.subFoldersAndFiles = toSort.map(({ id, type }) => {
                        const subFoldersAndFiles = structure.subFoldersAndFiles.find(({ id: _id }) => _id === id)?.subFoldersAndFiles;
                        return { id, type, subFoldersAndFiles };
                    });
                }
            }, action.payload.id);
        },
        search: (state, action) => {
            state.searchTerm = action.payload.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
        },
        setResizeCollapsed: (state, action) => {
            state.resizeCollapsed = action.payload;
        },
        setSearchFocused: (state, action) => {
            state.searchFocus = action.payload;
        },
        setProjectName: (state, action) => {
            state.projectName = action.payload;
        }
    },
});
export const getInitialSet = (state) => state.structure.initialFolder;
export const contextSelectedEvent = (state) => state.structure.contextSelected?.e;
export const contextSelectedItem = (state) => state.structure.contextSelected?.id;
export const contextSelectedItemType = (state) => state.structure.contextSelected?.type;
export const fileIds = (state) => state.structure.normalized.files.allIds;
export const folderIds = (state) => state.structure.normalized.folders.allIds;
export const clipboard = (state) => state.structure.toCopy;
export const getSearchTerm = (state) => state.structure.searchTerm;
export const isResizeCollapsed = (state) => state.structure.resizeCollapsed;
export const searchFocus = (state) => state.structure.searchFocus;
// export const selectedItem = (state: RootState) => state.structure.selected;
export const selectedItem = createSelector((state) => state.structure.selected, (selected) => selected);
export const contextSelectedObj = createSelector((state) => state.structure.contextSelected, (state) => state.structure.normalized, (contextSelected, normalized) => {
    const item = normalized[`${contextSelected?.type}s`].byId[contextSelected?.id];
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
            }
            else {
                return `${normalized.files.byId[id].name}.${normalized.files.byId[id].extension}`;
            }
        }
        else if (contextSelected?.type === 'folder') {
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
});
export const getItem = createSelector((state) => state.structure.contextSelected, (state) => state.structure.normalized, (contextSelected, normalized) => {
    if (!contextSelected)
        return { id: undefined, name: undefined };
    const item = normalized[`${contextSelected.type}s`].byId[contextSelected.id];
    if (item.type === 'file') {
        return {
            id: item.id,
            name: item.name,
            type: item.type,
            extension: item.extension,
        };
    }
    else {
        return {
            id: item.id,
            name: item.name,
            type: item.type,
        };
    }
});
export const getCurrentItems = createSelector((state) => state.structure.normalized, (state) => state.structure.parentItemId, (normalized, parentItemId) => {
    if (!normalized || !parentItemId)
        return [];
    return normalized.folders.byId[`${parentItemId}`].childrenFlat.map(({ id, type }) => {
        return normalized[`${type}s`].byId[id];
    });
});
// export const getFileTree = createSelector(
//   (state: RootState) => state.structure.normalized,
//   (normalized: Normalized) => {
//     const allFileIds = normalized.files.allIds;
//     const tree = getTree(allFileIds, normalized);
//     return tree;
//   }
// );
export const getSearchResults = createSelector((state) => state.structure.searchTerm, (state) => state.structure.normalized.files, (searchTerm, files) => {
    const res = {
        files: [],
        numOfResults: 0,
        numOfLines: 0,
    };
    if (searchTerm.trim() === '')
        return res;
    const foundFiles = [];
    files.allIds.forEach((id) => {
        const currentFile = files.byId[id];
        const content = currentFile.content;
        const regex = new RegExp(searchTerm, 'g');
        const matches = content.match(regex);
        const allRes = [];
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
});
export const { addNode, removeNode, renameNode, collapseOrExpand, updateFileContents, 
// normalizeState,
setSelected, contextClick, setToCopy, copyNode, setParentItemId, setContextSelectedForFileAction, search, setResizeCollapsed, setSearchFocused, setProjectName } = structureSlice.actions;
export default structureSlice.reducer;
