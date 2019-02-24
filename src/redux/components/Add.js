import React from "react";
import RaisedButton from "material-ui/RaisedButton";
//import { boundMethod } from "autobind-decorator";
import TextField from "material-ui/TextField";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import PropTypes from "prop-types";

const Add = props => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     value: 0
  //   };
  // }

  return (
    <>
      <MuiThemeProvider>
        <RaisedButton
          label="ADD"
          primary={true}
          style={{ margin: "12px" }}
          onClick={() => props.add(props.value + 1)}
        />
        <TextField floatingLabelText="Value" value={props.value} />
      </MuiThemeProvider>
    </>
  );
};

Add.displayName = "Add Component";
Add.PropTypes = {
  add: PropTypes.func,
  value: PropTypes.number
};

export default Add;
