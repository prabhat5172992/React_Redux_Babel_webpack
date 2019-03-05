import constants from "../../constants";

// export const example = (value) => ({
//     type: constants.REACT_REDUX_SAGA_BOILERPLATE,
//     value
// });

export const onAddClick = value => ({
  type: constants.ON_ADD_CLICK,
  value
});

export const sagaCheck = value => ({
  type: constants.SAGA_RUNNING_CHECK
});

export const handleCheckBoxClick = value => ({
  type: constants.HANDLE_CHECKBOX_CLICK,
  value
});

export const setCheckboxes = value => ({
  type: constants.SET_CHECKBOX_WITH_NEW_DATA,
  value
});

export const resetCheckbox = () => ({
  type: constants.RESET_ALL_CHECKBOX
});

export const getCheckedCheckboxes = () => ({
  type: constants.GET_SELECTED_CHECKBOXES
});

export const selectedCheckboxes = value => ({
  type: constants.SELECTED_CHECKBOX_VALUE,
  value
});

export const copyAllCheckbox = () => ({
  type: constants.COPY_ALL_CHECKBOX_VALUE
});
