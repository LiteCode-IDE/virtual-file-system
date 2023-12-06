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

const CollapseBtn: React.FC<CollapseBtnProps> = ({
  item,
  onClickE,
  className,
  style,
}) => {
  return (
    <button
      type="button"
      parent-id={item.id}
      typeof-item={item.type}
      onClick={(e) => {
        onClickE(e);
      }}
      style={style}
      className={`transition-colors w-[14px] border-r hover:border-vscode-blue border-monaco-color ${className}`}
    ></button>
  );
};

export default CollapseBtn;
