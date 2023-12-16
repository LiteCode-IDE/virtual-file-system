import React from "react";
import { Context } from "react";
import { UnknownAction } from "@reduxjs/toolkit";
import type { ReactReduxContextValue } from "react-redux";

type contextType = Context<ReactReduxContextValue<
  unknown,
  UnknownAction
> | null>;

export const VFSContext = React.createContext(null) as contextType;
