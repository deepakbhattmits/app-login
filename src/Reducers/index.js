import { combineReducers } from "redux";
import Authreducer from "./Authreducer";

export default combineReducers({
  Auth: Authreducer
});
