import { StructureProps } from "../components/file-structure/Structure";
import { TabsProps } from "../components/menus/Tabs";
import { SearchContainerProps } from "../components/file-structure/search/SearchContainer";
import { BreadcrumbsProps } from "../components/menus/Breadcrumbs";
import { SearchInputProps } from "../components/file-structure/search/SearchInput";

declare module "@litecode-ide/virtual-file-system" {
  const FileExplorer: React.FC<StructureProps>;
  const TabsList: React.FC<TabsProps>;
  const SearchInput: React.FC<SearchInputProps>;
  const Breadcrumbs: React.FC<BreadcrumbsProps>;
  const SearchResults: React.FC<SearchContainerProps>;
  const updateFile: (id: string, content: string) => void;
  const getFileTree: () => Record<
    string,
    {
      id: string;
      content: string;
    }
  >;
  const getSelectedFile: () => string;

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
}
