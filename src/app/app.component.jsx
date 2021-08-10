import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "./store/auth/auth.action";

import LandingPage from "./modules/landing";
import SignUpPage from "./modules/sign-up";
import LoginPage from "./modules/login";
import NotFoundPage from "./modules/not-found";
import HomePage from "./modules/home";
import ExplorePage from "./modules/explore";
import NotificationsPage from "./modules/notifications";
import FollowPage from "./modules/follow";

import ProfilePage from "./modules/profile";

import "./styles/fonts.css";

const App = () => {
  const { token } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(getCurrentUser());
    }
  }, [dispatch, token]);

  const generateRoute = (path, compt) => {
    if (token) {
      return <Route path={path} component={compt} exact />;
    }

    return (
      <Route path={path} exact>
        <Redirect to="/login" />
      </Route>
    );
  };

  const redirectToHome = path => {
    return (
      token && (
        <Route path={path} exact>
          <Redirect to="/home" />
        </Route>
      )
    );
  };

  return (
    <Router>
      <Switch>
        {redirectToHome("/")}
        {redirectToHome("/login")}
        {redirectToHome("/signup")}

        {generateRoute("/home", HomePage)}
        {generateRoute("/notifications", NotificationsPage)}
        {generateRoute("/:username/following", FollowPage)}
        {generateRoute("/:username/followers", FollowPage)}

        <Route path="/" component={LandingPage} exact />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/explore" component={ExplorePage} />
        <Route path="/:username" component={ProfilePage} exact />

        <Route path="/:username/*" component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default App;
