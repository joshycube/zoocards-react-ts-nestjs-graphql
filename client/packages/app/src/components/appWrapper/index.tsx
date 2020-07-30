import React from "react";
import { StylesProvider } from "@material-ui/styles";
import { ThemeProvider } from "styled-components";

import theme from "@zoocards/shared/src/v1/theme/lightTheme";

export function AppWrapper({ children }: { children: JSX.Element }) {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StylesProvider>
  );
}

export default AppWrapper;
