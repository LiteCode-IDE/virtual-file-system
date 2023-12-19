declare module "@litecode-ide/virtual-file-system" {
  type ItemType = "file" | "folder";

  interface BreadcrumbsProps {
    containerClassName?: string;
    textClassName?: string;
    miniFolderCollapseBtnClassName?: string;
    miniFolderCollapseBtnStyle?: React.CSSProperties;
    miniFolderContainerClassName?: string;
    itemTitleClassName?: string;
    onBreadcrumbFileClick?: (id: string) => void;
  }

  interface StructureProps {
    deleteConfirmationClassName?: string;
    fileInputClassName?: string;
    fileInputStyle?: React.CSSProperties;
    contextMenuClassName?: string;
    contextMenuHrColor?: string;
    contextMenuClickableAreaClassName?: string;
    fileActionsBtnClassName?: string;
    projectName?: string;
    fileActionsDisableCollapse?: true;
    fileActionsDisableTooltip?: true;
    fileActionsDisableDownload?: true;
    folderCollapseBtnClassname?: string;
    folderCollapseBtnStyle?: React.CSSProperties;
    folderThreeDotPrimaryClass?: string;
    folderThreeDotSecondaryClass?: string;
    folderClickableAreaClassName?: string;
    folderSelectedClickableAreaClassName?: string;
    folderContextSelectedClickableAreaClassName?: string;
    itemTitleClassName?: string;
    structureContainerClassName?: string;
    containerHeight?: string;
    onItemSelected?: (item: { id: string; type: ItemType }) => void;
    onNewItemClick?: (parentFolderId: string, type: ItemType) => void;
    onAreaCollapsed?: (collapsed: boolean) => void;
    onItemContextSelected?: (item: { id: string; type: ItemType }) => void;
    onNodeDeleted?: (id: string) => void;
    onNewItemCreated?: (id: string) => void;
    validExtensions: string[];
  }

  interface TabsProps {
    containerClassName?: string;
    tabClassName?: string;
    selectedTabClassName?: string;
    onTabClick?: (id: string) => void;
    onTabClose?: (id: string) => void;
  }

  interface MatchingFile {
    id: string;
    name: string;
    extension: string;
    matches: MatchingLine[];
  }

  interface MatchingLine {
    line: number;
    content: string;
  }

  interface SearchResults {
    files: MatchingFile[];
    numOfResults: number;
    numOfLines: number;
  }

  interface SearchInputProps {
    className?: string;
    style?: React.CSSProperties;
    onSearchFiles?: (searchTerm: string, searchResults: SearchResults) => void;
  }

  interface SearchContainerProps {
    highlightedTextClassName?: string;
    headerClassName?: string;
    headerStyle?: React.CSSProperties;
    titleClassName?: string;
    searchResultClicked: (fileId: string, line: number) => void;
  }

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
