import { loginConstants } from "../Constants";
export const userLogin = data => dispatch => {
  dispatch({ type: loginConstants.SIGN_IN, payload: data });
};
export const userLogout = data => dispatch => {
  dispatch({ type: loginConstants.SIGN_OUT, payload: data });
};
