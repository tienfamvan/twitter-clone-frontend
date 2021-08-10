import styled from "styled-components";

export const MessageNoticeWrapper = styled.div`
  display: block;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  line-height: 1.5715;
  list-style: none;
  position: fixed;
  top: 8px;
  left: 0;
  z-index: 1010;
  width: 100%;
  pointer-events: none;
`;

export const MessageNotice = styled.div`
  padding: 8px;
  text-align: center;
`;

export const MessageNoticeContent = styled.div`
  display: inline-block;
  padding: 10px 16px;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%),
    0 9px 28px 8px rgb(0 0 0 / 5%);
  pointer-events: all;
`;

export const MessageNoticeIcon = styled.span`
  position: relative;
  top: 3px;
  margin-right: 8px;
  font-size: 16px;
  color: ${props =>
    (props.type === "error" && "#ff4d4f") ||
    (props.type === "success" && "#52c41a")};
`;
