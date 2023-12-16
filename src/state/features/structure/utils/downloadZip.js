import { store } from "../../../store";
import { dfsCbOnEach } from "./traversal";
import JSZip from "jszip";
import { saveAs } from "file-saver";
const downloadZip = () => {
    const state = store.getState();
    const zip = new JSZip();
    const { structure: { normalized, initialFolder }, } = state;
    if (normalized.files.allIds.length === 0 &&
        normalized.folders.allIds.length === 1) {
        alert("There is nothing to download, you haven't created any files yet.");
        return;
    }
    const projectName = state.structure.projectName;
    const folderMap = {
        [initialFolder.id]: zip,
    };
    dfsCbOnEach(initialFolder.subFoldersAndFiles, (node, parentIds) => {
        const item = normalized[`${node.type}s`].byId[node.id];
        const parentId = parentIds[parentIds.length - 1];
        const currentFolder = folderMap[parentId];
        if (item.type === "file") {
            currentFolder.file(`${item.name}.${item.extension}`, item.content);
        }
        else {
            const folder = currentFolder.folder(item.name);
            folderMap[item.id] = folder;
        }
    }, [], [initialFolder.id]);
    zip
        .generateAsync({
        type: "blob",
    })
        .then((content) => {
        saveAs(content, `${projectName}.zip`);
    });
};
export default downloadZip;
