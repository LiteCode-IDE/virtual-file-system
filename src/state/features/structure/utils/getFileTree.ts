import { getPaths } from "./pathUtil";
import { type Normalized } from "../structureSlice";
import { store } from "../../../store";

const getFileTree = (
  allFileIds: string[] = store.getState().structure.normalized.files.allIds,
  normalized: Normalized = store.getState().structure.normalized
) => {
  const allFilesAndPaths = allFileIds.map((id) => {
    const file = normalized.files.byId[id];
    const [_, actualPath] = getPaths(file, normalized);
    return {
      id,
      content: normalized.files.byId[id].content,
      path: actualPath,
    };
  });
  const tree = allFilesAndPaths.reduce<
    Record<string, { id: string; content: string }>
  >(
    (
      acc,
      file: {
        id: string;
        content: string;
        path: string[] | undefined;
      }
    ) => {
      if (file.path) {
        const key = `/${file.path?.join("/")}`;
        acc[key] = { id: file.id, content: file.content };
      }
      return acc;
    },
    {}
  );
  return tree;
};

const updateFileContents = (id: string, content: string) => {
  store.dispatch({
    type: "structure/updateFileContents",
    payload: { id, value: content },
  });
};

const getSelectedFile = () => {
  const selectedTab = store.getState().tabs.selected;
  if (selectedTab === "") {
    return store.getState().structure.selected;
  }
  return selectedTab;
};

export { getFileTree, updateFileContents, getSelectedFile };
