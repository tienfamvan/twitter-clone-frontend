import styled from "styled-components";
import * as sc from "@/app/styles/base";
import devices from "@/app/styles/devices";

export const HeaderWrapper = styled(sc.FlexColumnAlignItemsEnd)`
  flex-grow: 1;
`;

export const NavWrapper = styled(sc.Base)`
  width: 275px;

  @media ${devices.lg} {
    width: 88px;
  }
`;

export const NavFixed = styled(sc.Base)`
  position: fixed;
  top: 0;
  height: 100%;
`;

export const NavContent = styled(sc.FlexColumnJustifyContentBetween)`
  overflow-y: auto;
  height: 100%;
  width: 275px;
  padding-right: 12px;
  padding-left: 12px;

  @media ${devices.lg} {
    width: 88px;
  }
`;

export const Navbar = styled(sc.FlexColumnAlignItemsStart)`
  @media ${devices.lg} {
    align-items: center;
  }
`;

export const Logo = styled(sc.Base)`
  max-width: 100%;
  padding-bottom: 2px;
  padding-top: 2px;
`;

export const LogoHeading = styled(sc.FlexColumnCenter)`
  flex-grow: 1;
  min-width: 32px;
  cursor: pointer;
  align-self: stretch;
`;

export const LogoLink = styled(sc.Base)`
  min-height: 48px;
  min-width: 48px;
  border-width: 1px;
  border-radius: 9999px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0);
  transition-duration: 0.2s;
  background-color: rgba(0, 0, 0, 0);
`;

export const LogoInner = styled(sc.FlexRowCenter)`
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  flex-grow: 1;
  overflow-wrap: break-word;

  svg {
    height: 2rem;
    width: 22px;
    flex-grow: 1;
    fill: rgba(29, 161, 242, 1);
  }
`;

export const NavList = styled(sc.Base)`
  margin-top: 2px;
  margin-bottom: 4px;
  width: 100%;

  @media ${devices.lg} {
    align-items: center;
  }
`;

export const Nav = styled(Navbar)``;

export const NavLink = styled(sc.Base)`
  align-items: flex-start;
  flex: 1;
  width: 100%;
  cursor: pointer;
  padding-top: 2px;
  padding-bottom: 2px;

  &:hover > div {
    background-color: rgba(29, 161, 242, 0.1);
    color: rgba(29, 161, 242, 1);

    svg {
      fill: rgba(29, 161, 242, 1);
    }
  }
`;

export const NavItem = styled(sc.FlexRowCenter)`
  transition-duration: 0.2s;
  max-width: 100%;
  padding: 12px;
  border-radius: 9999px;

  svg {
    fill: ${props => (props.isActive ? "rgba(29, 161, 242, 1)" : "#000")};
  }

  color: ${props => (props.isActive ? "rgba(29, 161, 242, 1)" : "#000")};
`;

export const NavIcon = styled(sc.Base)`
  svg {
    height: 1.75rem;
  }
`;

export const NavText = styled(NavLink)`
  margin-right: 16px;
  margin-left: 20px;
  line-height: 24px;
  font-size: 20px;
  font-weight: 700;
  overflow-wrap: break-word;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media ${devices.lg} {
    display: none;
  }
`;

export const PopoverWrapper = styled(sc.Base)``;

export const Popover = styled(sc.Base)`
  display: ${props => (props.visible ? "block" : "none")};
  position: fixed;
  bottom: 85px;
  left: 61px;
  border-radius: 16px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: rgb(101 119 134 / 20%) 0px 0px 15px,
    rgb(101 119 134 / 15%) 0px 0px 3px 1px;
`;

export const PopoverIcon = styled.div`
  position: absolute;
  height: 1.25em;
  left: calc(113.5px);
  bottom: -11px;
  width: 24px;
  font-size: 13px;
  color: rgb(255, 255, 255);
`;

export const PopoverText = styled(sc.Base)`
  width: 260px;
  min-width: 260px;
  min-height: 30px;
  max-width: 360px;
  max-height: 480px;
  overflow: auto;
`;

export const PopoverTextInner = styled(sc.Base)`
  padding-top: 12px;
  padding-bottom: 12px;
`;

export const PopoverButton = styled(sc.FlexRow)`
  padding: 16px;
  font-size: 15px;
  color: rgb(15, 20, 25);
  cursor: pointer;

  :hover {
    background: #f5f5f5;
  }
`;

export const User = styled(NavLink)`
  margin-top: 12px;
  margin-bottom: 12px;
`;

export const UserInner = styled(sc.FlexRowAlignItemsCenter)`
  padding: 12px;
  border-radius: 9999px;
  width: 100%;
`;

export const UserProfileImageWrapper = styled(sc.Base)``;

export const UserProfileImageInner = styled(sc.Base)`
  height: 40px;
  width: 40px;
  border-radius: 9999px;
`;

export const UserProfileImage = styled(UserProfileImageInner)`
  display: block;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
`;

export const UserText = styled(sc.Base)`
  flex-shrink: 1;
  max-width: 100%;

  @media ${devices.lg} {
    display: none;
  }
`;

export const UserTextInner = styled(sc.Base)`
  flex-shrink: 1;
  flex-grow: 1;
  margin-left: 12px;
  margin-right: 12px;
`;

export const UserTextName = styled(sc.FlexRowAlignItemsCenter)`
  max-width: 100%;
  font-size: 15px;
  font-weight: 700;
`;

export const UserTextUsername = styled(sc.FlexRow)`
  flex-shrink: 1;
  color: rgb(83, 100, 113);
  font-size: 15px;
`;

export const UserMore = styled(sc.FlexColumnAlignItemsEnd)`
  flex-grow: 1;

  @media ${devices.lg} {
    display: none;
  }

  svg {
    font-size: 20px;
  }
`;
