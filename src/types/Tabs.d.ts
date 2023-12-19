export interface TabsProps {
    containerClassName?: string;
    tabClassName?: string;
    selectedTabClassName?: string;
    onTabClick?: (id: string) => void;
    onTabClose?: (id: string) => void;
}
declare const Tabs: React.FC<TabsProps>;
export default Tabs;
