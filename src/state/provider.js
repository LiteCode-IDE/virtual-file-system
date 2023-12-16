import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { VFSContext } from "./context";
const VFSProvider = ({ children }) => {
    return (_jsxs(Provider, { context: VFSContext, store: store, children: [_jsx(PersistGate, { loading: _jsx(_Fragment, { children: "Loading..." }), persistor: persistor }), children] }));
};
export default VFSProvider;
