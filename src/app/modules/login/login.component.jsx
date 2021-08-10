import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "@/app/store/auth/auth.action";
import { ReactComponent as IconLoading } from "@/app/assets/svgs/icon-loading.svg";
import { ReactComponent as IconLeftCircle } from "@/app/assets/svgs/icon-left-circle.svg";
import Form from "@/app/components/form";
import MessageNoticeService from "@/app/shared/services/message-notice";
import * as sc from "@/app/styles/base";

const LoginPage = ({ history }) => {
  const { token } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const [isLoading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const loginUser = e => {
    e.preventDefault();

    setLoading(true);

    dispatch(login({ username, password }))
      .then(res => {
        setLoading(false);
        history.push("/home");
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
        <sc.FormHeader as="h1">Please log in.</sc.FormHeader>
        <sc.FormMain>
          <sc.FormFields onSubmit={e => loginUser(e)}>
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
                {isLoading && <IconLoading />} Log In
              </sc.FormButton>
            </sc.FormSubmit>
            <sc.FormText>
              {token ? (
                <sc.FormTextLink to="/">
                  <IconLeftCircle /> Back home
                </sc.FormTextLink>
              ) : (
                <sc.FormTextLink to="/signup">
                  Don't have an account? Create one now.
                </sc.FormTextLink>
              )}
            </sc.FormText>
          </sc.FormFields>
        </sc.FormMain>
      </sc.FormWrapper>
    </>
  );
};

export default LoginPage;
