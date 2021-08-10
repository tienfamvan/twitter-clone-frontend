import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import { followUser } from "@/app/store/auth/auth.action";
import { getUser } from "@/app/store/auth/auth.action";

import { ReactComponent as IconDate } from "@/app/assets/svgs/icon-date.svg";
import { ReactComponent as IconLink } from "@/app/assets/svgs/icon-link.svg";
import { ReactComponent as IconNewMes } from "@/app/assets/svgs/icon-new-mes.svg";
import { ReactComponent as IconLocation } from "@/app/assets/svgs/icon-location.svg";
import { ReactComponent as IconArrowBack } from "@/app/assets/svgs/icon-arrow-back.svg";

import ImageDefaultBanner from "@/app/assets/images/image-default-banner.png";
import ImageDefaultAvatar from "@/app/assets/images/image-default-avatar.png";

import Layout from "@/app/components/layout";
import Loader from "@/app/components/loader";

import * as sc from "@/app/styles/base";
import * as s from "./styles";

import EditProfile from "@/app/components/user/edit-profile";

const ProfilePage = props => {
  const { currentUser, user } = useSelector(state => state.auth);

  const [isLoading, setLoading] = useState(true);
  const [isFollowing, setFollowing] = useState(true);

  const dispatch = useDispatch();

  const usernameParam = props.match.params.username;

  useEffect(() => {
    setLoading(true);

    dispatch(getUser(usernameParam)).then(res => {
      setLoading(false);
    });
  }, [dispatch, usernameParam]);

  const handleFollowUser = id => {
    dispatch(followUser(id));
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Layout>
      <s.ProfileWrapper>
        <sc.HeadWrapper>
          <sc.CMHead>
            <sc.CMIconWrapper>
              <sc.CMIcon onClick={() => window.history.back()}>
                <sc.CMIconInner>
                  <IconArrowBack />
                </sc.CMIconInner>
              </sc.CMIcon>
            </sc.CMIconWrapper>
            <sc.CMContent>
              {user ? (
                <>
                  <sc.CMContentTitle>
                    {currentUser && currentUser.username === usernameParam
                      ? currentUser.name
                      : user.name}
                  </sc.CMContentTitle>
                  <sc.NumTweets>
                    {currentUser && currentUser.username === usernameParam
                      ? currentUser.tweets.length
                      : user.tweets.length}{" "}
                    Tweets
                  </sc.NumTweets>
                </>
              ) : (
                <sc.Name>Profile</sc.Name>
              )}
            </sc.CMContent>
          </sc.CMHead>
        </sc.HeadWrapper>
        <Loader isLoading={isLoading}>
          <s.ProfileBody>
            <s.ProfileDetailsWrapper>
              <s.ProfileBannerWrapper>
                <s.ProfileBannerPadding></s.ProfileBannerPadding>
                <s.ProfileBanner>
                  <s.ProfileBannerImage
                    src={
                      user
                        ? currentUser && currentUser.username === usernameParam
                          ? currentUser.banner
                          : user.banner
                        : ImageDefaultBanner
                    }
                  />
                </s.ProfileBanner>
              </s.ProfileBannerWrapper>
              <s.ProfileDetails>
                <s.ProfileOptions>
                  <s.ProfileImageWrapper>
                    <s.ProfileImage
                      src={
                        user
                          ? currentUser &&
                            currentUser.username === usernameParam
                            ? currentUser.profileImage
                            : user.profileImage
                          : ImageDefaultAvatar
                      }
                    />
                  </s.ProfileImageWrapper>
                  <s.ProfileButtonWrapper>
                    {user &&
                      currentUser &&
                      currentUser.following.includes(user._id) && (
                        <sc.Button minwidth="40px" minheight="40px" mr="8px">
                          <IconNewMes />
                        </sc.Button>
                      )}

                    {currentUser && currentUser.username === usernameParam && (
                      <>
                        <sc.Button
                          onClick={showModal}
                          minwidth="40px"
                          minheight="40px"
                          color="rgba(29, 161, 242, 1)"
                          pr="1em"
                          pl="1em"
                        >
                          Edit profile
                        </sc.Button>
                        <EditProfile
                          title="Edit profile"
                          visible={isModalVisible}
                          onCancel={handleCancel}
                          currentUser={currentUser}
                        />
                      </>
                    )}

                    {user && (
                      <>
                        {currentUser ? (
                          currentUser.username !== usernameParam && (
                            <>
                              {currentUser.following.includes(user._id) ? (
                                <sc.Button
                                  onClick={() => handleFollowUser(user._id)}
                                  minwidth="40px"
                                  minheight="40px"
                                  pr="1em"
                                  pl="1em"
                                  bg="rgba(29, 161, 242, 1)"
                                  color="#fff"
                                  onMouseOver={() => setFollowing(false)}
                                  onMouseOut={() => setFollowing(true)}
                                  hovercolor={
                                    !isFollowing
                                      ? "#ca2055"
                                      : "rgb(45, 131, 222, 1)"
                                  }
                                >
                                  {isFollowing ? "Following" : "Unfollow"}
                                </sc.Button>
                              ) : (
                                <sc.Button
                                  onClick={() => handleFollowUser(user._id)}
                                  minwidth="40px"
                                  minheight="40px"
                                  pr="1em"
                                  pl="1em"
                                  color="rgba(29, 161, 242, 1)"
                                >
                                  Follow
                                </sc.Button>
                              )}
                            </>
                          )
                        ) : (
                          <sc.Button
                            minwidth="40px"
                            minheight="40px"
                            pr="1em"
                            pl="1em"
                            color="rgba(29, 161, 242, 1)"
                            as={Link}
                            to="/login"
                          >
                            Follow
                          </sc.Button>
                        )}
                      </>
                    )}
                  </s.ProfileButtonWrapper>
                </s.ProfileOptions>
                <s.ProfileContent>
                  {user && (
                    <sc.Name>
                      {currentUser && currentUser.username === usernameParam
                        ? currentUser.name
                        : user.name}
                    </sc.Name>
                  )}
                  <s.ProfileUsername>
                    {`@${user ? user.username : usernameParam}`}
                    {user &&
                      currentUser &&
                      user.following.includes(currentUser._id) && (
                        <s.ProfileFollowsYou>Follows you</s.ProfileFollowsYou>
                      )}
                  </s.ProfileUsername>
                  {user && (
                    <>
                      {currentUser && currentUser.username === usernameParam
                        ? currentUser.bio !== "undefined" &&
                          currentUser.bio.length > 0 && (
                            <s.ProfileBio>{currentUser.bio}</s.ProfileBio>
                          )
                        : user.bio !== "undefined" &&
                          user.bio.length > 0 && (
                            <s.ProfileBio>{user.bio}</s.ProfileBio>
                          )}
                    </>
                  )}
                  <s.ProfileInfo>
                    {user && (
                      <>
                        {currentUser && currentUser.username === usernameParam
                          ? currentUser.location !== "undefined" &&
                            currentUser.location.length > 0 && (
                              <s.ProfileLocation>
                                <IconLocation /> {currentUser.location}
                              </s.ProfileLocation>
                            )
                          : user.location !== "undefined" &&
                            user.location.length > 0 && (
                              <s.ProfileLocation>
                                <IconLocation /> {user.location}
                              </s.ProfileLocation>
                            )}

                        {currentUser && currentUser.username === usernameParam
                          ? currentUser.website !== "undefined" &&
                            currentUser.website.length > 0 && (
                              <s.ProfileLink
                                as="a"
                                rel="noopener noreferrer"
                                href={currentUser.website}
                                target="_blank"
                              >
                                <IconLink /> {currentUser.website}
                              </s.ProfileLink>
                            )
                          : user.website !== "undefined" &&
                            user.website.length > 0 && (
                              <s.ProfileLink
                                as="a"
                                rel="noopener noreferrer"
                                href={user.website}
                                target="_blank"
                              >
                                <IconLink /> {user.website}
                              </s.ProfileLink>
                            )}
                      </>
                    )}
                    {user && (
                      <s.ProfileDate>
                        <IconDate /> Joined{" "}
                        {moment(user.createdAt).format("MMMM YYYY")}
                      </s.ProfileDate>
                    )}
                  </s.ProfileInfo>
                </s.ProfileContent>
                {user && (
                  <s.ProfileSocial>
                    <s.ProfileNumFollowLink
                      to={`/${
                        currentUser && currentUser.username === usernameParam
                          ? currentUser.username
                          : user.username
                      }/following`}
                    >
                      <s.ProfileFollowNum>
                        {currentUser && currentUser.username === usernameParam
                          ? currentUser.following.length
                          : user.following.length}
                      </s.ProfileFollowNum>{" "}
                      Following
                    </s.ProfileNumFollowLink>
                    {!currentUser && (
                      <s.ProfileNumFollowLink to="/login">
                        <s.ProfileFollowNum>
                          {user.following.length}
                        </s.ProfileFollowNum>{" "}
                        Following
                      </s.ProfileNumFollowLink>
                    )}
                    <s.ProfileNumFollowLink
                      to={`/${
                        currentUser && currentUser.username === usernameParam
                          ? currentUser.username
                          : user.username
                      }/followers`}
                    >
                      <s.ProfileFollowNum>
                        {currentUser && currentUser.username === usernameParam
                          ? currentUser.followers.length
                          : user.followers.length}
                      </s.ProfileFollowNum>{" "}
                      {currentUser && currentUser.username === usernameParam
                        ? currentUser.followers.length > 1 ||
                          currentUser.followers.length === 0
                          ? "Followers"
                          : "Follower"
                        : user.followers.length > 1 ||
                          user.followers.length === 0
                        ? "Followers"
                        : "Follower"}
                    </s.ProfileNumFollowLink>
                    {!currentUser && (
                      <s.ProfileNumFollowLink to="/login">
                        <s.ProfileFollowNum>
                          {user.followers.length}
                        </s.ProfileFollowNum>{" "}
                        {user.followers.length > 1 ||
                        user.followers.length === 0
                          ? "Followers"
                          : "Follower"}
                      </s.ProfileNumFollowLink>
                    )}
                  </s.ProfileSocial>
                )}
              </s.ProfileDetails>
            </s.ProfileDetailsWrapper>
            {!user && (
              <s.ProfileNotFound>
                <s.ProfileNotFoundTextTitle>
                  This account doesn’t exist
                </s.ProfileNotFoundTextTitle>
                <s.ProfileNotFoundText>
                  Try searching for another.
                </s.ProfileNotFoundText>
              </s.ProfileNotFound>
            )}
          </s.ProfileBody>
        </Loader>
      </s.ProfileWrapper>
    </Layout>
  );
};

export default ProfilePage;
