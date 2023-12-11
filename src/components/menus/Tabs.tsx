import React from "react";
import Tab from "./Tab";

import { useTypedDispatch, useTypedSelector } from "../../state/hooks";

import {
  activeTabs,
  closeTab,
  selectTab,
  selectedTab,
} from "../../state/features/tabs/tabsSlice";

interface TabsProps {
  containerClassName?: string;
  tabClassName?: string;
  selectedTabClassName?: string;
  onTabClick?: (id: string) => void;
  onTabClose?: (id: string) => void;
}

const Tabs: React.FC<TabsProps> = ({
  containerClassName,
  tabClassName,
  selectedTabClassName,
  onTabClick = () => {},
  onTabClose = () => {},
}) => {
  const dispatch = useTypedDispatch();
  const tabs = useTypedSelector(activeTabs);
  const selected = useTypedSelector(selectedTab);

  const onSelect = (id: string) => {
    // alert(`Tab ${i} selected`);
    if (selected !== id) {
      dispatch(selectTab(id));
      onTabClick(id);
    }
  };

  const onClose = async (id: string) => {
    dispatch(closeTab(id));
    onTabClose(id);
  };

  return (
    <div className="flex flex-row w-full">
      <div className={"file-tabs w-full py-1"}>
        <div
          className={`flex flex-row items-center w-full overflow-x-scroll custom-scrollbar ${containerClassName}`}
        >
          {tabs.map((item) => (
            <Tab
              key={item.id}
              id={item.id}
              name={item.wholeName}
              type={item.extension}
              selected={item.id === selected}
              onSelect={onSelect}
              onClose={onClose}
              className={tabClassName}
              selectedTabClassName={selectedTabClassName}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
