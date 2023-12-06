import "./App.css";
import Structure from "./components/file-structure/Structure";
import React, {useEffect} from "react";
import { Provider } from "react-redux";
import { persistor, store } from "./state/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}></PersistGate>
      <Structure />
    </Provider>
  );
}

export default App;
