import { action, thunk } from "easy-peasy";
import BaseModel from "./Base";
import { AppState, Status, Storage } from "common/constants";
import { ApiService } from "../index";
import { StorageService } from "../../services/storage";

const actionsLogin = {
  changeAppState: action((state, payload) => {
    state.appstate = payload;
  }),
};

const checkLogin = thunk(async (actions) => {
  const credentials = StorageService.get(Storage.CREDENTIALS);

  if (credentials && credentials.token) {
    ApiService.setAuthorizationHeader(credentials.token);
    actions.changeAppState(AppState.PRIVATE);
    actions.mergeState(credentials);
  } else actions.changeAppState(AppState.PUBLIC);
});

const loginUser = thunk(async (actions, payload) => {
  if (!payload.email || !payload.password) return;

  actions.updateStatus(Status.FETCHING);

  let response = await ApiService.loginUser(payload);

  actions.updateStatus(response.ok ? Status.SUCCESS : Status.FAILED);
  if (!response.ok) return actions.showError(response.data.error);

  actions.changeAppState(AppState.PRIVATE);
  ApiService.setAuthorizationHeader(response.data.token);
  StorageService.add(Storage.CREDENTIALS, {
    email: payload.email,
    ...response.data,
  });
});

export default {
  ...BaseModel(),
  loginUser,
  checkLogin,
  appstate: AppState.UNKNOWN,
  ...actionsLogin,
};
