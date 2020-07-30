import React from "react";
import MCardActions from "@material-ui/core/CardActions";

interface Props {
  children: JSX.Element | JSX.Element[];
}

function CardActions({ children }: Props) {
  return <MCardActions>{children}</MCardActions>;
}

export default CardActions;
