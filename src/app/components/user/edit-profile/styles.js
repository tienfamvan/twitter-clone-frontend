import styled from "styled-components";
import * as sc from "@/app/styles/base";

export const EditProfile = styled.div``;

export const FormItem = styled(sc.Base)`
  padding: 12px 16px 0;
`;

export const BannerWrapper = styled(sc.FlexColumn)`
  height: 200px;
  max-height: 200px;
  flex-grow: 1;
  border: 2px solid rgba(0, 0, 0, 0);
`;

export const BannerImageWrapper = styled.img`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const BannerImageInputWrapper = styled(sc.FlexRowCenter)`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  opacity: 0.75;
`;

export const BannerImageInputInner = styled(sc.FlexRowCenter)`
  min-height: 40px;
  min-width: 40px;
  border-radius: 9999px;

  &:hover {
    background-color: #c1c1c1;
  }
`;

export const BannerImageInputIconWrapper = styled(sc.FlexRowCenter)`
  z-index: -1;
  position: absolute;

  svg {
    fill: rgb(255, 255, 255);
    height: 22px;
    width: 22px;
  }
`;

export const BannerImageInput = styled.input`
  position: absolute;
  z-index: 20;
  opacity: 0;
  width: 100%;
  height: 100%;
  border: none;
  padding: 20px;
  border-radius: 9999px;
  cursor: pointer;
`;

export const AvatarWrapper = styled(sc.FlexRowCenter)`
  height: 120px;
  width: 120px;
  max-width: 8rem;
  margin-top: -3rem;
  margin-left: 1rem;
  margin-bottom: 12px;
  background-color: rgba(255, 255, 255, 1);
  border: 2px solid rgb(255, 255, 255);
  border-radius: 9999px;
  overflow: hidden;
`;

export const AvatarInner = styled(sc.Base)`
  height: 100%;
  width: 100%;
  border-radius: 50%;
`;

export const AvatarImage = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 50%;
`;

export const AvatarImageInputWrapper = styled(sc.FlexRowCenter)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
`;

export const AvatarImageInputInner = styled(BannerImageInputInner)``;

export const AvatarImageInputIconWrapper = styled(
  BannerImageInputIconWrapper
)``;

export const AvatarImageInput = styled(BannerImageInput)``;
