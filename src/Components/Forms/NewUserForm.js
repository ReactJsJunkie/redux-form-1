import React from "react";
import { Field, reduxForm } from "redux-form";
import { renderField } from "./renderField";
import { asyncValidate } from "./asyncValidate";

const NewUserForm = props => {
  const { handleSubmit, pristine, reset, submitting, error } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="username"
        type="text"
        component={renderField}
        label="Username"
      />
      <Field name="email" type="email" component={renderField} label="Email" />
      <Field name="age" type="number" component={renderField} label="Age" />
      <Field
        name="password"
        type="password"
        component={renderField}
        label="Password"
      />
      <Field
        name="confirmpass"
        type="password"
        component={renderField}
        label="Confirm Password"
      />
      {error && <span style={{ color: "red" }}>{error}</span>}
      <div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "newuser", // a unique identifier for this form
  asyncValidate
})(NewUserForm);
