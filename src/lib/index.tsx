// import Structure from "./components/file-structure/Structure";
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { persistor, store } from "../state/store";
import { PersistGate } from "redux-persist/integration/react";
import Structure from "../components/file-structure/Structure";
// import Structure from "./components/file-structure/Structure";
// import Tabs from "./components/menus/Tabs";
// import SearchContainer from "./components/file-structure/search/SearchContainer";
// import Breadcrumbs from "./components/menus/Breadcrumbs";
// import SearchInput from "./components/file-structure/search/SearchInput";
const MyContext = React.createContext<any>(null);

function App() {
  return (
    <Provider context={MyContext} store={store}>
      <PersistGate
        loading={<>Loading...</>}
        persistor={persistor}
      ></PersistGate>
      <Structure validExtensions={["js", "jsx", "ts", "png"]} />
    </Provider>
  );
}

export default App;
