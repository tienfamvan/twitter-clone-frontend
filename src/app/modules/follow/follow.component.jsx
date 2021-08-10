import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getFollowers,
  getUser,
  followUser,
} from "@/app/store/auth/auth.action";
import { ReactComponent as IconArrowBack } from "@/app/assets/svgs/icon-arrow-back.svg";
import Layout from "@/app/components/layout";
import Loader from "@/app/components/loader";
import FollowButton from "@/app/components/follow/follow-button";
import * as sc from "@/app/styles/base";
import * as s from "./styles";

const FollowPage = props => {
  const { currentUser, followingUser, followersUser } = useSelector(
    state => state.auth
  );

  const [user, setUser] = useState();
  const pathname = props.location.pathname;

  const [active, setActive] = useState(pathname);

  const usernameParam = props.match.params.username;

  const pathFollowers =
    "/" +
    (currentUser && currentUser?.username === usernameParam
      ? currentUser?.username
      : user?.username) +
    "/followers";

  const pathFollowing =
    "/" +
    (currentUser && currentUser?.username === usernameParam
      ? currentUser?.username
      : user?.username) +
    "/following";

  const [isLoading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);

    dispatch(getUser(usernameParam)).then(res => {
      setUser(res);
    });

    dispatch(getFollowers(usernameParam)).then(res => {
      setLoading(false);
    });
  }, [dispatch, usernameParam]);

  const handleFollowUser = id => {
    dispatch(followUser(id)).then(res => {
      setActive(pathname);
    });
  };

  return (
    <Layout>
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
      <Loader isLoading={isLoading}>
        {user && user.username === usernameParam && (
          <s.FollowWrapper>
            <s.FollowTabHead>
              <s.FollowTabName onClick={() => setActive(pathFollowers)}>
                <s.FollowTabLink
                  as={Link}
                  to={`/${
                    currentUser && currentUser.username === usernameParam
                      ? currentUser.username
                      : user.username
                  }/followers`}
                >
                  <s.FollowTabTitle active={active === pathFollowers}>
                    Followers
                  </s.FollowTabTitle>
                </s.FollowTabLink>
              </s.FollowTabName>
              <s.FollowTabName onClick={() => setActive(pathFollowing)}>
                <s.FollowTabLink
                  as={Link}
                  to={`/${
                    currentUser && currentUser.username === usernameParam
                      ? currentUser.username
                      : user.username
                  }/following`}
                >
                  <s.FollowTabTitle active={active === pathFollowing}>
                    Following
                  </s.FollowTabTitle>
                </s.FollowTabLink>
              </s.FollowTabName>
            </s.FollowTabHead>
            <s.FollowTabContent>
              {active === pathFollowers &&
                followersUser?.map(u => (
                  <s.FollowUserItem key={u._id}>
                    <s.FollowUserImageWrapper>
                      <s.FollowUserImage src={u.profileImage} />
                    </s.FollowUserImageWrapper>
                    <s.FollowUserContent>
                      <s.FollowUserContentTop>
                        <s.FollowUserContentInfo
                          as={Link}
                          to={`/${u.username}`}
                        >
                          <s.FollowUserName>{u.name}</s.FollowUserName>
                          <s.FollowUserUserName>
                            {`@${u.username}`}
                          </s.FollowUserUserName>
                        </s.FollowUserContentInfo>
                        <s.FollowUserContentButton>
                          <FollowButton
                            currentUser={currentUser}
                            u={u}
                            handleFollowUser={handleFollowUser}
                            usernameParam={usernameParam}
                          />
                        </s.FollowUserContentButton>
                      </s.FollowUserContentTop>
                      {u.bio && (
                        <s.FollowUserContentBottom>
                          {u.bio}
                        </s.FollowUserContentBottom>
                      )}
                    </s.FollowUserContent>
                  </s.FollowUserItem>
                ))}

              {active === pathFollowing &&
                followingUser?.map(u => (
                  <s.FollowUserItem key={u._id}>
                    <s.FollowUserImageWrapper>
                      <s.FollowUserImage src={u.profileImage} />
                    </s.FollowUserImageWrapper>
                    <s.FollowUserContent>
                      <s.FollowUserContentTop>
                        <s.FollowUserContentInfo
                          as={Link}
                          to={`/${u.username}`}
                        >
                          <s.FollowUserName>{u.name}</s.FollowUserName>
                          <s.FollowUserUserName>
                            {`@${u.username}`}
                          </s.FollowUserUserName>
                        </s.FollowUserContentInfo>
                        <s.FollowUserContentButton>
                          <FollowButton
                            currentUser={currentUser}
                            u={u}
                            handleFollowUser={handleFollowUser}
                            usernameParam={usernameParam}
                          />
                        </s.FollowUserContentButton>
                      </s.FollowUserContentTop>
                      {u.bio && (
                        <s.FollowUserContentBottom>
                          {u.bio}
                        </s.FollowUserContentBottom>
                      )}
                    </s.FollowUserContent>
                  </s.FollowUserItem>
                ))}
            </s.FollowTabContent>
          </s.FollowWrapper>
        )}
      </Loader>
    </Layout>
  );
};

export default FollowPage;
