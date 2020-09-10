export const Uris = {
  USERS: "users",
};

const createApiUsers = (api) => {
  const get = (params) => {
    const { perPage = 50 } = params || {};
    return api.get(`${Uris.USERS}?per_page=${perPage}`);
  };
  const getById = (id) => api.get(`${Uris.USERS}/${id}`);

  return {
    get,
    getById,
  };
};

export default createApiUsers;
