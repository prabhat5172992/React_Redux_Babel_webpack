import React from "react";
import "../style.scss";
import RaisedButton from "material-ui/RaisedButton";

export default props => {
  return (
    <>
      <div className="mb4">
        <div className="height width bgColor">
          <div className="centerAlign txtWhite">
            <h1> My React Form </h1>
          </div>
          <div className="txtWhite rightAlign mr4">
            <h4>{`Logged in as ${props.user}`}</h4>
          </div>
        </div>
        <div className="mt4 centerAlign">
          <RaisedButton label="Logout" primary={true} onClick={props.Logout} />
        </div>
      </div>
    </>
  );
};
