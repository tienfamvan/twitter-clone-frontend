import styled from "styled-components";
import * as sc from "@/app/styles/base";
import ImageBgLanding from "@/app/assets/images/image-bg-landing.jpg";
import devices from "@/app/styles/devices";

export const LandingWrapper = styled(sc.Base)``;

export const Landing = styled(sc.FlexRowCenter)`
  width: 100%;

  @media ${devices.lg} {
    flex-direction: column-reverse;
  }
`;

export const LandingBg = styled(sc.FlexColumnAlignItemsCenter)`
  flex: 1 1;
  width: 100%;
`;

export const LandingBgImage = styled(sc.FlexRowJustifyContentCenter)`
  width: 400px;
  height: 400px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 400px;
  background-image: url(${ImageBgLanding});
`;

export const LandingForm = styled(sc.Base)`
  flex: 1 1;

  @media ${devices.lg} {
    flex: 2 1;
  }
`;

export const LandingFormInner = styled.div`
  min-width: 45vw;
  max-width: 760px;
  padding: 20px;
`;

export const LandingTitle = styled.div`
  letter-spacing: -1.2px;

  color: ${props => (props.color ? props.color : "#000")};
  line-height: ${props => (props.lineHeight ? props.lineHeight : "36px")};
  font-weight: ${props => (props.fWeight ? props.fWeight : "700")};
  font-size: ${props => (props.fSize ? props.fSize : "31px")};
  margin-top: ${props => (props.mT ? props.mT : "0")};
  margin-bottom: ${props => (props.mB ? props.mB : "42px")};

  @media ${devices.lg} {
    margin-top: 25px;
    margin-bottom: 20px;
  }
`;
