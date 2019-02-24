import React, { PureComponent } from "react";
import store from "./storeConfig";
import { Provider } from "react-redux";
//import PropTypes from 'prop-types';
import ErrorBoundary from "./errorBoundary";
import Main from "./containers/main";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class Sampleform extends PureComponent {
  static displayName = "Sample Form";

  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <ErrorBoundary>
            <Main />
          </ErrorBoundary>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default Sampleform;
