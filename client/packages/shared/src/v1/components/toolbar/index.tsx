import React from "react";
import MToolbar, {
  ToolbarProps as ToolbarInterface,
} from "@material-ui/core/Toolbar";

interface Props extends Partial<ToolbarInterface> {
  children: JSX.Element;
}

function Toolbar({ children, ...rest }: Props) {
  return <MToolbar {...rest}>{children}</MToolbar>;
}

export default Toolbar;
