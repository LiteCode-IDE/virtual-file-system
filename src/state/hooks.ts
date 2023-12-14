import {
  createDispatchHook,
  createSelectorHook,
  createStoreHook,
} from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./store";
import { VFSContext } from "./context";

// Use throughout your app instead of plain `useDispatch` and `useSelector`

export const useStore = createStoreHook(VFSContext);
const useDispatch = createDispatchHook(VFSContext);
const useSelector = createSelectorHook(VFSContext);

export const useTypedDispatch: () => AppDispatch = useDispatch;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
