const bfsNodeAction = (currentItem, id, callback) => {
    const queue = [currentItem];
    while (queue.length > 0) {
        currentItem = queue.shift();
        if (currentItem.id === id) {
            callback(currentItem);
            return;
        }
        else if (currentItem.type === 'folder') {
            queue.push(...currentItem.subFoldersAndFiles);
        }
    }
};
const dfsNodeAction = (structure, id, callback, parents) => {
    for (const item of structure) {
        if (item.id === id) {
            callback(item, parents);
            return;
        }
        else if (item.type === 'folder') {
            parents.push(item);
            dfsNodeAction(item.subFoldersAndFiles, id, callback, parents);
        }
    }
    parents.pop();
};
const dfsCbOnEach = (node, callback, childrenIds = [], parentIds) => {
    for (const item of node) {
        callback(item, parentIds);
        if (item.type === 'folder') {
            const childIds = item.subFoldersAndFiles.map(({ id }) => id);
            childrenIds.push(...childIds);
            parentIds.push(item.id);
            dfsCbOnEach(item.subFoldersAndFiles, callback, childrenIds, parentIds);
            parentIds.pop();
        }
    }
    return { childrenIds, parentIds };
};
const findParent = (selectedItem, allFileIds, initialSet) => {
    if (allFileIds.includes(selectedItem)) {
        let parentId = '';
        dfsNodeAction(initialSet.subFoldersAndFiles, selectedItem, (_, parents) => {
            const parent = parents[parents.length - 1];
            parentId = parent.id;
        }, [initialSet]);
        return parentId;
    }
    else if (selectedItem.includes('folder')) {
        return selectedItem;
    }
    else {
        return 'head';
    }
};
export { dfsNodeAction, bfsNodeAction, dfsCbOnEach, findParent };
