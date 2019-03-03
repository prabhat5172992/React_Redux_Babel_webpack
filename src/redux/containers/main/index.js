import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import actions from "../../actions";
import selectors from "../../selectors";
import Login from "../../components/login";
import PageForm from "../../components/form";

class Main extends PureComponent {
  componentDidMount() {
    this.props.sagaCheck();
  }
  render() {
    console.log("isValidLoginisValidLogin", this.props.isValidLogin);
    return (
      /* Fragements <> </> introduced in react 16, Many tools doesn't support it so <React.Fragment> can be used to make it supportable. <React.Fragment> </React.Fragment>also support keys. */
      <>
        {!this.props.isValidLogin ? (
          <Login {...this.props} />
        ) : (
          <PageForm Logout={this.props.Logout} user={this.props.loggedInUser} />
        )}
      </>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    //example: (value) => dispatch(actions.example(value))
    sagaCheck: () => dispatch(actions.sagaCheck()),
    makeValidateLoginFields: fieldName =>
      dispatch(actions.makeValidateLoginFields(fieldName)),
    add: value => dispatch(actions.onAddClick(value)),
    validateLogin: () => dispatch(actions.onLoginSubmit()),
    getLoginFieldValues: (key, value) =>
      dispatch(actions.getLoginFields(key, value)),
    Logout: () => dispatch(actions.logout())
  };
}

const mapStateToProps = () =>
  createStructuredSelector({
    example: selectors.exampleData(),
    value: selectors.getAddVal(),
    email: selectors.getLoginFields("email"),
    password: selectors.getLoginFields("password"),
    emailErr: selectors.makeSelectLoginErr("email"),
    passwordErr: selectors.makeSelectLoginErr("password"),
    isValidLogin: selectors.loginStatus(),
    loggedInUser: selectors.getLoggedInUser()
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
