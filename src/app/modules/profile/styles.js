import styled from "styled-components";
import { Link } from "react-router-dom";
import * as sc from "@/app/styles/base";

export const ProfileWrapper = styled(sc.Base)``;

export const ProfileContent = styled(sc.FlexColumnJustifyContentCenter)`
  flex-grow: 1;
  flex-shrink: 1;
  height: 100%;
`;

export const ProfileBody = styled(sc.Base)`
  max-width: 600px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

export const ProfileDetailsWrapper = styled(sc.Base)``;

export const ProfileBannerWrapper = styled(sc.Base)`
  overflow: hidden;
  display: block;
`;

export const ProfileBannerPadding = styled.div`
  width: 100%;
  display: block;
  padding-bottom: 33.3333%;
`;

export const ProfileBanner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  display: block;
`;

export const ProfileBannerImage = styled.img`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
`;

export const ProfileDetails = styled(sc.Base)`
  margin-bottom: 16px;
  padding: 12px 16px 0;
`;

export const ProfileOptions = styled(sc.FlexRowBetweenEnd)`
  flex-wrap: wrap;
  margin-bottom: 10px;
`;

export const ProfileImageWrapper = styled(sc.Base)`
  border-radius: 9999px;
  min-width: 48px;
  height: 141.5px;
  width: 141.5px;
  margin: -14% 0 -4px -4px;
  background: #fff;
  padding: 4px;
`;

export const ProfileImage = styled.img`
  border-radius: 9999px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: #fff;
`;

export const ProfileButtonWrapper = styled(sc.FlexRowStartEnd)`
  align-items: center;
`;

export const ProfileUsername = styled(sc.FlexRow)`
  margin-top: 2px;
  color: rgb(83, 100, 113);
  font-size: 15px;
`;

export const ProfileFollowsYou = styled(sc.FlexRowAlignItemsCenter)`
  margin-left: 4px;
  padding-left: 4px;
  padding-right: 4px;
  border-radius: 4px;
  color: rgb(83, 100, 113);
  font-size: 13px;
  background-color: rgb(239, 243, 244);
`;

export const ProfileBio = styled(sc.FlexRow)`
  margin-top: 12px;
`;

export const ProfileInfo = styled(ProfileBio)`
  margin-bottom: 12px;
`;

export const ProfileLocation = styled(sc.FlexRowAlignItemsCenter)`
  margin-right: 12px;

  svg {
    fill: rgb(83, 100, 113);
    margin-right: 4px;
    height: 1.25em;
  }
`;

export const ProfileLink = styled(ProfileLocation)`
  color: rgb(29, 161, 242) !important;
`;

export const ProfileDate = styled(ProfileLocation)``;

export const ProfileSocial = styled(sc.FlexRow)`
  flex-wrap: wrap;
  flex: 1;
`;

export const ProfileNumFollowLink = styled(Link)`
  font-size: 15px;
  cursor: pointer;
  margin-right: 20px;
  color: rgb(83, 100, 113);

  &:hover {
    text-decoration: underline;
  }
`;

export const ProfileFollowNum = styled.span`
  font-weight: 700;
  color: rgb(15, 20, 25);
`;

export const ProfileNotFound = styled(sc.Base)`
  border-top: 1px solid rgb(239, 243, 244);
  padding: 40px 20px;
  text-align: center;
`;

export const ProfileNotFoundTextTitle = styled(sc.Base)`
  margin-bottom: 12px;
  line-height: 24px;
  font-size: 20px;
  color: rgb(15, 20, 25);
  font-weight: 700;
`;

export const ProfileNotFoundText = styled(sc.Base)`
  color: rgb(83, 100, 113);
  font-size: 15px;
  line-height: 20px;
`;
