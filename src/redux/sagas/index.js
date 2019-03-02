import main from "./main";
import login from "./login";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([...login, ...main]);
}
