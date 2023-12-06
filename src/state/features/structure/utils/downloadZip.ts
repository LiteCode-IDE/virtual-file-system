import { store } from "../../../store";
import { type Directory } from "../structureSlice";
import { dfsCbOnEach } from "./traversal";
import JSZip from "jszip";
import { saveAs } from "file-saver";

const downloadZip = () => {
  const state = store.getState();
  const zip = new JSZip();
  const {
    structure: { normalized, initialFolder },
  } = state;
  const folderMap = {
    [initialFolder.id]: zip,
  };
  dfsCbOnEach(
    initialFolder.subFoldersAndFiles as Directory[],
    (node, parentIds) => {
      const item = normalized[`${node.type}s`].byId[node.id];
      const parentId = parentIds[parentIds.length - 1];
      const currentFolder = folderMap[parentId];
      if (item.type === "file") {
        currentFolder.file(`${item.name}.${item.extension}`, item.content);
      } else {
        const folder = currentFolder.folder(item.name) as JSZip;
        folderMap[item.id] = folder;
      }
    },
    [],
    [initialFolder.id],
  );
  zip
    .generateAsync({
      type: "blob",
    })
    .then(content => {
      saveAs(content, "LiteCode_Project.zip");
    });
};

export default downloadZip;
