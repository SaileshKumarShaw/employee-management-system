import React from "react";

function TextInput(props) {
  return (
    <div className="form-grup">
      <div className="field">
        <input
          id={props.id}
          type="text"
          onChange={props.onChange}
          name={props.name}
          className="form-control"
          value={props.value || ""}
          style={props.Boxstyle}
        />
      </div>
      {props.error && <div className="alert alert-danger">{props.error}</div>}
    </div>
  );
}

export default TextInput;
