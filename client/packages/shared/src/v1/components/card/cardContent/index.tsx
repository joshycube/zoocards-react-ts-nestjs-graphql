import React from "react";
import MCardContent from "@material-ui/core/CardContent";

interface Props {
  children: JSX.Element | JSX.Element[];
}

function CardContent({ children }: Props) {
  return <MCardContent>{children}</MCardContent>;
}

export default CardContent;
