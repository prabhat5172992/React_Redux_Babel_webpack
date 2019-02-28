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
