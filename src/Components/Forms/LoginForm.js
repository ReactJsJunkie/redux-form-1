import React from "react";
import { Field, reduxForm } from "redux-form";
import { renderField } from "./renderField";
import { asyncValidate } from "./asyncValidate";
import { ButtonGroup, Button, Alert, FormGroup } from "reactstrap";

const LoginForm = ({ handleSubmit, pristine, reset, submitting, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field name="email" type="email" component={renderField} label="Email" />
      <Field
        name="password"
        type="password"
        component={renderField}
        label="Password"
      />
      <FormGroup>
        {error && (
          <Alert color="danger" className="mt-2">
            {error}
          </Alert>
        )}
      </FormGroup>
      <ButtonGroup>
        <Button color="primary" type="submit" disabled={submitting}>
          Login
        </Button>
        <Button
          color="warning"
          type="button"
          disabled={pristine || submitting}
          onClick={reset}
        >
          Clear
        </Button>
      </ButtonGroup>
    </form>
  );
};

export default reduxForm({
  form: "login", // a unique identifier for this form
  asyncValidate
})(LoginForm);
