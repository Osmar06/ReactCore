import { action } from "easy-peasy";
import { Status } from "common/constants";
import { notification } from "antd";

const BaseModel = () => ({
  status: Status.NOT_STARTED,
  updateStatus: action((state, status) => {
    state.status = status;
  }),
  mergeState: action((state, extra) => {
    Object.assign(state, extra);
  }),
  showError: action((state, payload) => {
    const messageConfig =
      payload instanceof Object ? payload : { message: payload };
    state.error = messageConfig.message;
    notification.error(messageConfig);
  }),
});

export default BaseModel;
