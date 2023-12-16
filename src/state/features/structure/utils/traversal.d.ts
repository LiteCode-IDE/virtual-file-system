import { type Directory, type FileInFolder } from '../structureSlice';
declare const bfsNodeAction: (currentItem: Directory | FileInFolder, id: string, callback: (currentItem: Directory | FileInFolder) => void) => void;
declare const dfsNodeAction: (structure: Directory[], id: string, callback: (item: Directory | FileInFolder, parents: Directory[]) => void, parents: Directory[]) => void;
declare const dfsCbOnEach: (node: Directory[], callback: (item: Directory | FileInFolder, parentIds: string[]) => void, childrenIds: string[] | undefined, parentIds: string[]) => {
    childrenIds: string[];
    parentIds: string[];
};
declare const findParent: (selectedItem: string, allFileIds: string[], initialSet: Directory) => string;
export { dfsNodeAction, bfsNodeAction, dfsCbOnEach, findParent };
