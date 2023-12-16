import { getPaths } from "./pathUtil";
import { store } from "../../../store";
const getFileTree = (allFileIds = store.getState().structure.normalized.files.allIds, normalized = store.getState().structure.normalized) => {
    const allFilesAndPaths = allFileIds.map((id) => {
        const file = normalized.files.byId[id];
        const [_, actualPath] = getPaths(file, normalized);
        return {
            id,
            content: normalized.files.byId[id].content,
            path: actualPath,
        };
    });
    const tree = allFilesAndPaths.reduce((acc, file) => {
        if (file.path) {
            const key = `/${file.path?.join("/")}`;
            acc[key] = { id: file.id, content: file.content };
        }
        return acc;
    }, {});
    return tree;
};
const updateFileContents = (id, content) => {
    store.dispatch({
        type: "structure/updateFileContents",
        payload: { id, value: content },
    });
};
const getSelectedFile = () => {
    return store.getState().structure.selected;
};
export { getFileTree, updateFileContents, getSelectedFile };
