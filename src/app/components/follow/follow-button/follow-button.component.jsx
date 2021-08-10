import React, { useState } from "react";
import * as sc from "@/app/styles/base";

const FollowButton = ({ currentUser, u, handleFollowUser }) => {
  const [isFollowing, setFollowing] = useState(true);

  return (
    <>
      {currentUser && (
        <>
          {u._id !== currentUser._id && (
            <>
              {currentUser?.following.includes(u._id) ? (
                <sc.Button
                  onClick={() => handleFollowUser(u._id)}
                  minwidth="40px"
                  minheight="40px"
                  pr="1em"
                  pl="1em"
                  bg="rgba(29, 161, 242, 1)"
                  color="#fff"
                  onMouseOver={() => setFollowing(false)}
                  onMouseOut={() => setFollowing(true)}
                  hovercolor={!isFollowing ? "#ca2055" : "rgb(45, 131, 222, 1)"}
                >
                  {isFollowing ? "Following" : "Unfollow"}
                </sc.Button>
              ) : (
                <sc.Button
                  onClick={() => handleFollowUser(u._id)}
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
          )}
        </>
      )}
    </>
  );
};

export default FollowButton;
