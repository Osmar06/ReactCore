export const Uris = {
  RESOURCE: "unknown",
};

const createApiResource = (api) => {
  const get = () => api.get(Uris.RESOURCE);

  return {
    get,
  };
};

export default createApiResource;
