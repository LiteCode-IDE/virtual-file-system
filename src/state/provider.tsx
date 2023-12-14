import React from "react";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { VFSContext } from "./context";

export function VFSProvider({ children }) {
  return (
    <Provider context={VFSContext} store={store}>
      <PersistGate
        loading={<>Loading...</>}
        persistor={persistor}
      ></PersistGate>
      {children}
    </Provider>
  );
}
