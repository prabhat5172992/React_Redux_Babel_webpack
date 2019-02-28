import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { logger } from "redux-logger";
import rootReducer from "./reducers";
import rootSaga from "./sagas";

/**
 * @description Redux logger displays every dispatched action and the before/after state of your redux store
 */

function configureStoreProd(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middlewares, logger))
  );

  sagaMiddleware.run(rootSaga);

  return store;
}

function configureStoreDev(initialState) {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware];

  const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares, logger))
  );
  sagaMiddleware.run(rootSaga);
  return store;
}

const configureStore =
  process.env.NODE_ENV === "production"
    ? configureStoreProd
    : configureStoreDev;

export default configureStore();
