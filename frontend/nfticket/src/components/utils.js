import store from "./store";
import { setLaunch } from "./store/launch";

export const userHandle = (data) => {
  store.dispatch(setLaunch(data));
};
