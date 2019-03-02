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

export const makeValidateLoginFields = fieldName => ({
  type: constants.VALIDATE_LOGIN_FIELDS_AND_GENERATE_ERROR,
  fieldName
});

export const clearLoginError = () => ({
  type: constants.CLEAR_LOGIN_ERROR_FIELDS
});

export const makeLoginErrorChange = (field, value) => ({
  type: constants.ON_LOGIN_FIELDS_ERROR_CHANGE,
  field,
  value
});

export const getLoginFields = (key, value) => ({
  type: constants.GET_FIELD_VALUE_FROM_LOGIN_FORM,
  key,
  value
});

export const logout = () => ({
  type: constants.LOGOUT_FROM_THE_PAGE
});
