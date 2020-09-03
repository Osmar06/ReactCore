import { action } from "easy-peasy";
import { Status } from "common/constants";

const BaseModel = () => ({
  status: Status.NOT_STARTED,
  updateStatus: action((state, status) => {
    state.status = status;
  }),
  mergeState: action((state, extra) => {
    Object.assign(state, extra);
  }),
  showError: action((state, message) => {
    state.error = message;
    console.log(message);
  }),
});

export default BaseModel;
