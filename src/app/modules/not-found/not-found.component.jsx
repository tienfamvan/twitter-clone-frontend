import React from "react";
import Layout from "@/app/components/layout";
import * as s from "./styles";

const NotFoundPage = () => {
  return (
    <Layout>
      <s.NotFoundWrapper>
        Hmm...this page doesn’t exist. Try searching for something else.
      </s.NotFoundWrapper>
    </Layout>
  );
};

export default NotFoundPage;
