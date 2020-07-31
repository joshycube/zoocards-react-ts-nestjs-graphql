import React from "react";
import { FormattedMessage } from "react-intl";

import Toolbar from "@zoocards/shared/src/v1/components/toolbar";

import Typography from "@zoocards/shared/src/v1/components/typography";

import * as Styles from "./styles";

function NavBar() {
  return (
    <Styles.CustomAppBar position="sticky">
      <Toolbar>
        <Typography variant="h6">
          <FormattedMessage id="zoocards" />
        </Typography>
      </Toolbar>
    </Styles.CustomAppBar>
  );
}

export default NavBar;
