import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/go-scrum-logo-img.png";

const Error404 = () => {
  return (
    <div className="error404">
      <img className="error404__logo margin-b-md" src={Logo} alt="Logo" />
      <h2 className="error404__heading">404</h2>
      <p className="error404__text">Page not Found</p>

      <Link className="error404__link margin-t-md" to="/">
        Go Back Home
      </Link>
    </div>
  );
};

export default Error404;
