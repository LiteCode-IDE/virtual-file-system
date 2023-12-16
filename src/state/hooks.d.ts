import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./store";
export declare const useStore: <State = unknown, Action2 extends import("redux").Action = import("redux").UnknownAction>() => import("redux").Store<State, Action2, {}>;
export declare const useTypedDispatch: () => AppDispatch;
export declare const useTypedSelector: TypedUseSelectorHook<RootState>;
