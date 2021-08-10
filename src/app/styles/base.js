import styled, { css, keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const Icon = styled.span`
  color: ${props => (props.color ? props.color : "rgba(29,161,242,1.00)")};
  font-size: ${props => (props.fSize ? props.fSize : "16px")};
`;

export const cssBase = css`
  align-items: stretch;
  border: 0 solid black;
  box-sizing: border-box;
  display: flex;
  flex-basis: auto;
  flex-direction: column;
  flex-shrink: 0;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  min-height: 0px;
  min-width: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  position: relative;
  z-index: 0;
`;

export const Base = styled.div`
  ${cssBase}
`;

export const FlexRow = styled(Base)`
  flex-direction: row;
`;

export const FlexRowJustifyContentStart = styled(FlexRow)`
  justify-content: flex-start;
`;

export const FlexRowJustifyContentEnd = styled(FlexRow)`
  justify-content: flex-end;
`;

export const FlexRowJustifyContentCenter = styled(FlexRow)`
  justify-content: center;
`;

export const FlexRowJustifyContentBetween = styled(FlexRow)`
  justify-content: space-between;
`;

export const FlexRowJustifyContentAround = styled(FlexRow)`
  justify-content: space-around;
`;

export const FlexRowJustifyContentEvenly = styled(FlexRow)`
  justify-content: space-evenly;
`;

export const FlexRowAlignItemsStart = styled(FlexRow)`
  align-items: flex-start;
`;

export const FlexRowAlignItemsEnd = styled(FlexRow)`
  align-items: flex-end;
`;

export const FlexRowAlignItemsCenter = styled(FlexRow)`
  align-items: center;
`;

export const FlexRowAlignItemsStretch = styled(FlexRow)`
  align-items: stretch;
`;

export const FlexColumn = styled(Base)`
  flex-direction: column;
`;

export const FlexColumnJustifyContentStart = styled(FlexColumn)`
  justify-content: flex-start;
`;

export const FlexColumnJustifyContentEnd = styled(FlexColumn)`
  justify-content: flex-end;
`;

export const FlexColumnJustifyContentCenter = styled(FlexColumn)`
  justify-content: center;
`;

export const FlexColumnJustifyContentBetween = styled(FlexColumn)`
  justify-content: space-between;
`;

export const FlexColumnJustifyContentAround = styled(FlexColumn)`
  justify-content: space-around;
`;

export const FlexColumnJustifyContentEvenly = styled(FlexColumn)`
  justify-content: space-evenly;
`;

export const FlexColumnAlignItemsStart = styled(FlexColumn)`
  align-items: flex-start;
`;

export const FlexColumnAlignItemsEnd = styled(FlexColumn)`
  align-items: flex-end;
`;

export const FlexColumnAlignItemsCenter = styled(FlexColumn)`
  align-items: center;
`;

export const FlexColumnAlignItemsStretch = styled(FlexColumn)`
  align-items: stretch;
`;

export const FlexRowCenter = styled(FlexRow)`
  justify-content: center;
  align-items: center;
`;

export const FlexColumnCenter = styled(FlexColumn)`
  justify-content: center;
  align-items: center;
`;

export const FlexRowBetweenStretch = styled(FlexRow)`
  justify-content: space-between;
  align-items: stretch;
`;

export const FlexRowBetweenCenter = styled(FlexRow)`
  justify-content: space-between;
  align-items: center;
`;

export const FlexColumnCenterStart = styled(FlexColumn)`
  justify-content: center;
  align-items: flex-start;
`;

export const FlexColumnCenterEnd = styled(FlexColumn)`
  justify-content: center;
  align-items: flex-end;
`;

export const FlexRowBetweenEnd = styled(FlexRow)`
  justify-content: space-between;
  align-items: flex-end;
`;

export const FlexRowStartEnd = styled(FlexRow)`
  justify-content: flex-start;
  align-items: flex-end;
`;

export const Container = styled.div`
  max-width: 980px;
  margin-left: auto;
  margin-right: auto;
`;

export const FormWrapper = styled.div`
  padding-top: 30px;
  padding-bottom: 92px;
`;

export const FormHeader = styled(Container)`
  font-size: 40px;
  line-height: 1.1;
  font-weight: 600;
  letter-spacing: 0;
  padding-bottom: 36px;
  padding-top: 34px;
`;

export const FormMain = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  margin-top: 0.8em;
`;

export const FormFields = styled.form`
  flex: 1;
  max-width: 408px;
  margin-right: 40px;
  margin-bottom: 1px;
  margin-top: 18px;
`;

export const FormSubmit = styled.div`
  padding-bottom: 10px;
  margin-top: 23px;
`;

export const loadingCircle = keyframes`
0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

export const FormButton = styled.button`
  position: relative;
  cursor: pointer;
  text-align: center;
  background: #0071e3;
  color: #fff;
  font-size: 17px;
  line-height: 1.17648;
  font-weight: 400;
  letter-spacing: -0.022em;
  min-width: 28px;
  width: 100%;
  padding: 18px 31px;
  border-radius: 12px;
  display: inline-block;
  border: 0;
  font-family: "San Francisco Pro";

  :hover {
    background: #0077ed;
  }

  :before {
    position: absolute;
    top: -1px;
    right: -1px;
    bottom: -1px;
    left: -1px;
    z-index: 1;
    border-radius: 12px;
    display: ${props => (props.isLoading ? "block" : "none")};
    background: #fff;
    opacity: 0.35;
    transition: opacity 0.2s;
    content: "";
  }

  svg {
    animation: ${loadingCircle} 1s infinite linear;
  }
`;

export const FormText = styled.div`
  font-size: 17px;
  line-height: 1.47059;
  font-weight: 400;
  letter-spacing: -0.022em;
  margin-top: 7px;
`;

export const FormTextLink = styled(Link)`
  background: transparent;
  border: 0;
  color: #06c;
  font-size: inherit;
  line-height: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  padding: 0;
  vertical-align: inherit;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;

export const CMIconWrapper = styled(FlexColumnCenterStart)`
  align-self: stretch;
  min-height: 32px;
  min-width: 56px;
`;

export const CMIcon = styled(Base)`
  min-height: 40px;
  min-width: 40px;
  transition-duration: 0.2s;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0);
  background-color: rgba(0, 0, 0, 0);
  border-radius: 9999px;

  &:hover {
    background-color: rgba(29, 161, 242, 0.1);
  }
`;

export const CMIconInner = styled(FlexRowCenter)`
  flex-grow: 1;
  text-align: center;

  svg {
    height: 22px;
    width: 22px;
    fill: rgba(29, 161, 242, 1);
  }
`;

export const CMContent = styled(FlexColumnJustifyContentCenter)`
  flex-grow: 1;
  flex-shrink: 1;
  height: 100%;
`;

export const CMContentTitle = styled.h2`
  font-size: 20px;
  font-weight: 900;
`;

export const CMButton = styled(CMIconWrapper)`
  align-items: flex-end;
`;

export const Button = styled.button`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  transition-duration: 0.2s;
  font-family: "San Francisco Pro";

  border-style: ${props => (props.borderstyle ? props.borderstyle : "solid")};
  border-width: ${props => (props.borderwidth ? props.borderwidth : "1px")};
  border-color: ${props =>
    props.bordercolor ? props.bordercolor : "rgb(29, 161, 242)"};
  border-radius: ${props => (props.rounded ? props.rounded : "99999px")};

  padding-top: ${props => props.pt};
  padding-right: ${props => props.pr};
  padding-left: ${props => props.pl};
  padding-bottom: ${props => props.pb};

  max-width: 380px;

  background-color: ${props => (props.bg ? props.bg : "#fff")};

  margin-top: ${props => props.mt};
  margin-right: ${props => props.mr};
  margin-left: ${props => props.ml};
  margin-bottom: ${props => props.mb};

  min-height: ${props => (props.minheight ? props.minheight : "48px")};
  min-width: ${props => (props.minwidth ? props.minwidth : "48px")};

  &:hover {
    background-color: ${props =>
      props.bg
        ? props.hovercolor
          ? props.hovercolor
          : "rgba(29, 161, 242, 0.7)"
        : props.hovercolor
        ? props.hovercolor
        : "rgba(29, 161, 242, 0.1)"} !important;
    color: ${props =>
      props.hovercolor ? "#fff" : "rgba(29, 161, 242, 1)"} !important;
    border-color: ${props =>
      props.bg
        ? props.hovercolor
          ? props.hovercolor
          : "rgba(29, 161, 242, 0.7)"
        : props.hovercolor
        ? props.hovercolor
        : "rgb(29, 161, 242)"};
  }

  line-height: 20px;
  overflow-wrap: break-word;

  font-weight: ${props => (props.fw ? props.fw : "600")};
  font-size: ${props => (props.fz ? props.fz : "15px")};
  color: ${props => (props.color ? props.color : "black")} !important;

  svg {
    fill: ${props => (props.isLoading ? "#fff" : "rgba(29, 161, 242, 1)")};
    height: 22px;
    width: 22px;
    animation: ${props => props.isLoading && loadingCircle} 1s infinite linear}
  }

  :before {
    position: absolute;
    top: -1px;
    right: -1px;
    bottom: -1px;
    left: -1px;
    z-index: 1;
    border-radius: 12px;
    display: ${props => (props.isLoading ? "block" : "none")};
    background: #fff;
    opacity: 0.35;
    transition: opacity 0.2s;
    content: "";
  }
`;

export const CMHead = styled(FlexRowCenter)`
  height: 53px;
  padding-left: 16px;
  padding-right: 16px;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  border-bottom: 1px solid rgb(207, 217, 222);
`;

export const HeadWrapper = styled(Base)`
  position: sticky;
  top: -0.5px;
  height: 53px;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 1);
  border-bottom: 1px solid rgb(239, 243, 244);
`;

export const NumTweets = styled.div`
  color: rgb(83, 100, 113);
  font-size: 13px;
`;

export const Name = styled.h2`
  font-size: 20px;
  font-weight: 900;
`;
