import { type Directory, type FileInFolder } from "../structureSlice";

const bfsNodeAction = (
  currentItem: Directory | FileInFolder,
  id: string,
  callback: (currentItem: Directory | FileInFolder) => void,
) => {
  const queue: Array<Directory | FileInFolder> = [currentItem];
  while (queue.length > 0) {
    currentItem = queue.shift() as Directory | FileInFolder;
    if (currentItem.id === id) {
      callback(currentItem);
      return;
    } else if (currentItem.type === "folder") {
      queue.push(...currentItem.subFoldersAndFiles);
    }
  }
};

const dfsNodeAction = (
  structure: Directory[],
  id: string,
  callback: (item: Directory | FileInFolder, parents: Directory[]) => void,
  parents: Directory[],
) => {
  for (const item of structure) {
    if (item.id === id) {
      callback(item, parents);
      return;
    } else if (item.type === "folder") {
      parents.push(item);
      dfsNodeAction(
        item.subFoldersAndFiles as Directory[],
        id,
        callback,
        parents,
      );
    }
  }
  parents.pop();
};

const dfsCbOnEach = (
  node: Directory[],
  callback: (item: Directory | FileInFolder, parentIds: string[]) => void,
  childrenIds: string[] = [],
  parentIds: string[],
) => {
  for (const item of node) {
    callback(item, parentIds);
    if (item.type === "folder") {
      const childIds = item.subFoldersAndFiles.map(({ id }) => id);
      childrenIds.push(...childIds);
      parentIds.push(item.id);
      dfsCbOnEach(
        item.subFoldersAndFiles as Directory[],
        callback,
        childrenIds,
        parentIds,
      );
      parentIds.pop();
    }
  }
  return { childrenIds, parentIds };
};

export { dfsNodeAction, bfsNodeAction, dfsCbOnEach };
