import React from "react";
import "../style.scss";
import RaisedButton from "material-ui/RaisedButton";

export default props => {
  return (
    <>
      <div className="boxShadow bgWhite">
        <br />
        <div className="centerAlign">
          <h1> My React Form. </h1>
        </div>
        <br />
      </div>
      <RaisedButton
        label="Logout"
        style={{ marginTop: "10px" }}
        primary={true}
        onClick={props.Logout}
      />
    </>
  );
};
