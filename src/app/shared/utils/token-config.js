export const tokenConfig = (getState = null, optionalParams = null) => {
  const token = getState ? getState().auth.token : null;

  const config = {
    headers: {
      "Content-type": "application/json",
    },
    params: {},
  };

  if (token) {
    config.headers["x-auth-token"] = token;
  }

  if (optionalParams) {
    config.params = optionalParams;
  }

  return config;
};
