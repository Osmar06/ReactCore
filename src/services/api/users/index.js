export const Uris = {
  USERS: 'users',
};

const createApiUsers = (api) => {
  const getUsers = (params) => {
    const {perPage = 50} = params || {};
    return api.get(`${Uris.USERS}?per_page=${perPage}`);
  };
  const getUser = (id) => api.get(`${Uris.USERS}/${id}`);

  return {
    getUsers,
    getUser,
  };
};

export default createApiUsers;
