import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import PropTypes from "prop-types";

const Add = props => {
  return (
    <>
      <RaisedButton
        label="ADD"
        primary={true}
        style={{ margin: "12px" }}
        onClick={() => props.add(props.value + 1)}
      />
      <TextField floatingLabelText="Value" value={props.value} />
    </>
  );
};

Add.displayName = "Add Component";
Add.PropTypes = {
  add: PropTypes.func,
  value: PropTypes.number
};

export default Add;
