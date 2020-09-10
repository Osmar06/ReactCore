import { action, thunk } from "easy-peasy";
import BaseModel from "./Base";
import { Status } from "../../common/constants";

const getData = thunk(async (actions, payload, { injections }) => {
  const { api } = injections;
  actions.updateStatus(Status.FETCHING);
  const response = await api.users.get(payload);
  actions.updateStatus(response.ok ? Status.SUCCESS : Status.FAILED);
  if (!response.ok) {
    actions.setList([]);
    return actions.showError(response.data.error);
  }

  var data = response.data.data;
  actions.setList(data);
});

const getById = thunk(async (actions, payload, { injections }) => {
  const { api } = injections;
  actions.updateStatus(Status.FETCHING);
  const response = await api.users.getById(payload);
  actions.updateStatus(response.ok ? Status.SUCCESS : Status.FAILED);
  if (!response.ok) {
    actions.setSigle({});
    return actions.showError(response.data.error);
  }

  var data = response.data.data;
  actions.setSigle(data);
});

const UserModel = {
  ...BaseModel(),
  getData,
  getById,
  setList: action((state, payload) => {
    state.list = payload;
  }),
  setSigle: action((state, payload) => {
    state.single = payload;
  }),
};

export default UserModel;
