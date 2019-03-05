import constants from "../../constants";
import selectors from "../../selectors";
import actions from "../../actions";
import { takeLatest, fork, select, put } from "redux-saga/effects";
import update from "immutability-helper";

function* example() {
  yield console.log("HI Prabhat!");
  //function Body goes here
}

function* handleCheckbox(action) {
  const { value } = action;
  const data = yield select(selectors.getCheckboxData());
  const newData = update(data, {
    $apply: obj => {
      obj.forEach(item => {
        if (item.name === value.name) item.checked = !value.checked;
      });
      return obj;
    }
  });
  yield put(actions.setCheckboxes(newData));
}

function* copySelectedCheckbox() {
  const data = yield select(selectors.getCheckboxData());
  const selected = data.filter(item => item.checked);
  yield put(actions.selectedCheckboxes(selected));
}

const onExampleCheck = fork(function*() {
  yield takeLatest(constants.SAGA_RUNNING_CHECK, example);
});

const checkBoxWatcher = fork(function*() {
  yield takeLatest(constants.HANDLE_CHECKBOX_CLICK, handleCheckbox);
});

const selectedCheckboxWatcher = fork(function*() {
  yield takeLatest(constants.GET_SELECTED_CHECKBOXES, copySelectedCheckbox);
});

export default [onExampleCheck, checkBoxWatcher, selectedCheckboxWatcher];
