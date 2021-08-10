import React from "react";
import { useSelector } from "react-redux";
import Layout from "@/app/components/layout";

const HomePage = () => {
  const { currentUser } = useSelector(state => state.auth);

  return (
    <Layout>
      <h1>HomePage</h1>
      <p>Hi, {currentUser && currentUser.name}</p>
    </Layout>
  );
};

export default HomePage;
