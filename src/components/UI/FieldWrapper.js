import { ErrorMessage } from "formik";
import React from "react";
import TextError from "../errors/TextError";

const FieldWrapper = ({ children, text, i, name }) => {
  return (
    <div className="new-task__input-group">
      <label htmlFor={name}>
        <span className="hidden">{text}</span>
        <i className={i}></i>
      </label>

      {children}

      <ErrorMessage
        name={name}
        component={TextError}
        className={"new-task__input-group--err"}
      />
    </div>
  );
};

export default FieldWrapper;
