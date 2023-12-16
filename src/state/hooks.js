import { createDispatchHook, createSelectorHook, createStoreHook, } from "react-redux";
import { VFSContext } from "./context";
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useStore = createStoreHook(VFSContext);
const useDispatch = createDispatchHook(VFSContext);
const useSelector = createSelectorHook(VFSContext);
export const useTypedDispatch = useDispatch;
export const useTypedSelector = useSelector;
