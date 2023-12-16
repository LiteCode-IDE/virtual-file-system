import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { VFSContext } from "./context";
import { PropsWithChildren } from "react";

const VFSProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Provider context={VFSContext} store={store}>
      <PersistGate
        loading={<>Loading...</>}
        persistor={persistor}
      ></PersistGate>
      {children}
    </Provider>
  );
};

export default VFSProvider;