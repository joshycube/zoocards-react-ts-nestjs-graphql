import React from "react";

import NavBar from "../../components/navBar";
import * as Styled from "./styles";

interface Props {
  children: JSX.Element;
}

function MainLayout({ children }: Props) {
  return (
    <>
      <header>
        <nav>
          <NavBar />
        </nav>
      </header>
      <main>
        <Styled.Wrapper>{children}</Styled.Wrapper>
      </main>
      <footer></footer>
    </>
  );
}

export default MainLayout;
