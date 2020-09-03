import { action, thunk } from "easy-peasy";
import BaseModel from "./Base";
import { Status } from "../../common/constants";
import { ApiService } from "../index";

const getData = thunk(async (actions, payload) => {
  actions.updateStatus(Status.FETCHING);
  const response = await ApiService.getResources(payload);
  actions.updateStatus(response.ok ? Status.SUCCESS : Status.FAILED);
  if (!response.ok) {
    actions.setData([]);
    return actions.showError(response.data.error);
  }

  var data = response.data.data;
  actions.setData(data);
});

export default {
  ...BaseModel(),
  getData,
  setData: action((state, data) => {
    state.data = data;
  }),
};
