import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Breadcrumbs, FileExplorer, SearchInput, SearchResults, TabsList, getFileTree, updateFile, } from "./lib";
function App() {
    return (_jsxs("div", { className: "flex flex-row w-full h-full", children: [_jsxs("div", { className: "flex flex-col w-1/4 h-full", children: [_jsxs("div", { className: "flex flex-col", children: [_jsx("button", { onClick: () => {
                                    const fileId = Object.values(getFileTree())[0].id;
                                    console.log("FILE ID", fileId);
                                    updateFile(fileId, "Hello World");
                                }, children: "UPDATE FILE" }), _jsx("button", { onClick: () => {
                                    console.log("TREE", getFileTree());
                                }, children: "SHOW FILE TREE" })] }), _jsx(SearchInput, {}), _jsx(FileExplorer, { validExtensions: ["js"] })] }), _jsxs("div", { className: "flex flex-col w-1/2 h-full", children: [_jsx(TabsList, {}), _jsx(Breadcrumbs, {})] }), _jsx("div", { className: "overflow-clip w-1/2 h-full", children: _jsx(SearchResults, {}) })] }));
}
export default App;
