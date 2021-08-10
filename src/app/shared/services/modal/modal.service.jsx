import React from "react";
import ReactDOM from "react-dom";
import { ReactComponent as IconClose } from "@/app/assets/svgs/icon-close.svg";
import * as sc from "@/app/styles/base";
import * as s from "./styles";

const ModalService = ({
  icon,
  title,
  button,
  visible,
  onCancel,
  content,
  onSubmit,
}) => {
  return visible
    ? ReactDOM.createPortal(
        <s.ModalWrapper>
          <s.ModalOverlay></s.ModalOverlay>
          <s.Modal as="form" onSubmit={onSubmit}>
            <s.ModalInner>
              <sc.CMHead>
                <sc.CMIconWrapper>
                  <sc.CMIcon onClick={onCancel}>
                    <sc.CMIconInner>
                      {icon ? icon : <IconClose />}
                    </sc.CMIconInner>
                  </sc.CMIcon>
                </sc.CMIconWrapper>
                {title && (
                  <sc.CMContent>
                    <sc.CMContentTitle>{title}</sc.CMContentTitle>
                  </sc.CMContent>
                )}
                {button && <sc.CMButton>{button}</sc.CMButton>}
              </sc.CMHead>
              <s.ModalBody>{content}</s.ModalBody>
            </s.ModalInner>
          </s.Modal>
        </s.ModalWrapper>,
        document.body
      )
    : null;
};

export default ModalService;
