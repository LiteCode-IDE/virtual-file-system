import { jsx as _jsx } from "react/jsx-runtime";
import "../index.css";
import Structure from "../components/file-structure/Structure";
import VFSProvider from "../state/provider";
import Tabs from "../components/menus/Tabs";
import SearchContainer from "../components/file-structure/search/SearchContainer";
import BC from "../components/menus/Breadcrumbs";
import SI from "../components/file-structure/search/SearchInput";
import { getFileTree, updateFileContents, getSelectedFile, } from "../state/features/structure/utils/getFileTree";
const FileExplorer = ({ deleteConfirmationClassName, fileInputClassName, fileInputStyle, contextMenuClassName, contextMenuHrColor, contextMenuClickableAreaClassName, fileActionsBtnClassName, projectName, fileActionsDisableCollapse, fileActionsDisableTooltip, fileActionsDisableDownload, folderCollapseBtnClassname, folderCollapseBtnStyle, folderThreeDotPrimaryClass, folderThreeDotSecondaryClass, folderClickableAreaClassName, folderSelectedClickableAreaClassName, folderContextSelectedClickableAreaClassName, itemTitleClassName, structureContainerClassName, containerHeight, onItemSelected = () => { }, onNewItemClick = () => { }, onAreaCollapsed = () => { }, onItemContextSelected = () => { }, onNodeDeleted = () => { }, onNewItemCreated = () => { }, validExtensions, }) => {
    return (_jsx(VFSProvider, { children: _jsx(Structure, { deleteConfirmationClassName: deleteConfirmationClassName, fileInputClassName: fileInputClassName, fileInputStyle: fileInputStyle, contextMenuClassName: contextMenuClassName, contextMenuHrColor: contextMenuHrColor, contextMenuClickableAreaClassName: contextMenuClickableAreaClassName, fileActionsBtnClassName: fileActionsBtnClassName, projectName: projectName, fileActionsDisableCollapse: fileActionsDisableCollapse, fileActionsDisableTooltip: fileActionsDisableTooltip, fileActionsDisableDownload: fileActionsDisableDownload, folderCollapseBtnClassname: folderCollapseBtnClassname, folderCollapseBtnStyle: folderCollapseBtnStyle, folderThreeDotPrimaryClass: folderThreeDotPrimaryClass, folderThreeDotSecondaryClass: folderThreeDotSecondaryClass, folderClickableAreaClassName: folderClickableAreaClassName, folderSelectedClickableAreaClassName: folderSelectedClickableAreaClassName, folderContextSelectedClickableAreaClassName: folderContextSelectedClickableAreaClassName, itemTitleClassName: itemTitleClassName, structureContainerClassName: structureContainerClassName, containerHeight: containerHeight, onItemSelected: onItemSelected, onNewItemClick: onNewItemClick, onAreaCollapsed: onAreaCollapsed, onItemContextSelected: onItemContextSelected, onNodeDeleted: onNodeDeleted, onNewItemCreated: onNewItemCreated, validExtensions: validExtensions }) }));
};
const TabsList = ({ containerClassName, tabClassName, selectedTabClassName, onTabClick = () => { }, onTabClose = () => { }, }) => {
    return (_jsx(VFSProvider, { children: _jsx(Tabs, { containerClassName: containerClassName, tabClassName: tabClassName, selectedTabClassName: selectedTabClassName, onTabClick: onTabClick, onTabClose: onTabClose }) }));
};
const SearchInput = ({ className, style, onSearchFiles = () => { }, }) => {
    return (_jsx(VFSProvider, { children: _jsx(SI, { className: className, style: style, onSearchFiles: onSearchFiles }) }));
};
const Breadcrumbs = ({ containerClassName, textClassName, miniFolderCollapseBtnClassName, miniFolderCollapseBtnStyle, miniFolderContainerClassName, itemTitleClassName, onBreadcrumbFileClick = () => { }, }) => {
    return (_jsx(VFSProvider, { children: _jsx(BC, { containerClassName: containerClassName, textClassName: textClassName, miniFolderCollapseBtnClassName: miniFolderCollapseBtnClassName, miniFolderCollapseBtnStyle: miniFolderCollapseBtnStyle, miniFolderContainerClassName: miniFolderContainerClassName, itemTitleClassName: itemTitleClassName, onBreadcrumbFileClick: onBreadcrumbFileClick }) }));
};
const SearchResults = ({ highlightedTextClassName, headerClassName, headerStyle, titleClassName, }) => {
    return (_jsx(VFSProvider, { children: _jsx(SearchContainer, { highlightedTextClassName: highlightedTextClassName, headerClassName: headerClassName, headerStyle: headerStyle, titleClassName: titleClassName }) }));
};
const updateFile = (id, content) => {
    updateFileContents(id, content);
};
export { FileExplorer, TabsList, SearchResults, Breadcrumbs, SearchInput, getFileTree, updateFile, getSelectedFile, };
