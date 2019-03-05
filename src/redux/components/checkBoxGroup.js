import React from "react";
import "../style.scss";
import RaisedButton from "material-ui/RaisedButton";

const CheckBoxGroup = props => {
  const styles = {
    checkbox: {
      marginBottom: 16,
      maxWidth: 25,
      display: "inline-block"
    },
    textDisplay: {
      maxWidth: 15,
      display: "inline-block"
    }
  };
  console.log("CHECKBOX DATA", props.checkboxData);
  return (
    <div className="mt4">
      <div>
        {props.checkboxData.map((item, index) => (
          <div
            className={`height width m2 cursorP border circle ${
              item.checked ? "bgColor" : "changeColor"
            }`}
            style={styles.checkbox}
          >
            <div
              className="txtWhite centerAlign p1"
              onClick={() => props.handleCheckboxes(item)}
            >
              {item.name}
            </div>
          </div>
        ))}
      </div>
      <div>
        <RaisedButton
          label="Reset All"
          secondary={true}
          onClick={props.ResetAllCheckbox}
        />
        <RaisedButton
          label="Copy All"
          style={{ marginLeft: "12px" }}
          primary={true}
          onClick={props.copyAllCheckbox}
        />
        <RaisedButton
          label="Copy Selected"
          style={{ marginLeft: "12px" }}
          primary={true}
          onClick={props.copySelectedCheckbox}
        />
      </div>
      <div className="mb2">
        {props.selectedValue && props.selectedValue.length ? (
          <div className="mt2 mb2 theme-orange fontWeight">
            Selected Checkboxes:
          </div>
        ) : null}
        {props.selectedValue &&
          props.selectedValue.map(item => (
            <div className="ml1 fontWeight" style={styles.textDisplay}>
              {item.name}
            </div>
          ))}
      </div>

      <div className="mb2">
        {props.allCheckboxValCopy &&
        props.checkboxData &&
        props.checkboxData.length ? (
          <div className="mt2 mb2 theme-green fontWeight">All Checkboxes:</div>
        ) : null}
        {props.allCheckboxValCopy &&
          props.checkboxData &&
          props.checkboxData.map(item => (
            <div className="ml1 fontWeight" style={styles.textDisplay}>
              {item.name}
            </div>
          ))}
      </div>
    </div>
  );
};

CheckBoxGroup.displayName = "Checkboxes Display";
export default CheckBoxGroup;
