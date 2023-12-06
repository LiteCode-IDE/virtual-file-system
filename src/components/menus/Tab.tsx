import React, { useEffect } from "react";
import cross from "../../assets/cross.svg";
import { getLogo } from "../file-structure/utils";
// import { Tooltip } from "react-tooltip";

interface TabProps {
  id: string;
  name: string;
  type: string;
  selected: boolean;
  onSelect: (id: string) => void;
  onClose: (id: string) => void;
}

const Tab: React.FC<TabProps> = ({
  id,
  name,
  type,
  selected,
  onSelect,
  onClose,
}) => {
  const fileType = name.substring(name.lastIndexOf(".") + 1);
  const [logo, setLogo] = React.useState<string>(getLogo(fileType));

  useEffect(() => {
    setLogo(getLogo(type));
  }, [type]);

  return (
    <div
      onClick={() => {
        if (!selected) onSelect(id);
      }}
      className={`hover-show border-t transition-colors py-2 pl-3 pr-2 flex flex-row flex-shrink-0 cursor-pointer select-none items-center rounded-sm mx-[1px] ${
        selected
          ? "bg-dark-hover border-t-slate-200"
          : "hover:bg-slate-700 border-t-dark-bg"
      }`}>
      <span className={`span-logo w-4 h-4 ${logo}`}>&nbsp;</span>
      <span className="text-lg mx-2">{name}</span>
      <span className="self-start">
        {/* <Tooltip id="close-tab" className="z-20" style={{backgroundColor: 'rgb(82 82 91)'}}/> */}
        <button
          type="button"
          className="show-on-hover transition-opacity"
          onClick={e => {
            e.stopPropagation();
            onClose(id);
          }}>
          <img
            // data-tooltip-id="close-tab"
            // data-tooltip-content={"Close tab"}
            src={cross}
            alt="close"
            className="transition-colors p-1 h-5 w-5 cursor-pointer hover:bg-slate-500 rounded-md align-baseline"
          />
        </button>
      </span>
    </div>
  );
};

export default Tab;
