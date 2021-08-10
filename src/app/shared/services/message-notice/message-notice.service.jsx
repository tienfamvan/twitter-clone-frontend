import React from "react";
import * as s from "./styles";

import { ReactComponent as IconCheckCircle } from "@/app/assets/svgs/icon-check-circle.svg";
import { ReactComponent as IconCloseCircle } from "@/app/assets/svgs/icon-close-circle.svg";

const MessageNotice = ({ icon, type, content }) => {
  return (
    <s.MessageNoticeWrapper>
      <s.MessageNotice>
        <s.MessageNoticeContent>
          <s.MessageNoticeIcon type={type}>{icon}</s.MessageNoticeIcon>
          {content}
        </s.MessageNoticeContent>
      </s.MessageNotice>
    </s.MessageNoticeWrapper>
  );
};

export default class MessageNoticeService {
  static success(content) {
    return (
      <MessageNotice
        icon={<IconCheckCircle />}
        type="success"
        content={content}
      />
    );
  }

  static error(content) {
    return (
      <MessageNotice
        icon={<IconCloseCircle />}
        type="error"
        content={content}
      />
    );
  }
}
