import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/app/store/auth/auth.action";

import { ReactComponent as IconTwitter } from "@/app/assets/svgs/icon-twitter.svg";
import { ReactComponent as IconHome } from "@/app/assets/svgs/icon-home.svg";
import { ReactComponent as IconHomeFill } from "@/app/assets/svgs/icon-home-fill.svg";
import { ReactComponent as IconHash } from "@/app/assets/svgs/icon-hash.svg";
import { ReactComponent as IconHashFill } from "@/app/assets/svgs/icon-hash-fill.svg";
import { ReactComponent as IconBell } from "@/app/assets/svgs/icon-bell.svg";
import { ReactComponent as IconBellFill } from "@/app/assets/svgs/icon-bell-fill.svg";
import { ReactComponent as IconInbox } from "@/app/assets/svgs/icon-inbox.svg";
import { ReactComponent as IconInboxFill } from "@/app/assets/svgs/icon-inbox-fill.svg";
import { ReactComponent as IconBookmark } from "@/app/assets/svgs/icon-bookmark.svg";
import { ReactComponent as IconBookmarkFill } from "@/app/assets/svgs/icon-bookmark-fill.svg";
import { ReactComponent as IconList } from "@/app/assets/svgs/icon-list.svg";
import { ReactComponent as IconListFill } from "@/app/assets/svgs/icon-list-fill.svg";
import { ReactComponent as IconUser } from "@/app/assets/svgs/icon-user.svg";
import { ReactComponent as IconUserFill } from "@/app/assets/svgs/icon-user-fill.svg";
import { ReactComponent as IconCaretDown } from "@/app/assets/svgs/icon-caret-down.svg";
import { ReactComponent as IconEllipsis } from "@/app/assets/svgs/icon-ellipsis.svg";

import * as s from "./styles";

const navList = [
  {
    id: 1,
    name: "Home",
    path: "/home",
    icon: <IconHome />,
    iconFill: <IconHomeFill />,
  },
  {
    id: 2,
    name: "Explore",
    path: "/explore",
    icon: <IconHash />,
    iconFill: <IconHashFill />,
  },
  {
    id: 3,
    name: "Notifications",
    path: "/notifications",
    icon: <IconBell />,
    iconFill: <IconBellFill />,
  },
  {
    id: 4,
    name: "Messages",
    path: "/messages",
    icon: <IconInbox />,
    iconFill: <IconInboxFill />,
  },
  {
    id: 5,
    name: "Bookmarks",
    path: "/bookmarks",
    icon: <IconBookmark />,
    iconFill: <IconBookmarkFill />,
  },
  {
    id: 6,
    name: "Lists",
    path: "/lists",
    icon: <IconList />,
    iconFill: <IconListFill />,
  },
  {
    id: 7,
    name: "Profile",
    path: "/",
    icon: <IconUser />,
    iconFill: <IconUserFill />,
  },
];

const Header = ({ history }) => {
  const { currentUser } = useSelector(state => state.auth);
  const pathname = history.location.pathname.slice(0, 5);
  const usernameParam = history.location.pathname.slice(1);

  const dispatch = useDispatch();

  const [isOpenPopover, setOpenPopover] = useState(false);

  const showPopover = () => {
    setOpenPopover(!isOpenPopover);
  };

  const logoutUser = () => {
    dispatch(logout());
    history.push("/");
  };

  return (
    <s.HeaderWrapper>
      <s.NavWrapper>
        <s.NavFixed>
          <s.NavContent>
            <s.Navbar>
              <s.Logo>
                <s.LogoHeading>
                  <s.LogoLink as={Link} to="/home">
                    <s.LogoInner>
                      <IconTwitter />
                    </s.LogoInner>
                  </s.LogoLink>
                </s.LogoHeading>
              </s.Logo>
              <s.NavList>
                <s.Nav as="nav">
                  {currentUser ? (
                    navList.map(item => (
                      <s.NavLink
                        as={Link}
                        key={item.id}
                        to={
                          item.name === "Profile"
                            ? `/${currentUser?.username}`
                            : item.path
                        }
                      >
                        <s.NavItem
                          isActive={
                            item.name === "Profile" &&
                            (usernameParam === currentUser?.username ||
                              usernameParam.indexOf(
                                currentUser?.username + "/following"
                              ) !== -1 ||
                              usernameParam.indexOf(
                                currentUser?.username + "/followers"
                              ) !== -1)
                              ? true
                              : pathname === item.path.slice(0, 5)
                              ? true
                              : false
                          }
                        >
                          <s.NavIcon>
                            {item.name === "Profile" &&
                            (usernameParam === currentUser?.username ||
                              usernameParam.indexOf(
                                currentUser?.username + "/following"
                              ) !== -1 ||
                              usernameParam.indexOf(
                                currentUser?.username + "/followers"
                              ) !== -1)
                              ? item.iconFill
                              : pathname === item.path.slice(0, 5)
                              ? item.iconFill
                              : item.icon}
                          </s.NavIcon>
                          <s.NavText>{item.name}</s.NavText>
                        </s.NavItem>
                      </s.NavLink>
                    ))
                  ) : (
                    <s.NavLink as={Link} to="/explore">
                      <s.NavItem
                        isActive={
                          pathname === "explore".slice(0, 5) ? true : false
                        }
                      >
                        <s.NavIcon>
                          <IconHash />
                        </s.NavIcon>
                        <s.NavText>Explore</s.NavText>
                      </s.NavItem>
                    </s.NavLink>
                  )}
                </s.Nav>
              </s.NavList>
            </s.Navbar>
            {currentUser && (
              <s.PopoverWrapper>
                <s.Popover visible={isOpenPopover}>
                  <s.PopoverIcon>
                    <IconCaretDown />
                  </s.PopoverIcon>
                  <s.PopoverText>
                    <s.PopoverTextInner>
                      <s.PopoverButton onClick={logoutUser}>
                        Log out {`@${currentUser.username}`}
                      </s.PopoverButton>
                    </s.PopoverTextInner>
                  </s.PopoverText>
                </s.Popover>
                <s.User onClick={showPopover}>
                  <s.UserInner>
                    <s.UserProfileImageWrapper>
                      <s.UserProfileImageInner>
                        <s.UserProfileImage
                          as="img"
                          src={currentUser.profileImage}
                        />
                      </s.UserProfileImageInner>
                    </s.UserProfileImageWrapper>
                    <s.UserText>
                      <s.UserTextInner>
                        <s.UserTextName>{currentUser.name}</s.UserTextName>
                        <s.UserTextUsername>
                          {`@${currentUser.username}`}
                        </s.UserTextUsername>
                      </s.UserTextInner>
                    </s.UserText>
                    <s.UserMore>
                      <IconEllipsis />
                    </s.UserMore>
                  </s.UserInner>
                </s.User>
              </s.PopoverWrapper>
            )}
          </s.NavContent>
        </s.NavFixed>
      </s.NavWrapper>
    </s.HeaderWrapper>
  );
};

export default withRouter(Header);
