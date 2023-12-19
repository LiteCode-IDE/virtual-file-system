import React from "react";
import { StructureProps } from "./components/file-structure/Structure";
import { TabsProps } from "./components/menus/Tabs";
import { SearchContainerProps } from "./components/file-structure/search/SearchContainer";
import { BreadcrumbsProps } from "./components/menus/Breadcrumbs";
import { SearchInputProps } from "./components/file-structure/search/SearchInput";
import { getFileTree, getSelectedFile } from "./state/features/structure/utils/getFileTree";
declare const FileExplorer: React.FC<StructureProps>;
declare const TabsList: React.FC<TabsProps>;
declare const SearchInput: React.FC<SearchInputProps>;
declare const Breadcrumbs: React.FC<BreadcrumbsProps>;
declare const SearchResults: React.FC<SearchContainerProps>;
declare const updateFile: (id: string, content: string) => void;
export { FileExplorer, TabsList, SearchResults, Breadcrumbs, SearchInput, getFileTree, updateFile, getSelectedFile};