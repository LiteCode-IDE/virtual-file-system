// import Structure from "./components/file-structure/Structure";
import React from "react";
import "../index.css";
import Structure, {
  StructureProps,
} from "../components/file-structure/Structure";
import { VFSProvider } from "../state/provider";
import { VFSContext } from "../state/context";
import Test from "../components/Test";
import Tabs, { TabsProps } from "../components/menus/Tabs";
import SearchContainer, {
  SearchContainerProps,
} from "../components/file-structure/search/SearchContainer";
import BC, { BreadcrumbsProps } from "../components/menus/Breadcrumbs";
import SI, {
  SearchInputProps,
} from "../components/file-structure/search/SearchInput";
import {
  getFileTree,
  updateFileContents,
  getSelectedFile,
} from "../state/features/structure/utils/getFileTree";

const FileExplorer: React.FC<StructureProps> = ({
  deleteConfirmationClassName,
  fileInputClassName,
  fileInputStyle,
  contextMenuClassName,
  contextMenuHrColor,
  contextMenuClickableAreaClassName,
  fileActionsBtnClassName,
  projectName,
  fileActionsDisableCollapse,
  fileActionsDisableTooltip,
  fileActionsDisableDownload,
  folderCollapseBtnClassname,
  folderCollapseBtnStyle,
  folderThreeDotPrimaryClass,
  folderThreeDotSecondaryClass,
  folderClickableAreaClassName,
  folderSelectedClickableAreaClassName,
  folderContextSelectedClickableAreaClassName,
  itemTitleClassName,
  structureContainerClassName,
  containerHeight,
  onItemSelected = () => {},
  onNewItemClick = () => {},
  onAreaCollapsed = () => {},
  onItemContextSelected = () => {},
  onNodeDeleted = () => {},
  onNewItemCreated = () => {},
  validExtensions,
}) => {
  return (
    <VFSProvider>
      <Structure
        deleteConfirmationClassName={deleteConfirmationClassName}
        fileInputClassName={fileInputClassName}
        fileInputStyle={fileInputStyle}
        contextMenuClassName={contextMenuClassName}
        contextMenuHrColor={contextMenuHrColor}
        contextMenuClickableAreaClassName={contextMenuClickableAreaClassName}
        fileActionsBtnClassName={fileActionsBtnClassName}
        projectName={projectName}
        fileActionsDisableCollapse={fileActionsDisableCollapse}
        fileActionsDisableTooltip={fileActionsDisableTooltip}
        fileActionsDisableDownload={fileActionsDisableDownload}
        folderCollapseBtnClassname={folderCollapseBtnClassname}
        folderCollapseBtnStyle={folderCollapseBtnStyle}
        folderThreeDotPrimaryClass={folderThreeDotPrimaryClass}
        folderThreeDotSecondaryClass={folderThreeDotSecondaryClass}
        folderClickableAreaClassName={folderClickableAreaClassName}
        folderSelectedClickableAreaClassName={
          folderSelectedClickableAreaClassName
        }
        folderContextSelectedClickableAreaClassName={
          folderContextSelectedClickableAreaClassName
        }
        itemTitleClassName={itemTitleClassName}
        structureContainerClassName={structureContainerClassName}
        containerHeight={containerHeight}
        onItemSelected={onItemSelected}
        onNewItemClick={onNewItemClick}
        onAreaCollapsed={onAreaCollapsed}
        onItemContextSelected={onItemContextSelected}
        onNodeDeleted={onNodeDeleted}
        onNewItemCreated={onNewItemCreated}
        validExtensions={validExtensions}
      />
    </VFSProvider>
  );
};

const TabsList: React.FC<TabsProps> = ({
  containerClassName,
  tabClassName,
  selectedTabClassName,
  onTabClick = () => {},
  onTabClose = () => {},
}) => {
  return (
    <VFSProvider>
      <Tabs
        containerClassName={containerClassName}
        tabClassName={tabClassName}
        selectedTabClassName={selectedTabClassName}
        onTabClick={onTabClick}
        onTabClose={onTabClose}
      />
    </VFSProvider>
  );
};

const SearchInput: React.FC<SearchInputProps> = ({
  className,
  style,
  onSearchFiles = () => {},
}) => {
  return (
    <VFSProvider>
      <SI className={className} style={style} onSearchFiles={onSearchFiles} />
    </VFSProvider>
  );
};

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  containerClassName,
  textClassName,
  miniFolderCollapseBtnClassName,
  miniFolderCollapseBtnStyle,
  miniFolderContainerClassName,
  itemTitleClassName,
  onBreadcrumbFileClick = () => {},
}) => {
  return (
    <VFSProvider>
      <BC
        containerClassName={containerClassName}
        textClassName={textClassName}
        miniFolderCollapseBtnClassName={miniFolderCollapseBtnClassName}
        miniFolderCollapseBtnStyle={miniFolderCollapseBtnStyle}
        miniFolderContainerClassName={miniFolderContainerClassName}
        itemTitleClassName={itemTitleClassName}
        onBreadcrumbFileClick={onBreadcrumbFileClick}
      />
    </VFSProvider>
  );
};

const SearchResults: React.FC<SearchContainerProps> = ({
  highlightedTextClassName,
  headerClassName,
  headerStyle,
  titleClassName,
}) => {
  return (
    <VFSProvider>
      <SearchContainer
        highlightedTextClassName={highlightedTextClassName}
        headerClassName={headerClassName}
        headerStyle={headerStyle}
        titleClassName={titleClassName}
      />
    </VFSProvider>
  );
};

const updateFile = (id: string, content: string) => {
  updateFileContents(id, content);
};

export {
  FileExplorer,
  TabsList,
  SearchResults,
  Breadcrumbs,
  SearchInput,
  getFileTree,
  updateFile,
  getSelectedFile,
};
