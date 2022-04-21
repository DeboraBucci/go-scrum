import React from "react";

const TextError = (props) => {
  return (
    <p
      className="margin-t-tn "
      style={{ fontSize: "1.6rem", color: "crimson", maxWidth: "40rem" }}
    >
      {props.children}
    </p>
  );
};

export default TextError;
