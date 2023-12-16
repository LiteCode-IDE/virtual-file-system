import { jsx as _jsx } from "react/jsx-runtime";
import Tab from "./Tab";
import { useTypedDispatch, useTypedSelector } from "../../state/hooks";
import { activeTabs, closeTab, selectTab, selectedTab, } from "../../state/features/tabs/tabsSlice";
const Tabs = ({ containerClassName, tabClassName, selectedTabClassName, onTabClick = () => { }, onTabClose = () => { }, }) => {
    const dispatch = useTypedDispatch();
    const tabs = useTypedSelector(activeTabs);
    const selected = useTypedSelector(selectedTab);
    const onSelect = (id) => {
        // alert(`Tab ${i} selected`);
        if (selected !== id) {
            dispatch(selectTab(id));
            onTabClick(id);
        }
    };
    const onClose = async (id) => {
        dispatch(closeTab(id));
        onTabClose(id);
    };
    return (_jsx("div", { className: "flex flex-row w-full", children: _jsx("div", { className: "file-tabs w-full py-1", children: _jsx("div", { className: `flex flex-row items-center w-full overflow-x-scroll custom-scrollbar ${containerClassName}`, children: tabs.map((item) => (_jsx(Tab, { id: item.id, name: item.wholeName, type: item.extension, selected: item.id === selected, onSelect: onSelect, onClose: onClose, className: tabClassName, selectedTabClassName: selectedTabClassName }, item.id))) }) }) }));
};
export default Tabs;
