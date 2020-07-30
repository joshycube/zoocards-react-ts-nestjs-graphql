import React from "react";
import MTypography, {
  TypographyProps as TypographyInterface,
} from "@material-ui/core/Typography";

interface Props extends Partial<TypographyInterface> {
  children: string | JSX.Element | JSX.Element[];
}

function Typography(props: Props) {
  return <MTypography {...props}>{props.children}</MTypography>;
}

export default Typography;
