import { create } from "apisauce";
import config from "../../config";
import apiMonitor from "./monitor";
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

  baseApi.addMonitor(apiMonitor);

  // use interceptor if using oAuth for authentication
  // setInterceptor(api);

  const setAuthorizationHeader = (accessToken) =>
    baseApi.setHeader("Authorization", `Bearer ${accessToken}`);

  //Define API functions
  const apiAuth = createApiAuth(baseApi);
  const apiResources = createApiResources(baseApi);
  const apiUsers = createApiUsers(baseApi);

  return {
    setAuthorizationHeader,
    ...apiAuth,
    ...apiResources,
    ...apiUsers,
  };
};

export default { createApiClient };
