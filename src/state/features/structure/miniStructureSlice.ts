import {
  type PayloadAction,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { dfsCbOnEach, dfsNodeAction } from "./utils/traversal";
import { type Directory } from "./structureSlice";
import cloneDeep from "lodash.clonedeep";

export interface MiniFile {
  id: string;
  type: "file";
  name: string;
  wholeName: string;
  extension: string;
  subFoldersAndFiles: null;
}

export interface MiniStructure {
  id: string;
  type: "folder";
  name: string;
  subFoldersAndFiles: Array<MiniStructure | MiniFile>;
  collapsed: boolean;
}

interface MiniStructureState {
  miniStructure: MiniStructure;
}

const initialState: MiniStructureState = {
  miniStructure: {
    id: "head",
    type: "folder",
    name: "head",
    collapsed: false,
    subFoldersAndFiles: [],
  },
};

export const setMiniStructureAsync = createAsyncThunk(
  "setMiniStructureAsync",
  async (selectedId: string, { getState }) => {
    const state = getState() as RootState;
    let mapped = {
      id: "head",
      type: "folder",
      name: "head",
      collapsed: false,
      subFoldersAndFiles: [],
    } as MiniStructure;
    dfsNodeAction(
      state.structure.initialFolder.subFoldersAndFiles as Directory[],
      selectedId,
      (item, parents) => {
        const structureCopy = cloneDeep(
          parents[parents.length - 1],
        ) as MiniStructure;
        dfsCbOnEach(
          structureCopy.subFoldersAndFiles as Directory[],
          item => {
            const copiedItem = item as MiniStructure | MiniFile;
            if (copiedItem.type === "folder") {
              copiedItem.name =
                state.structure.normalized.folders.byId[item.id].name;
              copiedItem.collapsed = true;
            } else if (copiedItem.type === "file") {
              const currentFile =
                state.structure.normalized.files.byId[item.id];
              copiedItem.wholeName = `${currentFile.name}.${currentFile.extension}`;
              copiedItem.name = currentFile.name;
              copiedItem.extension = currentFile.extension;
              copiedItem.subFoldersAndFiles = null;
            }
          },
          [],
          [structureCopy.id],
        );
        mapped = structureCopy;
      },
      [state.structure.initialFolder],
    );
    return mapped;
  },
);

export const miniStructureSlice = createSlice({
  name: "miniStructure",
  initialState,
  reducers: {
    collapseMiniStructure: (state, action: PayloadAction<string>) => {
      const findAndCollapse = (
        structure: Array<MiniStructure | MiniFile>,
        id: string,
      ) => {
        for (const item of structure) {
          if (item.id === id && item.type === "folder") {
            item.collapsed = !item.collapsed;
            return;
          } else if (item.type === "folder") {
            findAndCollapse(item.subFoldersAndFiles, id);
          }
        }
      };
      findAndCollapse(state.miniStructure.subFoldersAndFiles, action.payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(setMiniStructureAsync.fulfilled, (state, action) => {
      state.miniStructure = action.payload;
    });
  },
});

export const { collapseMiniStructure } = miniStructureSlice.actions;

export const selectMiniStructure = (state: RootState) =>
  state.miniStructure.miniStructure;

export default miniStructureSlice.reducer;
