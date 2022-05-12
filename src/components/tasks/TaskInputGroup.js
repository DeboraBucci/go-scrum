import React from "react";
import { ErrorMessage } from "formik";
import TextError from "../errors/TextError";

const TaskInputGroup = ({ children, text, i, name }) => {
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

export default TaskInputGroup;
