import { create } from "apisauce";
import config from "../../config";
//import setInterceptor from './interceptor';
import createApiAuth from "./auth";
import createApiResources from "./resources";
import createApiUsers from "./users";

const createApiClient = (baseURL = config.apiBaseUrl) => {
  let baseApi = create({
    baseURL,
    headers: {
      Accept: "application/json",
      "Cache-Control": "no-cache",
      "Content-Type": "application/json",
    },
    timeout: 15000,
  });

  // use interceptor if using oAuth for authentication
  // setInterceptor(api);

  const setAuthorizationHeader = (accessToken) =>
    baseApi.setHeader("Authorization", `Bearer ${accessToken}`);

  return {
    setAuthorizationHeader,
    auth: createApiAuth(baseApi),
    resources: createApiResources(baseApi),
    users: createApiUsers(baseApi),
  };
};

export default { createApiClient };
