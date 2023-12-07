import React from "react";
import ItemTitle from "./widgets/ItemTitle";
import CollapseBtn from "./widgets/CollapseBtn";
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

const MiniFolder: React.FC<MiniFolderProps> = ({
  init,
  data,
  onClickItem,
  onCollapseMiniStructure,
  collapseBtnClassName,
  collapseBtnStyle,
  containerClassName,
  titleClassName,
}) => {
  const children = data.subFoldersAndFiles;

  return (
    <div className={"w-full h-fit"}>
      {children.map((item, i) => {
        return (
          <div key={`key-${item.id}`} className="flex flex-col select-none">
            <div
              className={`transition-colors flex flex-row hover:cursor-pointer hover:bg-dark-hover justify-between ${
                init &&
                (i === 0
                  ? "rounded-t-lg"
                  : i === children.length - 1
                  ? "rounded-b-lg"
                  : "")
              } ${containerClassName}`}
            >
              <ItemTitle
                item={item}
                onClickE={(e) => {
                  onClickItem({ id: item.id, type: item.type });
                }}
                className={titleClassName}
              />
            </div>
            <>
              {item.type === "folder" && !item.collapsed && (
                <div className="flex flex-row sub-folder">
                  <CollapseBtn
                    item={item}
                    className={collapseBtnClassName}
                    style={collapseBtnStyle}
                    onClickE={() => {
                      onCollapseMiniStructure(item.id);
                    }}
                    
                  />
                  <MiniFolder
                    init={false}
                    data={item}
                    onClickItem={onClickItem}
                    onCollapseMiniStructure={onCollapseMiniStructure}
                    collapseBtnClassName={collapseBtnClassName}
                    collapseBtnStyle={collapseBtnStyle}
                    titleClassName={titleClassName}
                  />
                </div>
              )}
            </>
          </div>
        );
      })}
    </div>
  );
};

export default MiniFolder;
