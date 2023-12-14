import React from "react";
import { connect } from "react-redux";
import { VFSContext } from "../state/context";

import { useTypedDispatch } from "../state/hooks";

const Test = ({theme, children, _}) => {
  const dispatch = useTypedDispatch();

  return <div>Testing</div>;
};

export default Test;
