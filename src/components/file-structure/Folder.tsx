import React from "react";
import {
  collapseOrExpand,
  contextSelectedItem,
  selectedItem,
  contextClick,
  clipboard,
  setSelected,
  type Directory,
  type FileInFolder,
  ItemType,
} from "../../state/features/structure/structureSlice";
import { type RootState } from "../../state/store";
import { useTypedDispatch, useTypedSelector } from "../../state/hooks";
import { setActiveTabAsync } from "../../state/features/tabs/tabsSlice";
import CollapseBtn from "./widgets/CollapseBtn";
import ThreeDots from "./widgets/ThreeDots";
import ItemTitle from "./widgets/ItemTitle";

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
  onItemSelected?: (item: { id: string; type: ItemType }) => void;
  onItemContextSelected?: (item: { id: string; type: ItemType }) => void;
}

const Folder: React.FC<FolderProps> = ({
  data,
  showBlue,
  setShowBlue,
  showGray,
  setShowGray,
  collapseBtnClassname,
  collapseBtnStyle,
  threeDotPrimaryClass,
  threeDotSecondaryClass,
  clickableAreaClassName,
  selectedClickableAreaClassName,
  contextSelectedClickableAreaClassName,
  itemTitleClassName,
  onItemSelected = () => {},
  onItemContextSelected = () => {},
}) => {
  const dispatch = useTypedDispatch();
  const selected = useTypedSelector(selectedItem);
  const contextSelected = useTypedSelector(contextSelectedItem);
  const cutItem = useTypedSelector(clipboard);
  const children = useTypedSelector((state: RootState) => {
    const allData = data.map(({ id: itemId, type }) => {
      return state.structure.normalized[`${type}s`].byId[itemId];
    });
    return allData;
  });

  return (
    <div className={`${children.length > 0 && "w-full"}`}>
      {children.map((item) => {
        return (
          <div
            key={item.id}
            className={"flex flex-col select-none mr-1 w-full"}
          >
            <div
              id={item.id}
              typeof-item={item.type}
              className={`border border-transparent mr-1 transition-colors flex flex-row hover:cursor-pointer rounded-r-sm clickable hover:bg-slate-300 justify-between text-black ${clickableAreaClassName} ${
                selected === item.id && showBlue
                  ? `bg-vscode-overlay hover:bg-vscode-blue ${selectedClickableAreaClassName}`
                  : contextSelected === item.id && showGray
                  ? `bg-slate-700 hover:bg-slate-600 text-white ${contextSelectedClickableAreaClassName}`
                  : ""
              }  ${
                cutItem?.isCut && cutItem.id === item.id ? "opacity-50" : ""
              } }`}
            >
              <ItemTitle
                item={item}
                onClickE={(e) => {
                  e.stopPropagation();
                  dispatch(setSelected({ id: item.id, type: item.type }));
                  setShowBlue(true);
                  setShowGray(false);
                  if (item.type === "file") {
                    dispatch(setActiveTabAsync(item.id));
                  } else {
                    dispatch(
                      collapseOrExpand({
                        item: { id: item.id, type: item.type },
                        collapse: true,
                      })
                    );
                  }
                  onItemSelected({ id: item.id, type: item.type });
                }}
                className={itemTitleClassName}
              />
              <ThreeDots
                item={item}
                selected={selected}
                primaryClass={threeDotPrimaryClass}
                secondaryClass={threeDotSecondaryClass}
                showBlue={showBlue}
                onClickE={(e) => {
                  e.stopPropagation();
                  setShowBlue(false);
                  setShowGray(true);
                  dispatch(
                    contextClick({
                      id: item.id,
                      type: item.type,
                      threeDot: { x: e.clientY, y: e.clientX },
                    })
                  );
                  onItemContextSelected({ id: item.id, type: item.type });
                }}
              />
            </div>
            <>
              <div id={`ghost-input-${item.id}`}></div>
              {item.type === "folder" && !item.collapsed && (
                <div className="flex flex-row sub-folder">
                  <CollapseBtn
                    item={item}
                    className={collapseBtnClassname}
                    style={collapseBtnStyle}
                    onClickE={(e) => {
                      e.stopPropagation();
                      setShowBlue(true);
                      setShowGray(false);
                      dispatch(setSelected({ id: item.id, type: item.type }));
                      dispatch(
                        collapseOrExpand({
                          item: { id: item.id, type: item.type },
                          collapse: true,
                        })
                      );
                    }}
                  />
                  <Folder
                    data={(() => {
                      const childFolder = data.find((newItem) => {
                        return newItem.id === item.id;
                      });
                      return childFolder?.subFoldersAndFiles as Directory[];
                    })()}
                    showBlue={showBlue}
                    setShowBlue={setShowBlue}
                    showGray={showGray}
                    setShowGray={setShowGray}
                    collapseBtnClassname={collapseBtnClassname}
                    collapseBtnStyle={collapseBtnStyle}
                    threeDotPrimaryClass={threeDotPrimaryClass}
                    threeDotSecondaryClass={threeDotSecondaryClass}
                    clickableAreaClassName={clickableAreaClassName}
                    selectedClickableAreaClassName={
                      selectedClickableAreaClassName
                    }
                    contextSelectedClickableAreaClassName={
                      contextSelectedClickableAreaClassName
                    }
                    itemTitleClassName={itemTitleClassName}
                    onItemSelected={onItemSelected}
                    onItemContextSelected={onItemContextSelected}
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

export default Folder;
