import styled from "styled-components";
import * as sc from "@/app/styles/base";

export const ModalWrapper = styled(sc.FlexRowCenter)`
  height: 100%;
  width: 100vw;
  position: fixed;
  top: 0;
`;

export const ModalOverlay = styled(sc.Base)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const Modal = styled(sc.Base)`
  flex-shrink: 1;
  min-width: 600px;
  max-width: 80vw;
  min-height: 400px;
  max-height: 90vh;
  border-radius: 16px;
  top: 5%;
  position: absolute;
  overflow: hidden;
`;

export const ModalInner = styled(sc.Base)`
  flex-shrink: 1;
  flex-grow: 1;
  border-radius: 16px;
  background-color: rgba(255, 255, 255, 1);
`;

export const ModalBody = styled(sc.Base)`
  flex-shrink: 1;
  flex-grow: 1;
  max-width: 600px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  border-bottom-right-radius: 16px;
  border-bottom-left-radius: 16px;
  overflow: auto;
  padding-bottom: 64px;
`;
