import { action, thunk } from "easy-peasy";
import BaseModel from "./Base";
import { AppState, Status } from "common/constants";
import { ApiService } from "../index";
import StorageService from "../../services/StorageService";

const actions = {
  changeAppState: action((state, payload) => {
    state.appstate = payload;
  }),
  onLoginInputChange: action((state, { key, value }) => {
    state[key] = value;
  }),
};

const checkLogin = thunk(async (actions, payload, { dispatch, injections }) => {
  const credentials = await StorageService.get("credentials");

  if (credentials && credentials.token) {
    ApiService.setAuthorizationHeader(credentials.token);
    actions.changeAppState(AppState.PRIVATE);
    actions.mergeState(credentials);
  } else actions.changeAppState(AppState.PUBLIC);
});

const loginUser = thunk(async (actions, payload, { dispatch }) => {
  if (!payload.email || !payload.password) return;

  actions.updateStatus(Status.FETCHING);

  let response = await ApiService.loginUser(payload);

  actions.updateStatus(response.ok ? Status.SUCCESS : Status.FAILED);
  if (!response.ok) {
    await StorageService.remove("credentials");
    return actions.showError(response.data.error);
  }

  actions.changeAppState(AppState.PRIVATE);
  ApiService.setAuthorizationHeader(response.data.token);
  await StorageService.add("credentials", response.data);
});

export default {
  ...BaseModel(),
  loginUser,
  checkLogin,
  appstate: AppState.UNKNOWN,
  ...actions,
};
