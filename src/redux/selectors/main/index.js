import { createSelector } from "reselect";

const makeSelectGlobal = () => state => state;

//const selectMain = state => state["main"];

const mainData = () =>
  createSelector(
    makeSelectGlobal(),
    global => global.main
  );

const getCheckboxData = () =>
  createSelector(
    mainData(),
    data => data.get("checkboxData") && data.get("checkboxData").toJS()
  );

const getSelectedVal = () =>
  createSelector(
    mainData(),
    data => data.get("selectedVal")
  );

const copyAllCheckbox = () =>
  createSelector(
    mainData(),
    data => data.get("displayAll")
  );

const exampleData = () =>
  createSelector(
    mainData(),
    data => data.get("example")
  );

const getAddVal = () =>
  createSelector(
    mainData(),
    data => data.get("addVal")
  );

export {
  makeSelectGlobal,
  mainData,
  getCheckboxData,
  exampleData,
  getAddVal,
  getSelectedVal,
  copyAllCheckbox
};
