import React from "react";
import { ReactComponent as IconLoading } from "@/app/assets/svgs/icon-loading.svg";
import * as s from "./styles";

const Loader = ({ children, isLoading }) => {
  return (
    <s.LoaderWrapper>
      <s.Loader isLoading={isLoading}>
        <s.LoadingIcon>
          <IconLoading />
        </s.LoadingIcon>
      </s.Loader>

      {children}
    </s.LoaderWrapper>
  );
};

export default Loader;
