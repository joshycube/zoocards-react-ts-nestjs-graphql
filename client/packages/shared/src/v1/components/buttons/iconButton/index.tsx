import React from "react";
import MIconButton, {
  IconButtonProps as IconButtonInterface,
} from "@material-ui/core/IconButton";

interface Props {
  children: JSX.Element;
  IconButtonProps?: Partial<IconButtonInterface>;
  onClick?: () => void;
  testid?: string;
}

function IconButton({ children, IconButtonProps, onClick, testid }: Props) {
  return (
    <MIconButton data-test-id={testid} onClick={onClick} {...IconButtonProps}>
      {children}
    </MIconButton>
  );
}

export default IconButton;
