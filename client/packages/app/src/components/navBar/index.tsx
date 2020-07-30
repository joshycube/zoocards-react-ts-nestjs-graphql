import React from "react";
import { FormattedMessage } from "react-intl";

import AppBar from "@zoocards/shared/src/v1/components/appbar";
import Toolbar from "@zoocards/shared/src/v1/components/toolbar";

import Typography from "@zoocards/shared/src/v1/components/typography";

function NavBar() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6">
          <FormattedMessage id="zoocards" />
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
