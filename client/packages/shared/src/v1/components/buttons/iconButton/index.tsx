import React from "react";
import MIconButton, {
  IconButtonProps as IconButtonInterface,
} from "@material-ui/core/IconButton";

interface Props {
  children: JSX.Element;
  IconButtonProps?: Partial<IconButtonInterface>;
  onClick?: () => void;
}

function IconButton({ children, IconButtonProps, onClick }: Props) {
  return (
    <MIconButton onClick={onClick} {...IconButtonProps}>
      {children}
    </MIconButton>
  );
}

export default IconButton;
