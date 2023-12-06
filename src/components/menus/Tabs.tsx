import React from "react";
import Tab from "./Tab";

import { useTypedDispatch, useTypedSelector } from "../../state/hooks";

import {
  activeTabs,
  closeTab,
  selectTab,
  selectedTab,
} from "../../state/features/tabs/tabsSlice";

const Tabs = () => {
  const dispatch = useTypedDispatch();
  const tabs = useTypedSelector(activeTabs);
  const selected = useTypedSelector(selectedTab);

  const onSelect = (id: string) => {
    // alert(`Tab ${i} selected`);
    if (selected !== id) {
      dispatch(selectTab(id));
    }
  };

  const onClose = async (id: string) => {
    dispatch(closeTab(id));
  };

  return (
    <div className="flex flex-row w-full">
      <div className={"file-tabs w-full py-1"}>
        <div className="flex flex-row items-center w-full overflow-x-scroll custom-scrollbar">
          {tabs.map((item) => (
            <Tab
              key={item.id}
              id={item.id}
              name={item.wholeName}
              type={item.extension}
              selected={item.id === selected}
              onSelect={onSelect}
              onClose={onClose}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
