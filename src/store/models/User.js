import { action, thunk } from "easy-peasy";
import BaseModel from "./Base";
import { Status } from "../../common/constants";
import { ApiService } from "../index";

const getData = thunk(async (actions, payload) => {
  actions.updateStatus(Status.FETCHING);
  const response = await ApiService.getUsers(payload);
  actions.updateStatus(response.ok ? Status.SUCCESS : Status.FAILED);
  if (!response.ok) {
    actions.setData([]);
    return actions.showError(response.data.error);
  }

  var data = response.data.data;
  actions.setData(data);
});

const getDataById = thunk(async (actions, payload) => {
  actions.updateStatus(Status.FETCHING);
  const response = await ApiService.getUser(payload);
  actions.updateStatus(response.ok ? Status.SUCCESS : Status.FAILED);
  if (!response.ok) {
    actions.setData({});
    return actions.showError(response.data.error);
  }

  var data = response.data.data;
  actions.setUser(data);
});

const UserModel = {
  ...BaseModel(),
  getData,
  getDataById,
  setData: action((state, data) => {
    state.data = data;
  }),
  setUser: action((state, user) => {
    state.user = user;
  }),
};

export default UserModel;
