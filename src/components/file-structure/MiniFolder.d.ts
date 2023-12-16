import React from "react";
import { type MiniStructure } from "../../state/features/structure/miniStructureSlice";
import { type Identifier } from "../../state/features/structure/structureSlice";
interface MiniFolderProps {
    data: MiniStructure;
    init: boolean;
    onClickItem: (item: Identifier) => void;
    onCollapseMiniStructure: (id: string) => void;
    collapseBtnClassName?: string;
    collapseBtnStyle?: React.CSSProperties;
    containerClassName?: string;
    titleClassName?: string;
}
declare const MiniFolder: React.FC<MiniFolderProps>;
export default MiniFolder;
