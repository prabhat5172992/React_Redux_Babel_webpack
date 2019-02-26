import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import actions from "../../actions";
import selectors from "../../selectors";
import Add from "../../components/Add";
import Form from "../../components/form";

class Main extends PureComponent {
  render() {
    return (
      /* Fragements <> </> introduced in react 16, Many tools doesn't support it so <React.Fragment> can be used to make it supportable. <React.Fragment> </React.Fragment>also support keys. */
      <>
        <h3> This is main page/ TopGear Project. </h3>
        <h5> {this.props.example} </h5>
        <Add value={this.props.value} add={this.props.add} />
        <Form />
      </>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    //example: (value) => dispatch(actions.example(value))
    add: value => dispatch(actions.onAddClick(value))
  };
}

const mapStateToProps = () =>
  createStructuredSelector({
    example: selectors.exampleData(),
    value: selectors.getAddVal()
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
