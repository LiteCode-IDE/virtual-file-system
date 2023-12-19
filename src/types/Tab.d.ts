import React from "react";
interface TabProps {
    id: string;
    name: string;
    type: string;
    selected: boolean;
    onSelect: (id: string) => void;
    onClose: (id: string) => void;
    className?: string;
    selectedTabClassName?: string;
}
declare const Tab: React.FC<TabProps>;
export default Tab;
