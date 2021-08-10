import React from "react";
import Header from "./header";
import * as s from "./styles";

const Layout = ({ children }) => {
  return (
    <s.Wrapper>
      <Header />
      <s.MainWrapper>
        <s.MainWidth>
          <s.Main>
            <s.MainInner>
              <s.MainContent>{children}</s.MainContent>
              <s.RightContent>Right Content</s.RightContent>
            </s.MainInner>
          </s.Main>
        </s.MainWidth>
      </s.MainWrapper>
    </s.Wrapper>
  );
};

export default Layout;
