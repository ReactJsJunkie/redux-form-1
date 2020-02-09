import React, { Fragment } from "react";

export const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, asyncValidating, active }
}) => (
  <Fragment>
    <div>
      <input
        style={
          touched && error
            ? { border: "2px solid red" }
            : touched && active
            ? { border: "2px solid blue" }
            : asyncValidating
            ? { border: "2px solid orange" }
            : touched && !error
            ? { border: "2px solid green" }
            : {}
        }
        {...input}
        placeholder={label}
        type={type}
      />
      {touched &&
        ((error && <span style={{ color: "red" }}>&#10006; {error}</span>) ||
          (!error && <span style={{ color: "green" }}>&#10004;</span>) ||
          (asyncValidating && (
            <span style={{ color: "orange" }}>validating . . .</span>
          )))}
    </div>
  </Fragment>
);
