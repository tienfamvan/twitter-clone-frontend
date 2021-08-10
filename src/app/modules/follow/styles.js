import styled from "styled-components";
import * as sc from "@/app/styles/base";

export const FollowWrapper = styled(sc.Base)``;

export const FollowTabHead = styled(sc.FlexRow)`
  border-bottom: 2px solid rgb(239, 243, 244);
`;

export const FollowTabName = styled(sc.Base)`
  flex-grow: 1;
`;

export const FollowTabLink = styled(sc.FlexColumnCenter)`
  height: 53px;
  min-width: 56px;
  padding-right: 16px;
  padding-left: 16px;
  cursor: pointer;
`;

export const FollowTabTitle = styled(sc.Base)`
  padding-top: 16px;
  padding-bottom: 16px;
  font-weight: 700;
  font-size: 15px;
  color: rgb(83, 100, 113);

  ${({ active }) =>
    active &&
    `
    color: rgb(29, 161, 242);
    border-bottom: 4px solid rgb(29, 161, 242);
    opacity: 1;
  `}
`;

export const FollowTabContent = styled(sc.Base)``;

export const FollowUserItem = styled(sc.FlexRow)`
  padding: 12px 16px;
  border-bottom: 1px solid rgb(239, 243, 244);
  background-color: #fff;
  cursor: pointer;

  &:hover {
    background-color: rgba(245, 245, 245, 0.3);
  }
`;

export const FollowUserImageWrapper = styled(sc.FlexColumnJustifyContentStart)`
  flex-grow: 0;
  flex-basis: 48px;
  margin-right: 12px;
  border-radius: 99999px;
`;

export const FollowUserImage = styled.img`
  border-radius: 99999px;
`;

export const FollowUserContent = styled(sc.Base)`
  flex-basis: 0px;
  flex-grow: 1;
`;

export const FollowUserContentTop = styled(sc.FlexRowBetweenCenter)``;

export const FollowUserContentInfo = styled(sc.Base)`
  font-size: 15px;
`;

export const FollowUserName = styled(sc.FlexRowAlignItemsCenter)`
  font-weight: 700;
  color: rgb(15, 20, 25);
`;

export const FollowUserUserName = styled.span`
  font-weight: 400;
  color: rgb(83, 100, 113);
`;

export const FollowUserContentButton = styled(sc.FlexRowAlignItemsCenter)``;

export const FollowUserContentBottom = styled(sc.FlexRowAlignItemsCenter)`
  padding-top: 4px;
  font-size: 15px;
  color: rgb(15, 20, 25);
`;
