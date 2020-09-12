import { action, thunk } from "easy-peasy";
import BaseModel from "./Base";
import { Status } from "../../common/constants";

const getData = thunk(async (actions, payload, { injections }) => {
  const { api } = injections;
  actions.updateStatus(Status.FETCHING);
  const { ok, data } = await api.resources.get(payload);
  actions.updateStatus(ok ? Status.SUCCESS : Status.FAILED);
  if (!ok) {
    actions.setData([]);
    return actions.showError(data.error);
  }

  actions.setData(data.data);
});

export default {
  ...BaseModel(),
  getData,
  setData: action((state, payload) => {
    state.list = payload;
  }),
};
