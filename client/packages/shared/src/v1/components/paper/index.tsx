import React from "react";
import MPaper from "@material-ui/core/Paper";

interface Props {
  children: JSX.Element | JSX.Element[];
}

function Paper({ children }: Props) {
  return <MPaper>{children}</MPaper>;
}

export default Paper;
