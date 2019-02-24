import React, { Component } from "react";
import Divider from "material-ui/Divider";
//import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log("inside error catch file", error, errorInfo);
    this.setState({
      error,
      errorInfo
    });
  }
  render() {
    return (
      /* Fragements <> </> introduced in react 16, Many tools doesn't support it so <React.Fragment> can be used to make it supportable. <React.Fragment> </React.Fragment>also support keys. */
      <>
        {!this.state.error ? (
          <div> {this.props.children} </div>
        ) : (
          <div>
            <div>{`Some Errors occured in code, please fix it to proceed.`}</div>
            <Divider />
            <p className="red">
              {this.state.error && this.state.error.message}
            </p>
            <Divider />
            <p className="red">{this.state.error && this.state.error.stack}</p>
          </div>
        )}
      </>
    );
  }
}
