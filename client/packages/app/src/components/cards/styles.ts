import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-flow: row wrap;
`;

export const CardWrapper = styled.div`
  margin: ${(props) => props.theme.sizes.small}px;
`;
