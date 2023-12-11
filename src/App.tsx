import Structure from "./components/file-structure/Structure";
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { persistor, store } from "./state/store";
import { PersistGate } from "redux-persist/integration/react";
import Tabs from "./components/menus/Tabs";
import SearchContainer from "./components/file-structure/search/SearchContainer";
import Breadcrumbs from "./components/menus/Breadcrumbs";
import SearchInput from "./components/file-structure/search/SearchInput";

function App() {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<>Loading...</>}
        persistor={persistor}
      ></PersistGate>
      <div className="w-full h-full flex justify-between items-center">
        <div className="flex flex-col h-full">
          <SearchInput
            // style={{}}
            // onSearchFiles={(searchTerm, searchResults) => {
            //   console.log("SEARHCING", searchTerm, searchResults);
            // }}
            // className={`w-fit bg-slate-300 text-white hover:bg-slate-400 hover:text-black focus:bg-slate-400 focus:text-black`}
          />
          <Structure
            // deleteConfirmationClassName={`bg-yellow-500 text-black`}
            // fileInputClassName={`bg-blue-100 text-black`}
            // fileInputStyle={{}}
            // contextMenuClassName={`bg-blue-900 text-white`}
            // contextMenuHrColor={`green`}
            // contextMenuClickableAreaClassName={`bg-orange-500 hover:bg-red-300 text-white hover:text-black`}
            // fileActionsBtnClassName={`hover:bg-dark-hover bg-dark-200 text-white hover:bg-indigo-500`}
            // projectName={`My Nice Project`}
            // // fileActionsDisableCollapse
            // // fileActionsDisableTooltip
            // // fileActionsDisableDownload
            // folderCollapseBtnClassname={`border border-red-300 hover:bg-indigo-500 hover:border-indigo-500 bg-red-300 text-black`}
            // folderCollapseBtnStyle={{}}
            // folderThreeDotPrimaryClass={``}
            // folderThreeDotSecondaryClass={``}
            // folderClickableAreaClassName={`hover:bg-slate-300 bg-slate-200 text-white`}
            // folderSelectedClickableAreaClassName={`hover:bg-slate-300 bg-slate-200 text-white`}
            // folderContextSelectedClickableAreaClassName={`hover:bg-slate-300 bg-slate-200 text-white`}
            // itemTitleClassName={`text-black hover:text-yellow`}
            // structureContainerClassName={``}
            // containerHeight={`calc(80vh - 4rem)`}
            // onNewItemCreated={(id) => {
            //   console.log("NEWWWW", id);
            // }}
          />
        </div>
        <div className="flex flex-col h-full">
          <Tabs
            // containerClassName={``}
            // tabClassName={`hover:bg-slate-300 hover:text-white border-t border-t-white transition-colors p-2 mx-2`}
            // selectedTabClassName={`bg-gray-500 border-t-blue-600 text-white`}
            // onTabClick={(id) => {
            //   console.log("CLICKED TAB", id);
            // }}
            // onTabClose={(id) => {
            //   console.log("CLOSED TAB", id);
            // }}
          />
          <Breadcrumbs
            // containerClassName="bg-slate-600 py-2"
            // textClassName="text-white"
            // miniFolderCollapseBtnClassName={
            //   "bg-blue-300 border-r-red-300 hover:border-r-violet-800 border-r-4"
            // }
            // miniFolderCollapseBtnStyle={{ width: "1rem" }}
            // miniFolderContainerClassName={"bg-red-200 hover:bg-red-300"}
            // itemTitleClassName={
            //   "bg-blue-300 hover:bg-blue-400 text-red hover:text-orange"
            // }
            // onBreadcrumbFileClick={(id) => {
            //   console.log("CLICKED", id);
            // }}
          />
        </div>
        <div className="flex h-full">
          <SearchContainer
            // highlightedTextClassName={`bg-red-300 text-black`}
            // headerClassName={`bg-blue-300 text-black`}
            // titleClassName={`bg-green-300 text-black`}
          />
        </div>
      </div>
      <></>
    </Provider>
  );
}

export default App;
