import { createAsyncThunk, createSlice, createSelector, } from "@reduxjs/toolkit";
import { dfsCbOnEach, dfsNodeAction } from "./utils/traversal";
import cloneDeep from "lodash.clonedeep";
import { getPaths } from "./utils/pathUtil";
const initialState = {
    miniStructure: {
        id: "head",
        type: "folder",
        name: "head",
        collapsed: false,
        subFoldersAndFiles: [],
    },
};
export const setMiniStructureAsync = createAsyncThunk("setMiniStructureAsync", async (selectedId, { getState }) => {
    const state = getState();
    let mapped = {
        id: "head",
        type: "folder",
        name: "head",
        collapsed: false,
        subFoldersAndFiles: [],
    };
    dfsNodeAction(state.structure.initialFolder.subFoldersAndFiles, selectedId, (_, parents) => {
        const structureCopy = cloneDeep(parents[parents.length - 1]);
        dfsCbOnEach(structureCopy.subFoldersAndFiles, (item) => {
            const copiedItem = item;
            if (copiedItem.type === "folder") {
                copiedItem.name =
                    state.structure.normalized.folders.byId[item.id].name;
                copiedItem.collapsed = true;
            }
            else if (copiedItem.type === "file") {
                const currentFile = state.structure.normalized.files.byId[item.id];
                copiedItem.wholeName = `${currentFile.name}.${currentFile.extension}`;
                copiedItem.name = currentFile.name;
                copiedItem.extension = currentFile.extension;
                copiedItem.subFoldersAndFiles = null;
            }
        }, [], [structureCopy.id]);
        mapped = structureCopy;
    }, [state.structure.initialFolder]);
    return mapped;
});
export const miniStructureSlice = createSlice({
    name: "miniStructure",
    initialState,
    reducers: {
        collapseMiniStructure: (state, action) => {
            const findAndCollapse = (structure, id) => {
                for (const item of structure) {
                    if (item.id === id && item.type === "folder") {
                        item.collapsed = !item.collapsed;
                        return;
                    }
                    else if (item.type === "folder") {
                        findAndCollapse(item.subFoldersAndFiles, id);
                    }
                }
            };
            findAndCollapse(state.miniStructure.subFoldersAndFiles, action.payload);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(setMiniStructureAsync.fulfilled, (state, action) => {
            state.miniStructure = action.payload;
        });
    },
});
export const { collapseMiniStructure } = miniStructureSlice.actions;
export const selectMiniStructure = (state) => state.miniStructure.miniStructure;
export const getBreadcrumbs = createSelector((state) => state.structure.normalized, (state) => state.tabs.selected, (normalized, selectedTab) => {
    if (selectedTab && selectedTab !== "") {
        const file = normalized.files.byId[selectedTab];
        const [unmappedPath, path] = getPaths(file, normalized);
        return {
            id: file.id,
            path,
            unmappedPath,
        };
    }
    else {
        return null;
    }
});
export default miniStructureSlice.reducer;
