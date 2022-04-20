import React from "react";

const TextError = (props) => {
  return (
    <p style={{ fontSize: "1.6rem", color: "crimson" }}>{props.children}</p>
  );
};

export default TextError;
