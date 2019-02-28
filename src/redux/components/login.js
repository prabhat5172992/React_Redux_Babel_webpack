import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import "../style.scss";

const Login = props => {
  const style = { textStyle: { width: "300px" } };
  const { email, password } = props;
  return (
    <div className="centerAlign max-width mb7 mt34">
      <div
        style={{
          display: "inline-block",
          boxSizing: "border-box",
          border: "2px solid #C8CACA",
          padding: "10px",
          height: "350px"
        }}
      >
        <div
          style={{
            textAlign: "center",
            fontSize: "1.2rem",
            backgroundColor: "#12C4F3",
            color: "#FBFCFC",
            padding: "10px"
          }}
        >
          LOGIN
        </div>
        <div className="mt3">
          <TextField
            floatingLabelFixed
            floatingLabelText="Email"
            style={style.textStyle}
            onChange={(_, email) => props.getLoginFieldValues("email", email)}
            value={email}
          />
          <br />
          <TextField
            floatingLabelFixed
            type="password"
            floatingLabelText="Password"
            style={style.textStyle}
            onChange={(_, Password) =>
              props.getLoginFieldValues("password", Password)
            }
            value={password}
            errorText={props.errorText || props.error1}
            errorStyle={{ marginLeft: "-175px" }}
          />
          <br />
          <RaisedButton
            label="Submit"
            style={{ marginTop: "50px" }}
            primary={true}
            onClick={props.validateLogin}
          />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Login;
