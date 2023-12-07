import {
  type FileStructure,
  type Normalized,
} from "../../structure/structureSlice";

const getPaths = (file: FileStructure, normalized: Normalized) => {
  const unmappedPath = file.path.filter((id) => id !== "/" && id !== "head");
  const actualPath = unmappedPath.map((id, i) => {
    if (i < unmappedPath.length - 1) {
      return normalized.folders.byId[id].name;
    } else {
      const file = normalized.files.byId[id];
      return `${file.name}.${file.extension}`;
    }
  });
  return [unmappedPath, actualPath];
};

export { getPaths };
