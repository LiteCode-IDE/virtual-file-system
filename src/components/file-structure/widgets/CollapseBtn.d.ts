import React from "react";
import { type ItemType } from "../../../state/features/structure/structureSlice";
interface CollapseBtnProps {
    item: {
        id: string;
        name: string;
        type: ItemType;
    };
    className?: string;
    style?: React.CSSProperties;
    onClickE: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
declare const CollapseBtn: React.FC<CollapseBtnProps>;
export default CollapseBtn;
