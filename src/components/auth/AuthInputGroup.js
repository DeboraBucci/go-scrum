import React from "react";
import { ErrorMessage, Field } from "formik";
import TextError from "../errors/TextError";

const AuthInputGroup = ({ children, name, icon, label, as, disabled }) => {
  return (
    <>
      <div className="input-group">
        <label htmlFor={name}>
          <span className="hidden">{label}</span>
          <i className={icon}></i>
        </label>
        <Field
          as={as}
          type="text"
          id={name}
          name={name}
          placeholder={label}
          disabled={disabled}
        >
          {children}
        </Field>
      </div>
      <ErrorMessage name={name} component={TextError} />
    </>
  );
};

export default AuthInputGroup;
