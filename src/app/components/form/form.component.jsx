import React, { useState } from "react";
import * as s from "./styles";

const TextBox = ({ children, label }) => {
  return (
    <s.FormTextBox>
      {children}
      {label && <s.FormTextBoxLabel>{label}</s.FormTextBoxLabel>}
    </s.FormTextBox>
  );
};

const TextBoxInput = ({ type, name, value, onChange }) => {
  const [focus, setFocus] = useState(false);

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    setFocus(false);
  };

  return (
    <s.FormTextBoxInput
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      isFocus={focus}
      isValue={value && value.length !== 0}
    />
  );
};

const TextArea = ({ type, name, value, onChange }) => {
  const [focus, setFocus] = useState(false);

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    setFocus(false);
  };

  return (
    <s.FormTextArea
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      isFocus={focus}
      isValue={value && value.length !== 0}
      as="textarea"
    />
  );
};

export { TextBox, TextBoxInput, TextArea };
