# @litecode-ide/virtual-file-system

**@litecode-ide/virtual-file-system** (from here onwards referred to as **_VFS_**) is an extensible, browser-based file system.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install VFS.

```bash
npm install @litecode-ide/virtual-file-system
```

## Simple Usage

```js
import React from "react";
import ReactDOM from "react-dom/client";

import { FileExplorer } from "@litecode-ide/virtual-file-system"; // FileExplorer component
import "@litecode-ide/virtual-file-system/dist/style.css"; // Default styles

const App = () => {
  return (
    <>
      <FileExplorer validExtensions={["html", "css", "js"]} />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

## List of Exported Components

- FileExplorer\
  [<img src="sample/structure.gif" width="100"/>](sample/structure.gif)

- BreadCrumbs\
  [<img src="sample/breadcrumbs.gif" width="100"/>](sample/breadcrumbs.gif)

- Tabs\
  [<img src="sample/tabs.gif" width="100"/>](sample/tabs.gif)

- Search\
  [<img src="sample/search.gif" width="100"/>](sample/search.gif)

## API

```ts
interface FileExplorerProps {
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

interface SearchInputProps {
  className?: string;
  style?: React.CSSProperties;
  onSearchFiles?: (searchTerm: string, searchResults: SearchResults) => void;
}

interface BreadcrumbsProps {
  containerClassName?: string;
  textClassName?: string;
  miniFolderCollapseBtnClassName?: string;
  miniFolderCollapseBtnStyle?: React.CSSProperties;
  miniFolderContainerClassName?: string;
  itemTitleClassName?: string;
  onBreadcrumbFileClick?: (id: string ) => void;
}

interface SearchResultProps {
  highlightedTextClassName?: string;
  headerClassName?: string;
  headerStyle?: React.CSSProperties;
  titleClassName?: string;
}

type FileTreeType = Record<string, {
    id: string;
    content: string;
}>;

```

```bash
## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
```
