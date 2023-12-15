import {
  Breadcrumbs,
  FileExplorer,
  SearchInput,
  SearchResults,
  TabsList,
  getFileTree,
  updateFile,
} from "./lib";

function App() {
  return (
    <div className="flex flex-row w-full h-full">
      <div className="flex flex-col w-1/4 h-full">
        <div className="flex flex-col">
          <button
            onClick={() => {
              const fileId = Object.values(getFileTree())[0].id;
              console.log("FILE ID", fileId);
              updateFile(fileId, "Hello World");
            }}
          >
            UPDATE FILE
          </button>
          <button
            onClick={() => {
              console.log("TREE", getFileTree());
            }}
          >
            SHOW FILE TREE
          </button>
        </div>
        <SearchInput />
        <FileExplorer validExtensions={["js"]} />
      </div>
      <div className="flex flex-col w-1/2 h-full">
        <TabsList />
        <Breadcrumbs />
      </div>
      <div className="overflow-clip w-1/2 h-full">
        <SearchResults />
      </div>
    </div>
  );
}

export default App;
