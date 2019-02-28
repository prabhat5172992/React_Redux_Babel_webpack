import constants from "../../constants";
import { takeLatest } from "redux-saga/effects";

function* example() {
  yield console.log("HI Prabhat!");
  //function Body goes here
}

function* onExampleCheck() {
  yield takeLatest(constants.SAGA_RUNNING_CHECK, example);
}

export default [onExampleCheck];
