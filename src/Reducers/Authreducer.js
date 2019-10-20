import { loginConstants } from "../Constants";
import { AUTHCRED, USER } from "../data/dummy-data";
import { isEqual, isEmpty } from "lodash";

import { toast } from "react-toastify";

const INITIAL_STATE = {
  isSignedIn: false,
  user: []
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case loginConstants.SIGN_IN:
      let check = isEqual(AUTHCRED, action.payload);
      if (check) {
        toast.success(`User Logged In ${action.payload.username}`);
      } else {
        toast.error(`Something Wrong`);
      }
      return Object.assign({}, state, {
        isSignedIn: check ? true : false,
        user: isEmpty(state.user) ? [...state.user, USER.user] : []
      });
    case loginConstants.SIGN_OUT:
      return Object.assign({}, state, { isSignedIn: false, user: [] });
    case loginConstants.ADD_DATA:
      return state;
    case loginConstants.EDIT_DATA:
      return state;
    case loginConstants.REMOVE_DATA:
      return state;
    default:
      return state;
  }
};
