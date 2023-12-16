import React from "react";
import { type Directory, type FileInFolder, ItemType } from "../../state/features/structure/structureSlice";
interface FolderProps {
    data: Array<Directory | FileInFolder>;
    showBlue: boolean;
    setShowBlue: React.Dispatch<React.SetStateAction<boolean>>;
    showGray: boolean;
    setShowGray: React.Dispatch<React.SetStateAction<boolean>>;
    collapseBtnClassname?: string;
    collapseBtnStyle?: React.CSSProperties;
    threeDotPrimaryClass?: string;
    threeDotSecondaryClass?: string;
    clickableAreaClassName?: string;
    selectedClickableAreaClassName?: string;
    contextSelectedClickableAreaClassName?: string;
    itemTitleClassName?: string;
    onItemSelected?: (item: {
        id: string;
        type: ItemType;
    }) => void;
    onItemContextSelected?: (item: {
        id: string;
        type: ItemType;
    }) => void;
}
declare const Folder: React.FC<FolderProps>;
export default Folder;
