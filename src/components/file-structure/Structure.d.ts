import React from "react";
import { type ItemType } from "../../state/features/structure/structureSlice";
export interface StructureProps {
    deleteConfirmationClassName?: string;
    fileInputClassName?: string;
    fileInputStyle?: React.CSSProperties;
    contextMenuClassName?: string;
    contextMenuHrColor?: string;
    contextMenuClickableAreaClassName?: string;
    fileActionsBtnClassName?: string;
    projectName?: string;
    fileActionsDisableCollapse?: true;
    fileActionsDisableTooltip?: true;
    fileActionsDisableDownload?: true;
    folderCollapseBtnClassname?: string;
    folderCollapseBtnStyle?: React.CSSProperties;
    folderThreeDotPrimaryClass?: string;
    folderThreeDotSecondaryClass?: string;
    folderClickableAreaClassName?: string;
    folderSelectedClickableAreaClassName?: string;
    folderContextSelectedClickableAreaClassName?: string;
    itemTitleClassName?: string;
    structureContainerClassName?: string;
    containerHeight?: string;
    onItemSelected?: (item: {
        id: string;
        type: ItemType;
    }) => void;
    onNewItemClick?: (parentFolderId: string, type: ItemType) => void;
    onAreaCollapsed?: (collapsed: boolean) => void;
    onItemContextSelected?: (item: {
        id: string;
        type: ItemType;
    }) => void;
    onNodeDeleted?: (id: string) => void;
    onNewItemCreated?: (id: string) => void;
    storeContext?: any;
    validExtensions: string[];
}
declare const Structure: React.FC<StructureProps>;
export default Structure;
