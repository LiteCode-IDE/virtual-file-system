import { type Directory } from "../structureSlice";

const findSortable = (
  structure: Directory,
  callback: (structure: Directory) => void,
  id: string,
) => {
  if (structure.type === "folder" && id === structure.id) {
    callback(structure);
    return;
  } else if (structure.type === "folder") {
    callback(structure);
  }
  const children = structure.subFoldersAndFiles as Directory[];
  for (const item of children) {
    if (item.type === "folder") {
      findSortable(item, callback, id);
    }
  }
};

export { findSortable };
