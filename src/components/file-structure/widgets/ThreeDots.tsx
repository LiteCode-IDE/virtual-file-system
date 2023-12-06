import React from "react";
import { type ItemType } from "../../../state/features/structure/structureSlice";
interface ThreeDotsProp {
  item: { id: string; type: ItemType };
  selected: string;
  showBlue: boolean;
  onClickE: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const ThreeDots: React.FC<ThreeDotsProp> = ({
  item,
  selected,
  showBlue,
  onClickE,
}) => {
  return (
    <button
      type="button"
      typeof-item={item.type}
      parent-id={item.id}
      onClick={e => {
        onClickE(e);
      }}
      className={`px-2 rounded-r-sm ${
        selected === item.id && showBlue
          ? "hover:bg-blue-400"
          : "hover:bg-slate-500"
      }`}>
      <span className="three-dots transition-opacity ">&nbsp;</span>
    </button>
  );
};

export default ThreeDots;
