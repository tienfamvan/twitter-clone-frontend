import styled from "styled-components";

export const FormTextBox = styled.div`
  position: relative;
`;

export const FormTextBoxLabel = styled.span`
  position: absolute;
  pointer-events: none;
  transition-timing-function: ease-in;
  transition-duration: 0.125s;
  top: 1.125rem;
  font-size: 17px;
  color: #6e6e73;
  white-space: nowrap;
  overflow: hidden;
  max-width: calc(100% - 32px);
  left: 1rem;
  font-size: 17px;
  line-height: 1.23536;
  font-weight: 400;
  letter-spacing: -0.022em;
`;

export const FormTextBoxInput = styled.input`
  font-size: 17px;
  line-height: 1.23536;
  font-weight: 400;
  letter-spacing: -0.022em;
  width: 100%;
  height: 3.5rem;
  border-radius: 12px;
  border-width: 1px;
  border-style: solid;

  padding: 1.125rem 1rem 0;
  outline: none;
  font-family: "San Francisco Pro";

  color: #1d1d1f;
  margin-bottom: ${props => (props.error ? "0" : "0.88rem")};
  border-color: ${props => (props.error ? "#e30000" : "#d2d2d7")};
  background-color: ${props =>
    props.error ? "#fff2f4" : "hsla(0, 0%, 100%, 0.8)"};
  text-overflow: ellipsis;

  :focus {
    border-color: #0071e3;
    box-shadow: 0 0 0 4px rgb(0 125 250 / 60%);
  }

  ~ ${FormTextBoxLabel} {
    color: ${props => (props.isFocus || props.isValue) && "#6e6e73"};
    top: ${props => (props.isFocus || props.isValue) && "0.625rem"};
    font-size: ${props => (props.isFocus || props.isValue) && "12px"};
    line-height: ${props => (props.isFocus || props.isValue) && "1.33337"};
    letter-spacing: ${props => (props.isFocus || props.isValue) && "-0.01em"};
  }
`;

export const FormTextArea = styled(FormTextBoxInput)`
  height: 7.4rem;
  padding-top: 1.6rem;
  resize: none;
`;
