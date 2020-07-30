import React from "react";
import { ButtonProps as ButtonInterface } from "@material-ui/core/Button";

import * as Styles from "./styles";

interface Props extends Partial<ButtonInterface> {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: JSX.Element;
  testid?: string;
  disabled?: boolean;
}

function GeneralButton({ onClick, children, testid, disabled }: Props) {
  return (
    <Styles.CustomButton
      disabled={disabled}
      variant="contained"
      color="primary"
      onClick={onClick}
      data-test-id={testid}
    >
      {children}
    </Styles.CustomButton>
  );
}

export default GeneralButton;
