import { createStore } from "easy-peasy";

export default (model, api) => {
  return createStore(model, {
    name: "easystore",
    /**
     * for api injecting using injections
     */
    injections: { api },
  });
};
