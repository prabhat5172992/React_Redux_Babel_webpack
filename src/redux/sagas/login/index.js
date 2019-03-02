import actions from "../../actions";
import constants from "../../constants";
import selectors from "../../selectors";
import { put, all, call, select, takeLatest, fork } from "redux-saga/effects";
import { not, nullOrEmpty } from "../utils";

const ValidationConfig = {
  email: [
    {
      assert: not(nullOrEmpty),
      error: "Email is required",
      args: [selectors.getLoginFields("email")]
    }
  ],
  password: [
    {
      assert: not(nullOrEmpty),
      error: "Password is required",
      args: [selectors.getLoginFields("password")]
    }
  ]
};

function* validateLoginData() {
  const userData = yield select(selectors.getLoginData());
  const email = yield select(selectors.getLoginFields("email"));
  const password = yield select(selectors.getLoginFields("password"));
  const c_Email = userData.find(item => item.get("email") === email);
  const c_Password = userData.find(item => item.get("password") === password);

  console.log("inside sagas", userData.toString());
  console.log("EMAIL", c_Email, c_Password);
  const err = yield call(validateForm);

  if (
    !err &&
    c_Email &&
    c_Password &&
    c_Email.get("email") === email &&
    c_Password.get("password") === password
  ) {
    yield put(actions.loginStatus(true));
    yield put(actions.clearLoginError());
  } else {
    yield put(actions.loginStatus(false));
  }
}

function* loginValidations(validationAction) {
  console.log("Hello I am inside login Validations");
  const rules = ValidationConfig[validationAction.fieldName];
  if (rules) {
    let err;
    for (const rule of rules) {
      const args = yield all(rule.args.map(s => select(state => s(state))));

      if (!rule.assert(...args)) {
        err = rule.error;
        break;
      }
    }
    yield put(actions.makeLoginErrorChange(validationAction.fieldName, err));
  }
}

function* validationLoginFields() {
  const form = yield select(state =>
    selectors.makeSelectLoginFields("form")(state)
  );
  if (form) {
    const [...keys] = form.keys();
    yield all(
      keys.map(field =>
        call(loginValidations, actions.makeValidateLoginFields(field))
      )
    );
  }
}

function* validateForm() {
  let err;
  yield call(validationLoginFields);
  err = yield select(state => selectors.makeSelectLoginFields("error")(state));
  console.log("ERROR VALIDATION", err);
  return err && err.findKey(val => val);
}

const validateLoginWatcher = fork(function*() {
  yield takeLatest(constants.VALIDATE_LOGIN_DATA_ENTERED, validateLoginData);
});

const onValidationLoginFields = fork(function*() {
  yield takeLatest(
    constants.VALIDATE_LOGIN_FIELDS_AND_GENERATE_ERROR,
    loginValidations
  );
});

export default [validateLoginWatcher, onValidationLoginFields];
