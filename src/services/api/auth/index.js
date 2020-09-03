
export const Uris = {
  LOGIN: 'login',
  USERS: 'users',
  REGISTER: 'register',
  REFRESH: 'refresh',
};

const createApiAuth = (api) => {
  const loginUser = (payload) => api.post(Uris.LOGIN, payload);
  const registerUser = (payload) => api.post(Uris.REGISTER, payload);
  const getUsers = () => api.get(Uris.USERS);

  //kickoff our api functions
  return {
    loginUser,
    getUsers,
    registerUser,
  };
};

export default createApiAuth;
