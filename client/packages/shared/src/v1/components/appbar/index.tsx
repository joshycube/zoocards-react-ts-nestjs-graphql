import React from "react";
import MAppBar, {
  AppBarProps as AppBarInterface,
} from "@material-ui/core/AppBar";

interface Props extends Partial<AppBarInterface> {
  children: JSX.Element;
}

function AppBar({ children, ...rest }: Props) {
  return <MAppBar {...rest}>{children}</MAppBar>;
}

export default AppBar;
