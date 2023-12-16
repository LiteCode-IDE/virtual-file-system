import { combineReducers, configureStore } from "@reduxjs/toolkit";
import structureReducer from "./features/structure/structureSlice";
import tabsReducer from "./features/tabs/tabsSlice";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
// import { listenerMiddleware } from "./middleware/sendNormalized";
import { persistStore, persistReducer } from "redux-persist";
import miniStructureReducer from "./features/structure/miniStructureSlice";
const persistConfig = {
    key: "project",
    storage,
    whitelist: ["structure", "editor", "tabs"],
};
const rootReducer = combineReducers({
    structure: structureReducer,
    tabs: tabsReducer,
    miniStructure: miniStructureReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
});
export const persistor = persistStore(store);
