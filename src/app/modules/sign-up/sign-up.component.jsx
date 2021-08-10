import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "@/app/store/auth/auth.action";
import { ReactComponent as IconLoading } from "@/app/assets/svgs/icon-loading.svg";
import Form from "@/app/components/form";
import MessageNoticeService from "@/app/shared/services/message-notice";
import * as sc from "@/app/styles/base";

const SignUpPage = ({ history }) => {
  const [isLoading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const signUpUser = e => {
    e.preventDefault();

    setLoading(true);

    dispatch(signUp({ name, username, email, password }))
      .then(res => {
        setLoading(false);
        history.push("/login");
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  };

  return (
    <>
      {error && MessageNoticeService.error(error)}
      <sc.FormWrapper>
        <sc.FormHeader as="h1">Please sign up.</sc.FormHeader>
        <sc.FormMain>
          <sc.FormFields onSubmit={e => signUpUser(e)}>
            <Form.TextBox label="Name">
              <Form.TextBoxInput
                name="name"
                value={name}
                error={error}
                onChange={e => {
                  e.target.value.length !== 0 && setError("");
                  setName(e.target.value);
                }}
              />
            </Form.TextBox>
            <Form.TextBox label="Username">
              <Form.TextBoxInput
                name="username"
                value={username}
                error={error}
                onChange={e => {
                  e.target.value.length !== 0 && setError("");
                  setUsername(e.target.value);
                }}
              />
            </Form.TextBox>
            <Form.TextBox label="Email">
              <Form.TextBoxInput
                name="email"
                value={email}
                error={error}
                onChange={e => {
                  e.target.value.length !== 0 && setError("");
                  setEmail(e.target.value);
                }}
              />
            </Form.TextBox>
            <Form.TextBox label="Password">
              <Form.TextBoxInput
                type="password"
                name="password"
                value={password}
                error={error}
                onChange={e => {
                  e.target.value.length !== 0 && setError("");
                  setPassword(e.target.value);
                }}
              />
            </Form.TextBox>
            <sc.FormSubmit>
              <sc.FormButton type="submit" isLoading={isLoading}>
                {isLoading && <IconLoading />} Sign Up
              </sc.FormButton>
            </sc.FormSubmit>
            <sc.FormText>
              <sc.FormTextLink to="/login">
                Already have an account? Log in now.
              </sc.FormTextLink>
            </sc.FormText>
          </sc.FormFields>
        </sc.FormMain>
      </sc.FormWrapper>
    </>
  );
};

export default SignUpPage;
