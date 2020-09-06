import { action } from "easy-peasy";
import { Status } from "common/constants";
import { notification } from "antd";

const BaseModel = () => ({
  status: Status.STOPPED,
  updateStatus: action((state, status) => {
    state.status = status;
  }),
  mergeState: action((state, payload) => {
    Object.assign(state, payload);
  }),
  showError: action((state, payload) => {
    const messageConfig =
      payload instanceof Object ? payload : { message: payload };
    state.error = messageConfig.message;
    notification.error(messageConfig);
  }),
});

export default BaseModel;
