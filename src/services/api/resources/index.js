export const Uris = {
  RESOURCE: "unknown",
};

const createApiResource = (api) => {
  const getResources = () => api.get(Uris.RESOURCE);

  return {
    getResources,
  };
};

export default createApiResource;
