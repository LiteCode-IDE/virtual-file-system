import { createSelector, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { v4 as uuidv4 } from "uuid";
import { bfsNodeAction, dfsCbOnEach, dfsNodeAction } from "./utils/traversal";
import { findSortable } from "./utils/sorting";
import getTree from "./utils/getTree";

// type NestedRecord<T extends any[]>
//     = T extends [any, ...infer R]
//     ? Record<string, NestedRecord<R>>
//     : string

export type ItemType = "file" | "folder";

export type ValidExtensions = "js" | "jsx" | "css" | "md" | "ts" | "tsx";

export const validExtensions = ["js", "jsx", "css", "md", "ts", "tsx"];
export interface FileStructure {
  id: string;
  name: string;
  type: "file";
  content: string;
  extension: ValidExtensions;
  path: string[];
}

export interface NormalizedFolder {
  id: string;
  name: string;
  type: "folder";
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
  type: "file";
  subFoldersAndFiles: null;
}

export interface Directory {
  id: string;
  type: "folder";
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

interface SearchResults {
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
  // tabs: Tabs;
}

const initialState: FileSystem = {
  normalized: {
    files: {
      byId: {
        "file-84b8a21a-0f06-4b06-87e8-51b2e6029eea": {
          id: "file-84b8a21a-0f06-4b06-87e8-51b2e6029eea",
          name: "index",
          type: "file",
          extension: "css",
          content:
            "body {\r\n  margin: 0;\r\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\r\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\r\n    sans-serif;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\ncode {\r\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\r\n    monospace;\r\n}",
          path: ["/", "head", "file-84b8a21a-0f06-4b06-87e8-51b2e6029eea"],
        },
        "file-be4120d8-7090-459d-a7b0-04707f7d73b5": {
          id: "file-be4120d8-7090-459d-a7b0-04707f7d73b5",
          name: "index",
          type: "file",
          extension: "js",
          content:
            "import React from 'react';\r\nimport ReactDOM from 'react-dom/client';\r\nimport './index.css';\r\nimport App from './src/App.jsx';\r\n\r\nconst root = ReactDOM.createRoot(document.getElementById('root'));\r\nroot.render(<App />);\r\n",
          path: ["/", "head", "file-be4120d8-7090-459d-a7b0-04707f7d73b5"],
        },
        "file-62caadad-0a9a-40d4-a8ee-e6be4fb299d6": {
          id: "file-62caadad-0a9a-40d4-a8ee-e6be4fb299d6",
          name: "App",
          type: "file",
          extension: "css",
          content:
            ".App {\r\n  text-align: center;\r\n}\r\n\r\n.App-logo {\r\n  height: 40vmin;\r\n  pointer-events: none;\r\n}\r\n\r\n@media (prefers-reduced-motion: no-preference) {\r\n  .App-logo {\r\n    animation: App-logo-spin infinite 20s linear;\r\n  }\r\n}\r\n\r\n.App-header {\r\n  background-color: #282c34;\r\n  min-height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: calc(10px + 2vmin);\r\n  color: white;\r\n}\r\n\r\n.App-link {\r\n  color: #61dafb;\r\n}\r\n\r\n@keyframes App-logo-spin {\r\n  from {\r\n    transform: rotate(0deg);\r\n  }\r\n\r\n  to {\r\n    transform: rotate(360deg);\r\n  }\r\n}",
          path: [
            "/",
            "head",
            "folder-a7e31191-9c8e-46d2-b6a1-7b9e1aa21528",
            "file-62caadad-0a9a-40d4-a8ee-e6be4fb299d6",
          ],
        },
        "file-6f9de432-7fcf-4f5c-a420-53e0d3c8b8f1": {
          id: "file-6f9de432-7fcf-4f5c-a420-53e0d3c8b8f1",
          name: "App",
          type: "file",
          extension: "jsx",
          content:
            'import \'./App.css\';\r\n\r\nconst App = () => {\r\n  return (\r\n    <div className="App">\r\n      <header className="App-header">\r\n        <img\r\n          src={\r\n            \'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4NDEuOSA1OTUuMyI+PGcgZmlsbD0iIzYxREFGQiI+PHBhdGggZD0iTTY2Ni4zIDI5Ni41YzAtMzIuNS00MC43LTYzLjMtMTAzLjEtODIuNCAxNC40LTYzLjYgOC0xMTQuMi0yMC4yLTEzMC40LTYuNS0zLjgtMTQuMS01LjYtMjIuNC01LjZ2MjIuM2M0LjYgMCA4LjMuOSAxMS40IDIuNiAxMy42IDcuOCAxOS41IDM3LjUgMTQuOSA3NS43LTEuMSA5LjQtMi45IDE5LjMtNS4xIDI5LjQtMTkuNi00LjgtNDEtOC41LTYzLjUtMTAuOS0xMy41LTE4LjUtMjcuNS0zNS4zLTQxLjYtNTAgMzIuNi0zMC4zIDYzLjItNDYuOSA4NC00Ni45Vjc4Yy0yNy41IDAtNjMuNSAxOS42LTk5LjkgNTMuNi0zNi40LTMzLjgtNzIuNC01My4yLTk5LjktNTMuMnYyMi4zYzIwLjcgMCA1MS40IDE2LjUgODQgNDYuNi0xNCAxNC43LTI4IDMxLjQtNDEuMyA0OS45LTIyLjYgMi40LTQ0IDYuMS02My42IDExLTIuMy0xMC00LTE5LjctNS4yLTI5LTQuNy0zOC4yIDEuMS02Ny45IDE0LjYtNzUuOCAzLTEuOCA2LjktMi42IDExLjUtMi42Vjc4LjVjLTguNCAwLTE2IDEuOC0yMi42IDUuNi0yOC4xIDE2LjItMzQuNCA2Ni43LTE5LjkgMTMwLjEtNjIuMiAxOS4yLTEwMi43IDQ5LjktMTAyLjcgODIuMyAwIDMyLjUgNDAuNyA2My4zIDEwMy4xIDgyLjQtMTQuNCA2My42LTggMTE0LjIgMjAuMiAxMzAuNCA2LjUgMy44IDE0LjEgNS42IDIyLjUgNS42IDI3LjUgMCA2My41LTE5LjYgOTkuOS01My42IDM2LjQgMzMuOCA3Mi40IDUzLjIgOTkuOSA1My4yIDguNCAwIDE2LTEuOCAyMi42LTUuNiAyOC4xLTE2LjIgMzQuNC02Ni43IDE5LjktMTMwLjEgNjItMTkuMSAxMDIuNS00OS45IDEwMi41LTgyLjN6bS0xMzAuMi02Ni43Yy0zLjcgMTIuOS04LjMgMjYuMi0xMy41IDM5LjUtNC4xLTgtOC40LTE2LTEzLjEtMjQtNC42LTgtOS41LTE1LjgtMTQuNC0yMy40IDE0LjIgMi4xIDI3LjkgNC43IDQxIDcuOXptLTQ1LjggMTA2LjVjLTcuOCAxMy41LTE1LjggMjYuMy0yNC4xIDM4LjItMTQuOSAxLjMtMzAgMi00NS4yIDItMTUuMSAwLTMwLjItLjctNDUtMS45LTguMy0xMS45LTE2LjQtMjQuNi0yNC4yLTM4LTcuNi0xMy4xLTE0LjUtMjYuNC0yMC44LTM5LjggNi4yLTEzLjQgMTMuMi0yNi44IDIwLjctMzkuOSA3LjgtMTMuNSAxNS44LTI2LjMgMjQuMS0zOC4yIDE0LjktMS4zIDMwLTIgNDUuMi0yIDE1LjEgMCAzMC4yLjcgNDUgMS45IDguMyAxMS45IDE2LjQgMjQuNiAyNC4yIDM4IDcuNiAxMy4xIDE0LjUgMjYuNCAyMC44IDM5LjgtNi4zIDEzLjQtMTMuMiAyNi44LTIwLjcgMzkuOXptMzIuMy0xM2M1LjQgMTMuNCAxMCAyNi44IDEzLjggMzkuOC0xMy4xIDMuMi0yNi45IDUuOS00MS4yIDggNC45LTcuNyA5LjgtMTUuNiAxNC40LTIzLjcgNC42LTggOC45LTE2LjEgMTMtMjQuMXpNNDIxLjIgNDMwYy05LjMtOS42LTE4LjYtMjAuMy0yNy44LTMyIDkgLjQgMTguMi43IDI3LjUuNyA5LjQgMCAxOC43LS4yIDI3LjgtLjctOSAxMS43LTE4LjMgMjIuNC0yNy41IDMyem0tNzQuNC01OC45Yy0xNC4yLTIuMS0yNy45LTQuNy00MS03LjkgMy43LTEyLjkgOC4zLTI2LjIgMTMuNS0zOS41IDQuMSA4IDguNCAxNiAxMy4xIDI0IDQuNyA4IDkuNSAxNS44IDE0LjQgMjMuNHpNNDIwLjcgMTYzYzkuMyA5LjYgMTguNiAyMC4zIDI3LjggMzItOS0uNC0xOC4yLS43LTI3LjUtLjctOS40IDAtMTguNy4yLTI3LjguNyA5LTExLjcgMTguMy0yMi40IDI3LjUtMzJ6bS03NCA1OC45Yy00LjkgNy43LTkuOCAxNS42LTE0LjQgMjMuNy00LjYgOC04LjkgMTYtMTMgMjQtNS40LTEzLjQtMTAtMjYuOC0xMy44LTM5LjggMTMuMS0zLjEgMjYuOS01LjggNDEuMi03Ljl6bS05MC41IDEyNS4yYy0zNS40LTE1LjEtNTguMy0zNC45LTU4LjMtNTAuNiAwLTE1LjcgMjIuOS0zNS42IDU4LjMtNTAuNiA4LjYtMy43IDE4LTcgMjcuNy0xMC4xIDUuNyAxOS42IDEzLjIgNDAgMjIuNSA2MC45LTkuMiAyMC44LTE2LjYgNDEuMS0yMi4yIDYwLjYtOS45LTMuMS0xOS4zLTYuNS0yOC0xMC4yek0zMTAgNDkwYy0xMy42LTcuOC0xOS41LTM3LjUtMTQuOS03NS43IDEuMS05LjQgMi45LTE5LjMgNS4xLTI5LjQgMTkuNiA0LjggNDEgOC41IDYzLjUgMTAuOSAxMy41IDE4LjUgMjcuNSAzNS4zIDQxLjYgNTAtMzIuNiAzMC4zLTYzLjIgNDYuOS04NCA0Ni45LTQuNS0uMS04LjMtMS0xMS4zLTIuN3ptMjM3LjItNzYuMmM0LjcgMzguMi0xLjEgNjcuOS0xNC42IDc1LjgtMyAxLjgtNi45IDIuNi0xMS41IDIuNi0yMC43IDAtNTEuNC0xNi41LTg0LTQ2LjYgMTQtMTQuNyAyOC0zMS40IDQxLjMtNDkuOSAyMi42LTIuNCA0NC02LjEgNjMuNi0xMSAyLjMgMTAuMSA0LjEgMTkuOCA1LjIgMjkuMXptMzguNS02Ni43Yy04LjYgMy43LTE4IDctMjcuNyAxMC4xLTUuNy0xOS42LTEzLjItNDAtMjIuNS02MC45IDkuMi0yMC44IDE2LjYtNDEuMSAyMi4yLTYwLjYgOS45IDMuMSAxOS4zIDYuNSAyOC4xIDEwLjIgMzUuNCAxNS4xIDU4LjMgMzQuOSA1OC4zIDUwLjYtLjEgMTUuNy0yMyAzNS42LTU4LjQgNTAuNnpNMzIwLjggNzguNHoiLz48Y2lyY2xlIGN4PSI0MjAuOSIgY3k9IjI5Ni41IiByPSI0NS43Ii8+PHBhdGggZD0iTTUyMC41IDc4LjF6Ii8+PC9nPjwvc3ZnPg==\'\r\n          }\r\n          className="App-logo"\r\n          alt="logo"\r\n        />\r\n        <p>\r\n          Edit <code>src/App.jsx</code> to reload.\r\n        </p>\r\n        <a\r\n          className="App-link"\r\n          href="https://reactjs.org"\r\n          target="_blank"\r\n          rel="noopener noreferrer"\r\n        >\r\n          Learn React\r\n        </a>\r\n      </header>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default App;\r\n',
          path: [
            "/",
            "head",
            "folder-a7e31191-9c8e-46d2-b6a1-7b9e1aa21528",
            "file-6f9de432-7fcf-4f5c-a420-53e0d3c8b8f1",
          ],
        },
      },
      allIds: [
        "file-84b8a21a-0f06-4b06-87e8-51b2e6029eea",
        "file-be4120d8-7090-459d-a7b0-04707f7d73b5",
        "file-62caadad-0a9a-40d4-a8ee-e6be4fb299d6",
        "file-6f9de432-7fcf-4f5c-a420-53e0d3c8b8f1",
      ],
    },
    folders: {
      byId: {
        head: {
          id: "head",
          name: "head",
          type: "folder",
          collapsed: false,
          childrenFlat: [
            {
              id: "folder-a7e31191-9c8e-46d2-b6a1-7b9e1aa21528",
              type: "folder",
            },
            { id: "file-84b8a21a-0f06-4b06-87e8-51b2e6029eea", type: "file" },
            { id: "file-be4120d8-7090-459d-a7b0-04707f7d73b5", type: "file" },
          ],
          path: ["/"],
        },
        "folder-a7e31191-9c8e-46d2-b6a1-7b9e1aa21528": {
          id: "folder-a7e31191-9c8e-46d2-b6a1-7b9e1aa21528",
          name: "src",
          type: "folder",
          collapsed: true,
          childrenFlat: [
            { id: "file-62caadad-0a9a-40d4-a8ee-e6be4fb299d6", type: "file" },
            { id: "file-6f9de432-7fcf-4f5c-a420-53e0d3c8b8f1", type: "file" },
          ],
          path: ["/", "head", "folder-a7e31191-9c8e-46d2-b6a1-7b9e1aa21528"],
        },
      },
      allIds: ["head", "folder-a7e31191-9c8e-46d2-b6a1-7b9e1aa21528"],
    },
  },
  initialFolder: {
    id: "head",
    type: "folder",
    subFoldersAndFiles: [
      {
        id: "folder-a7e31191-9c8e-46d2-b6a1-7b9e1aa21528",
        type: "folder",
        subFoldersAndFiles: [
          {
            id: "file-62caadad-0a9a-40d4-a8ee-e6be4fb299d6",
            type: "file",
            subFoldersAndFiles: null,
          },
          {
            id: "file-6f9de432-7fcf-4f5c-a420-53e0d3c8b8f1",
            type: "file",
            subFoldersAndFiles: null,
          },
        ],
      },
      {
        id: "file-84b8a21a-0f06-4b06-87e8-51b2e6029eea",
        type: "file",
        subFoldersAndFiles: null,
      },
      {
        id: "file-be4120d8-7090-459d-a7b0-04707f7d73b5",
        type: "file",
        subFoldersAndFiles: null,
      },
    ],
  },
  selected: "head",
  contextSelected: {
    id: "head",
    type: "folder",
    e: false,
  },
  toCopy: null,
  parentItemId: "head",
  searchTerm: "",
  resizeCollapsed: false,
  searchFocus: false,
  // tabs: [],
};

export const structureSlice = createSlice({
  name: "structure",
  initialState,
  reducers: {
    addNode: (
      state,
      action: PayloadAction<{ value: string; inputType: ItemType }>,
    ) => {
      // if (!state.contextSelected) return;
      const { value, inputType } = action.payload;
      let newName = value;
      let newExtension = "";
      if (inputType === "file") {
        newName = value.substring(0, value.lastIndexOf("."));
        newExtension = value.substring(value.lastIndexOf(".") + 1);
      }

      const newChild: FileOrFolder = {
        id: `${inputType}-${uuidv4()}`,
        name: newName,
        type: inputType,
        extension:
          inputType === "file" ? (newExtension as ValidExtensions) : undefined,
        collapsed: inputType === "folder" ? true : undefined,
        childrenFlat: inputType === "folder" ? [] : undefined,
        content: inputType === "file" ? "" : undefined,
      };
      if (state.contextSelected.id === state.initialFolder.id) {
        state.initialFolder.subFoldersAndFiles = [
          ...state.initialFolder.subFoldersAndFiles,
          {
            id: newChild.id,
            type: newChild.type,
            subFoldersAndFiles: newChild.type === "folder" ? [] : null,
          } as Directory,
        ];
      } else {
        bfsNodeAction(state.initialFolder, state.contextSelected.id, item => {
          item.subFoldersAndFiles = [
            ...(item.subFoldersAndFiles as Directory[]),
            {
              id: newChild.id,
              type: newChild.type,
              subFoldersAndFiles: newChild.type === "folder" ? [] : null,
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
        type: "",
      });

      structureSlice.caseReducers.sortFolder(state, {
        payload: { id: state.contextSelected.id },
        type: "",
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
                (type + "s") as keyof typeof state.normalized
              ].allIds = state.normalized[
                (type + "s") as keyof typeof state.normalized
              ].allIds.filter(_id => _id !== id);
              if (item.type === "folder") {
                deleteNodes(item.subFoldersAndFiles);
              }
            }
          };
          if (item.type === "folder") {
            deleteNodes(item.subFoldersAndFiles);
          }

          if (parent.subFoldersAndFiles.length === 0) {
            state.normalized.folders.byId[parentId].collapsed = true;
          }
        },
        [state.initialFolder],
      );

      // state.normalized[type + "s"].byId[id] = undefined;
      state.normalized[(type + "s") as keyof typeof state.normalized].allIds =
        state.normalized[
          (type + "s") as keyof typeof state.normalized
        ].allIds.filter(_id => _id !== id);
      const allIds =
        state.normalized[(type + "s") as keyof typeof state.normalized].allIds;

      if (allIds.find(id => id === state.contextSelected.id) === undefined) {
        state.contextSelected = {
          id: state.initialFolder.id,
          type: "folder",
          e: false,
        };
      }

      if (allIds.find(id => id === state.selected) === undefined) {
        state.selected = state.initialFolder.id;
      }

      if (allIds.find(id => id === state.parentItemId) === undefined) {
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
      let parentId = "";
      let newName = action.payload.value;
      let newExtension = "";
      if (state.contextSelected.type === "file") {
        newName = action.payload.value.substring(
          0,
          action.payload.value.lastIndexOf("."),
        );
        newExtension = action.payload.value.substring(
          action.payload.value.lastIndexOf(".") + 1,
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
        (state.contextSelected.type + "s") as keyof typeof state.normalized
      ].byId[state.contextSelected.id].name = newName;

      if (state.contextSelected.type === "file") {
        state.normalized.files.byId[state.contextSelected.id].extension =
          newExtension as ValidExtensions;
      }

      structureSlice.caseReducers.sortFolder(state, {
        payload: { id: parentId },
        type: "",
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
      if (action.payload.item.type === "folder") {
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
      } else if (action.payload.item.type === "file") {
        // state.contextSelected.id = null;
      }
      // state.selected = action.payload.item.id;
    },

    copyNode: state => {
      if (!state.toCopy) return;

      if (state.toCopy.isCut) {
        if (state.toCopy.type === "folder") {
          const recursiveCut = state.normalized.folders.byId[
            state.contextSelected.id
          ].path.includes(state.toCopy.id);

          if (recursiveCut || state.toCopy.id === state.contextSelected.id) {
            state.toCopy = null;
            return;
          }
        } else {
          const sameCut = state.normalized.folders.byId[
            state.contextSelected.id
          ].childrenFlat.find(({ id }) => id === state.toCopy?.id);
          if (sameCut) {
            state.toCopy = null;
            return;
          }
        }
      }
      const item =
        state.normalized[
          (state.toCopy.type + "s") as keyof typeof state.normalized
        ].byId[state.toCopy.id];
      const toCopyItem = {
        ...item,
        childrenFlat:
          state.toCopy.type === "folder"
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
          item.type === "file" ? `${item.name}.${item.extension}` : item.name,
        // path: item.type === "file" ? [] : "",
      };

      const knownNames = state.normalized.folders.byId[
        `${state.contextSelected.id}`
      ].childrenFlat.map(({ id, type }) => {
        if (type === "folder") {
          return state.normalized[`${type}s`].byId[id].name;
        } else {
          const file = state.normalized[`${type}s`].byId[id];
          return `${file.name}.${file.extension}`;
        }
      });
      let newName = toCopyItem.wholeName;
      const isNameTaken =
        knownNames.filter(knownName => knownName === toCopyItem.wholeName)
          .length > 0;
      if (isNameTaken) {
        let i = 1;
        while (
          knownNames.filter(knownName => {
            // eslint-disable-next-line
            if (toCopyItem.type === "file") {
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
          toCopyItem.type === "folder"
            ? `${toCopyItem.name}_Copy_${i}`
            : `${toCopyItem.name}_Copy_${i}.${toCopyItem.extension}`;
        toCopyItem.wholeName = newName;
      }

      const newNode = {
        ...toCopyItem,
        name:
          toCopyItem.type === "file"
            ? newName.substring(0, newName.lastIndexOf("."))
            : newName,
        extension:
          toCopyItem.type === "file" ? newName.split(".").pop() : undefined,
        // subFoldersAndFiles: state.toCopy.type === "folder" ? [] : null,
        collapsed: state.toCopy.type === "folder" ? false : undefined,
      };
      state.normalized.folders.byId[state.contextSelected.id].collapsed = false;
      state.normalized.folders.byId[state.contextSelected.id].childrenFlat = [
        ...state.normalized.folders.byId[state.contextSelected.id].childrenFlat,
        { id: newNode.id, type: newNode.type },
      ];

      if (newNode.type === "folder") {
        state.normalized.folders.byId[newNode.id] = {
          id: newNode.id,
          name: newNode.name,
          type: "folder",
          collapsed: false,
          childrenFlat: newNode.childrenFlat as Identifier[],
          path: [] as string[],
        };
      } else {
        state.normalized.files.byId[newNode.id] = {
          id: newNode.id,
          name: newNode.name,
          type: "file",
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
        if (state.toCopy?.type === "folder") {
          const toCopyFolderPath =
            state.normalized.folders.byId[newNode.id].path;
          toCopyFolderPath.pop();
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
                  existingItem => {
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
          "/",
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
              node.type === "folder" ? node.subFoldersAndFiles : null,
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
              "/",
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
        type: "",
      });

      if (state.toCopy.isCut) {
        structureSlice.caseReducers.removeNode(state, {
          payload: { id: state.toCopy.id, type: state.toCopy.type },
          type: "",
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
        state.contextSelected = {
          id: state.initialFolder.id,
          type: "folder",
          e: false,
        };
        state.selected = action.payload.id;
      }
    },
    setContextSelectedForFileAction: state => {
      const selectedItem = state.selected;
      if (state.normalized.files.allIds.includes(selectedItem)) {
        state.contextSelected = {
          id: state.initialFolder.id,
          type: "folder",
          e: false,
        };
      } else {
        state.contextSelected = {
          id: state.selected,
          type: "folder",
          e: false,
        };
      }
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
        id: "",
        type: "",
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
        newContext.type = "folder";

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
        parentId: "",
        subFoldersAndFiles: children,
      };

      if (newCopy.type === "folder") {
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
      if (action.payload !== "") {
        state.parentItemId = action.payload;
      } else {
        let parentId = "";
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
          itemData.path = ["/", ...parents.map(({ id }) => id), item.id];
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
                if (a.type === "folder" && b.type === "file") {
                  return -1;
                } else if (a.type === "file" && b.type === "folder") {
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
        "\\$&",
      );
    },
    setResizeCollapsed: (state, action: PayloadAction<boolean>) => {
      state.resizeCollapsed = action.payload;
    },
    setSearchFocused: (state, action: PayloadAction<boolean>) => {
      state.searchFocus = action.payload;
    },
  },
});

export const getInitialSet = (state: RootState) =>
  state.structure.initialFolder.subFoldersAndFiles;

export const selectedItem = (state: RootState) => state.structure.selected;
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

export const contextSelectedObj = createSelector(
  (state: RootState) => state.structure.contextSelected,
  (state: RootState) => state.structure.normalized,
  (contextSelected: ContextSelected, normalized: Normalized) => {
    const item =
      normalized[`${contextSelected?.type}s` as keyof typeof normalized].byId[
        contextSelected?.id
      ];

    let wholeName = item.name;
    if (item.type === "file") {
      wholeName = `${item.name}.${item.extension}`;
    }
    const actualPath = `${item.path
      .filter(id => id !== "/" && id !== "head")
      .map((id, i) => {
        if (contextSelected?.type === "file") {
          if (i < item.path.length - 3) {
            return normalized.folders.byId[id].name;
          } else {
            return `${normalized.files.byId[id].name}.${normalized.files.byId[id].extension}`;
          }
        } else if (contextSelected?.type === "folder") {
          return normalized.folders.byId[id].name;
        }
        return "UNKNOWN";
      })
      .join("/")}`;
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
    if (item.type === "file") {
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
  (searchTerm: string, files: Normalized["files"]) => {
    const res: SearchResults = {
      files: [],
      numOfResults: 0,
      numOfLines: 0,
    };
    if (searchTerm.trim() === "") return res;
    const foundFiles: MatchingFile[] = [];
    files.allIds.forEach(id => {
      const currentFile = files.byId[id];
      const content = currentFile.content;
      const regex = new RegExp(searchTerm, "g");
      const matches = content.match(regex);
      const allRes: MatchingLine[] = [];
      if (matches) {
        res.numOfResults += 1;
        res.numOfLines += matches.length;
        const nL = content.split("\r");
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
} = structureSlice.actions;

export default structureSlice.reducer;
