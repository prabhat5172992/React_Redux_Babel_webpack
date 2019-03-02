import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import "../style.scss";

const Login = props => {
  const style = { textStyle: { width: "300px" } };
  const { email, password, emailErr, passwordErr } = props;
  return (
    <div className="bgColor centerAlign width">
      <div
        className={
          emailErr && passwordErr
            ? "displayInline mb30 mt30"
            : emailErr || passwordErr
            ? "displayInline mb35 mt33"
            : "displayInline mb41 mt33"
        }
      >
        <div className="txtWhite">
          <h3> CONFIGURATOR </h3>
        </div>
        <div
          className="bgWhite"
          style={{
            boxSizing: "border-box",
            border: "2px solid #C8CACA",
            padding: "10px"
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
          <div className="mt4">
            <TextField
              floatingLabelFixed
              hintText="Enter your username"
              floatingLabelText="Email"
              style={style.textStyle}
              onChange={(_, email) => props.getLoginFieldValues("email", email)}
              onBlur={event => props.makeValidateLoginFields("email")}
              errorText={emailErr ? emailErr : ""}
              errorStyle={{ marginLeft: "-200px" }}
              value={email}
            />
            <br />
            <TextField
              floatingLabelFixed
              hintText="Enter you password"
              type="password"
              floatingLabelText="Password"
              style={style.textStyle}
              onChange={(_, Password) =>
                props.getLoginFieldValues("password", Password)
              }
              onBlur={event => props.makeValidateLoginFields("password")}
              value={password}
              errorText={passwordErr ? passwordErr : ""}
              errorStyle={{ marginLeft: "-175px" }}
            />
            <br />
            <RaisedButton
              label="Submit"
              style={{ marginTop: "30px", marginBottom: "30px" }}
              primary={true}
              onClick={props.validateLogin}
            />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
