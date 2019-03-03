import { createSelector } from "reselect";

const selectLogin = state => state["login"];

const getLoggedInUser = () =>
  createSelector(
    selectLogin,
    user => user.get("loggedInUser")
  );

const getLoginData = () =>
  createSelector(
    selectLogin,
    data => data.get("loginData")
  );

const loginStatus = () =>
  createSelector(
    selectLogin,
    data => data.get("isValidLogin")
  );
const makeSelectLoginFields = field =>
  createSelector(
    selectLogin,
    login => login.get(field)
  );

const getLoginFields = key =>
  createSelector(
    makeSelectLoginFields("form"),
    fields => fields.get(key)
  );

const makeSelectLoginErr = field =>
  createSelector(
    makeSelectLoginFields("error"),
    error => error.get(field)
  );

export {
  selectLogin,
  makeSelectLoginFields,
  getLoginData,
  loginStatus,
  getLoginFields,
  makeSelectLoginErr,
  getLoggedInUser
};
