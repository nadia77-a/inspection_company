import request from "helpers/request";

export const fetchLogin = (email, password) =>
  request
    .post(`/backend/api/user/login?username=${email}&password=${password}`)
    .catch((error) => ({ error }));
