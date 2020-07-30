import React from "react";
import { FormattedMessage } from "react-intl";

import * as Styled from "./styles";

import Typography from "../typography";

function Loader() {
  return (
    <Styled.Wrapper>
      <Typography>
        <FormattedMessage id="loading" />
      </Typography>
    </Styled.Wrapper>
  );
}

export default Loader;
