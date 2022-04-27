import React from "react";
import { useNavigate } from "react-router-dom";
import { users } from "../../data";

import Hero from "../UI/Hero";
import LoginForm from "./LoginForm";

const Login = ({ setLogged }) => {
  const navigate = useNavigate();

  const goToRegisterHandler = () => {
    navigate("/register", { replace: true });
  };

  const loginHandler = (values) => {
    const userExists = users.filter((user) => user.email === values.email);

    userExists.length !== 0 &&
      userExists[0].pw === values.password &&
      setLogged(userExists[0]);
  };

  return (
    <section className="form-container">
      <div className="form-container__content">
        <h2 className="heading--secondary margin-b-md">Iniciar Sesión</h2>
        <LoginForm
          registerHandler={goToRegisterHandler}
          loginHandler={loginHandler}
        />
      </div>

      <Hero />
    </section>
  );
};

export default Login;
