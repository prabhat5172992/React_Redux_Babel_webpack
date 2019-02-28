import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import * as serviceWorker from "../serviceWorker";
import ErrorBoundary from "./errorBoundary";
import Main from "./containers/main";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import store from "./storeConfig";

render(
  <Provider store={store}>
    <MuiThemeProvider>
      <ErrorBoundary>
        <Main />
      </ErrorBoundary>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
module.hot.accept();
