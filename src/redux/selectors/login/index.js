import { createSelector } from "reselect";

const selectLogin = state => state["login"];

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

const getLoginFields = key =>
  createSelector(
    selectLogin,
    fields => fields.getIn(["form", key])
  );

export { selectLogin, getLoginData, loginStatus, getLoginFields };
