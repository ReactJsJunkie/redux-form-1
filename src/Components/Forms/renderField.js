import React from "react";
import { Input, FormGroup, Spinner, Alert } from "reactstrap";

export const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, asyncValidating }
}) => (
  <FormGroup>
    {error && touched ? (
      <Input {...input} placeholder={label} type={type} invalid />
    ) : !error && touched ? (
      <Input {...input} placeholder={label} type={type} valid />
    ) : (
      <Input {...input} placeholder={label} type={type} />
    )}
    {touched &&
      ((error && (
        <Alert color="danger" className="mt-3">
          {error}
        </Alert>
      )) ||
        (asyncValidating && (
          <Alert color="warning" className="mt-3">
            <Spinner />
            <br />
            Validating . . .
          </Alert>
        )))}
  </FormGroup>
);
