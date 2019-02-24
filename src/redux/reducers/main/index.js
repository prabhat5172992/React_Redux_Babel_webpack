import { fromJS } from "immutable";
import constants from "../../constants";

const initialState = fromJS({
  example: "Welcome to React_Redux_Saga learning Platform.",
  addVal: 0
});

function main(state = initialState, action) {
  switch (action.type) {
    case constants.ON_ADD_CLICK:
      return state.set("addVal", action.value);
    default:
      return state;
  }
  // return initialState;
}

export default main;
