import React from "react";
import {
  type ItemType,
  type ValidExtensions,
} from "../../../state/features/structure/structureSlice";
import { getLogo, trimName } from "../utils";

interface ItemTitleProps {
  item: {
    id: string;
    name: string;
    type: ItemType;
    collapsed?: boolean;
    extension?: string;
  };
  onClickE: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const ItemTitle: React.FC<ItemTitleProps> = ({ item, onClickE }) => {
  const findLogo = (item: {
    id: string;
    type: ItemType;
    collapsed?: boolean;
    extension?: string;
  }) => {
    if (item.type === "folder") {
      return item.collapsed ? "closed-folder" : "opened-folder";
    } else if (item.type === "file" && item.extension) {
      return getLogo(item.extension);
    }
  };

  return (
    <div
      onClick={e => {
        onClickE(e);
      }}
      parent-id={item.id}
      typeof-item={item.type}
      className="w-full py-[0.32rem] pl-3 flex flex-row justify-start items-center collapsable">
      {
        <span
          typeof-item={item.type}
          parent-id={item.id}
          className={`span-logo span-logo-width ${findLogo(item)}`}>
          &nbsp;
        </span>
      }
      <span typeof-item={item.type} parent-id={item.id} className="px-1 mx-1 ">
        {trimName(
          item as
            | {
                name: string;
                type: "folder";
              }
            | {
                name: string;
                type: "file";
                extension: ValidExtensions;
              },
        )}
      </span>
    </div>
  );
};

export default ItemTitle;
