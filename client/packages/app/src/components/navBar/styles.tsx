import styled from "styled-components";
import MAppBar from "@zoocards/shared/src/v1/components/appbar";

import { Theme } from "@zoocards/shared/src/v1/types/Theme";

interface Props {
  theme: Theme;
}

export const CustomAppBar = styled(MAppBar)`
  ${({ theme }: Props) => `
    background-color: ${theme.backgrounds.primary};
    color: ${theme.colors.primary};
  `}
`;
