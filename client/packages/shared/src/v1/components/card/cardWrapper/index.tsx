import React from "react";
import MCard from "@material-ui/core/Card";

import * as Styles from "./styles";

interface Props {
  children: JSX.Element | JSX.Element[];
}

function Card({ children }: Props) {
  return (
    <Styles.CardWrapper>
      <MCard>{children}</MCard>
    </Styles.CardWrapper>
  );
}

export default Card;
