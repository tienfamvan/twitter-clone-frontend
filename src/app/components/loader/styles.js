import styled from "styled-components";
import * as sc from "@/app/styles/base";

export const LoaderWrapper = styled.div``;

export const Loader = styled.div`
  display: ${props => (props.isLoading ? "inline-block" : "none")};

  position: absolute;
  height: 100%;
  width: 100%;
  background-color: #fff;

  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: "tnum";

  color: #1890ff;
  text-align: center;
  vertical-align: middle;
  opacity: 1;
  transition: transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
  z-index: 99999;
`;

export const LoadingIcon = styled.span`
  position: relative;
  top: 33px;
  display: inline-block;
  font-size: 32px;
  width: 1em;
  height: 1em;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  animation: ${sc.loadingCircle} 1s infinite linear;

  svg {
    display: inline-block;
  }
`;
