export const Uris = {
  LOGIN: "login",
  USERS: "users",
  REGISTER: "register",
  REFRESH: "refresh",
};

const createApiAuth = (api) => {
  const login = (payload) => api.post(Uris.LOGIN, payload);
  const register = (payload) => api.post(Uris.REGISTER, payload);

  //kickoff our api functions
  return {
    login,
    register,
  };
};

export default createApiAuth;
