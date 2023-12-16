const findSortable = (structure, callback, id) => {
    if (structure.type === "folder" && id === structure.id) {
        callback(structure);
        return;
    }
    else if (structure.type === "folder") {
        callback(structure);
    }
    const children = structure.subFoldersAndFiles;
    for (const item of children) {
        if (item.type === "folder") {
            findSortable(item, callback, id);
        }
    }
};
export { findSortable };
