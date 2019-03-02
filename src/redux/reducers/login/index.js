import constants from "../../constants";
import { fromJS } from "immutable";

const initialState = fromJS({
  loginData: constants.INITIAL_LOGIN_DATA,
  isValidLogin: false,
  form: constants.LOGIN_FORM,
  error: {}
});

function Login(state = initialState, action) {
  switch (action.type) {
    case constants.SEND_LOGIN_STATUS:
      return state
        .set("isValidLogin", action.payload)
        .set("form", fromJS(constants.LOGIN_FORM));
    case constants.GET_FIELD_VALUE_FROM_LOGIN_FORM:
      return state.setIn(["form", action.key], action.value);
    case constants.ON_LOGIN_FIELDS_ERROR_CHANGE:
      return state.setIn(["error", action.field], action.value);
    case constants.CLEAR_LOGIN_ERROR_FIELDS:
      return state.set("error", fromJS({}));
    case constants.LOGOUT_FROM_THE_PAGE:
      return state.set("isValidLogin", false);
    default:
      return state;
  }
}

export default Login;
