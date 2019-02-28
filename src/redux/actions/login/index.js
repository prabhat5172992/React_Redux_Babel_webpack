import constants from "../../constants";

// export const example = (value) => ({
//     type: constants.REACT_REDUX_SAGA_BOILERPLATE,
//     value
// });
export const loginStatus = isValid => ({
  type: constants.SEND_LOGIN_STATUS,
  payload: isValid
});

export const onLoginSubmit = () => ({
  type: constants.VALIDATE_LOGIN_DATA_ENTERED
});

export const getLoginFields = (key, value) => ({
  type: constants.GET_FIELD_VALUE_FROM_LOGIN_FORM,
  key,
  value
});

export const logout = () => ({
  type: constants.LOGOUT_FROM_THE_PAGE
});
