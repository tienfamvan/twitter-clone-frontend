import styled from "styled-components";
import * as sc from "@/app/styles/base";

export const Wrapper = styled(sc.FlexRow)`
  min-height: 100vh;
  width: 100%;
`;

export const MainWrapper = styled(sc.FlexColumnAlignItemsStart)`
  flex-shrink: 1;
  flex-grow: 1;
  z-index: 50;
`;

export const MainWidth = styled(sc.Base)`
  width: 990px;
  flex-shrink: 1;
  flex-grow: 1;
`;

export const Main = styled(sc.Base)`
  flex-grow: 1;
`;

export const MainInner = styled(sc.FlexRowBetweenStretch)`
  background-color: rgba(0, 0, 0, 0);
  width: 100%;
  min-height: 100%;
  flex-grow: 1;
`;

export const MainContent = styled(sc.Base)`
  width: 100%;
  max-width: 600px;
  z-index: 1;
  border-right-width: 1px;
  border-left-width: 1px;
  border-style: solid;
  border-color: rgb(239, 243, 244);
  background-color: rgba(255, 255, 255, 1);
`;

export const RightContent = styled(sc.Base)`
  width: 350px;
  margin-right: 10px;
`;
