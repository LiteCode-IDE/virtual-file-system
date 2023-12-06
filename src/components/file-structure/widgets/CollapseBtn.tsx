import React from "react";
import { type ItemType } from "../../../state/features/structure/structureSlice";

interface CollapseBtnProps {
  item: {
    id: string;
    name: string;
    type: ItemType;
    collapsed?: boolean;
    extension?: string;
  };
  onClickE: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const CollapseBtn: React.FC<CollapseBtnProps> = ({ item, onClickE }) => {
  return (
    <button
      type="button"
      parent-id={item.id}
      typeof-item={item.type}
      onClick={e => {
        onClickE(e);
      }}
      className="transition-colors w-[14px] border-r hover:border-vscode-blue border-monaco-color"></button>
  );
};

export default CollapseBtn;
