import { fromJS } from "immutable";
import constants from "../../constants";

const initialState = fromJS({
  example: "Welcome to React_Redux_Saga learning Platform.",
  addVal: 0,
  checkboxData: constants.CHECKBOX_INITIAL_DATA,
  selectedVal: null,
  displayAll: false
});

function main(state = initialState, action) {
  switch (action.type) {
    case constants.ON_ADD_CLICK:
      return state.set("addVal", action.value);
    case constants.SET_CHECKBOX_WITH_NEW_DATA:
      return state.set("checkboxData", fromJS(action.value));
    case constants.VALIDATE_LOGIN_DATA_ENTERED:
      return state.set("checkboxData", fromJS(constants.CHECKBOX_INITIAL_DATA));
    case constants.RESET_ALL_CHECKBOX:
      return state
        .set("checkboxData", fromJS(constants.CHECKBOX_INITIAL_DATA))
        .set("selectedVal", null);
    case constants.SELECTED_CHECKBOX_VALUE:
      return state.set("selectedVal", action.value);
    case constants.COPY_ALL_CHECKBOX_VALUE:
      return state.set("displayAll", true);
    default:
      return state;
  }
  // return initialState;
}

export default main;
