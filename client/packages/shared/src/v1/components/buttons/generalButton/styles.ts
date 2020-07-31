import styled from "styled-components";
import MButton from "@material-ui/core/Button";

import { ColorKeys, Theme } from "../../../types/Theme";

interface Props {
  theme: Theme;
  color: ColorKeys;
}

export const CustomButton = styled(MButton)`
  ${({ theme, color = "default" }: Props) => `
    background-color: ${theme[color].backgroundColor};
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    padding: 7px 14px;
    &:hover {
      background-color: ${theme[color].hoverColor};
    }
    & .MuiButton-label {
      color: #fff;
    }
  `}
`;
