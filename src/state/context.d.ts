import { Context } from "react";
import { UnknownAction } from "@reduxjs/toolkit";
import type { ReactReduxContextValue } from "react-redux";
type contextType = Context<ReactReduxContextValue<unknown, UnknownAction> | null>;
export declare const VFSContext: contextType;
export {};
