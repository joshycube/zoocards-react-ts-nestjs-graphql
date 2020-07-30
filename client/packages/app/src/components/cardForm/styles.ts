import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Field = styled.div`
  padding-bottom: ${(props) => props.theme.sizes.small}px;
`;
