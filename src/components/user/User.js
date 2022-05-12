import React, { useState } from "react";
import { Link } from "react-router-dom";

const User = () => {
  const [copyMessage, setCopyMessage] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));

  const info = [
    {
      title: "Nombre",
      value: user.userName,
    },

    {
      title: "Email",
      value: user.email,
    },

    {
      title: "Continente",
      value: user.continent,
    },

    {
      title: "Región",
      value: user.region,
    },
    {
      title: "Rol",
      value: user.role,
    },
  ];

  const paragraphs = info.map(({ title, value }, i) => (
    <p key={`${title}-${i}`} className="user__paragraph">
      <span className="user__paragraph--1">{title}</span>
      <code className="user__paragraph--2">{value}</code>
    </p>
  ));

  const timeoutHandler = () => {
    setTimeout(() => {
      setCopyMessage("");
    }, 1000);
  };

  const copyIDHandler = () => {
    navigator.clipboard.writeText(user.teamID);
    setCopyMessage("Copied!");
    timeoutHandler();
  };

  return (
    <div className="user">
      <div className="user__content">
        <Link className="user__home" to="/">
          <i className="fa-solid fa-house"></i>
        </Link>

        <Link className="user__settings" to="/user">
          <i className="fa-solid fa-gear"></i>
        </Link>

        <div>
          <h2 className="user__title">Profile</h2>

          <div className="user__picture-box margin-t-tn">
            <p className="user__picture">
              <i className="fa-regular fa-user"></i>
            </p>
          </div>
        </div>

        <div className="user__text">{paragraphs}</div>

        <div>
          <div className="user__team-id">
            <span>El ID de tu team es</span> <code>{user.teamID}</code>
            <i onClick={copyIDHandler} className="fa-solid fa-clipboard"></i>
            {copyMessage !== "" && (
              <p className="user__copy-message">{copyMessage}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
