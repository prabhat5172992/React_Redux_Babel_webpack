import actions from "../../actions";
import constants from "../../constants";
import selectors from "../../selectors";
import { put, select, takeLatest } from "redux-saga/effects";

function* validateLoginData() {
  const userData = yield select(selectors.getLoginData());
  const email = yield select(selectors.getLoginFields("email"));
  const password = yield select(selectors.getLoginFields("password"));
  const c_Email = userData.find(item => item.get("email") === email);
  const c_Password = userData.find(item => item.get("password") === password);

  console.log("inside sagas", userData.toString());
  console.log("EMAIL", c_Email, c_Password);
  if (
    c_Email &&
    c_Password &&
    c_Email.get("email") === email &&
    c_Password.get("password") === password
  ) {
    yield put(actions.loginStatus(true));
  } else {
    yield put(actions.loginStatus(false));
  }
}

function* validateLoginWatcher() {
  yield takeLatest(constants.VALIDATE_LOGIN_DATA_ENTERED, validateLoginData);
}

export default [validateLoginWatcher];
