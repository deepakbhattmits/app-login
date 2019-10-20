import { loginConstants } from "../Constants";
export const userLogin = data => dispatch => {
  dispatch({ type: loginConstants.SIGN_IN, payload: data });
};
export const userLogout = data => dispatch => {
  dispatch({ type: loginConstants.SIGN_OUT, payload: data });
};
export const addUser = data => dispatch => {
  dispatch({ type: loginConstants.ADD_DATA, payload: data });
};
export const editUser = data => dispatch => {
  dispatch({ type: loginConstants.EDIT_DATA, payload: data });
};
export const removeUser = data => dispatch => {
  dispatch({ type: loginConstants.REMOVE_DATA, payload: data });
};
