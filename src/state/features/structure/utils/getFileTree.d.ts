import { type Normalized } from "../structureSlice";
declare const getFileTree: (allFileIds?: string[], normalized?: Normalized) => Record<string, {
    id: string;
    content: string;
}>;
declare const updateFileContents: (id: string, content: string) => void;
declare const getSelectedFile: () => string;
export { getFileTree, updateFileContents, getSelectedFile };
