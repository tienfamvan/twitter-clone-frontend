import React from "react";
import { Link } from "react-router-dom";
import Footer from "@/app/components/layout/footer";
import { ReactComponent as IconTwitter } from "@/app/assets/svgs/icon-twitter.svg";
import * as sc from "@/app/styles/base";
import * as s from "./styles";

const LandingPage = () => {
  return (
    <s.LandingWrapper>
      <s.Landing>
        <s.LandingBg>
          <s.LandingBgImage />
        </s.LandingBg>
        <s.LandingForm>
          <s.LandingFormInner>
            <sc.Icon fSize="50px">
              <IconTwitter />
            </sc.Icon>
            <s.LandingTitle fSize="64px" lineHeight="84px" mB="48px" mT="68px">
              Happening now
            </s.LandingTitle>
            <s.LandingTitle mB="42px">Join Twitter today.</s.LandingTitle>
            <sc.Button
              as={Link}
              bg="rgba(29,161,242)"
              color="white"
              mb="12px"
              to="/signup"
            >
              Sign Up
            </sc.Button>
            <sc.Button as={Link} to="/login">
              Log In
            </sc.Button>
          </s.LandingFormInner>
        </s.LandingForm>
      </s.Landing>
      <Footer />
    </s.LandingWrapper>
  );
};

export default LandingPage;
