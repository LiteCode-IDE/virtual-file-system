// import Structure from "./components/file-structure/Structure";
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { persistor, store } from "./state/store";
import { PersistGate } from "redux-persist/integration/react";
// import Structure from "./components/file-structure/Structure";
// import Tabs from "./components/menus/Tabs";
// import SearchContainer from "./components/file-structure/search/SearchContainer";
// import Breadcrumbs from "./components/menus/Breadcrumbs";
// import SearchInput from "./components/file-structure/search/SearchInput";

function App() {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<>Loading...</>}
        persistor={persistor}
      ></PersistGate>
      {/* <Structure validExtensions={["js"]} /> */}
    </Provider>
  );
}

export default App;
