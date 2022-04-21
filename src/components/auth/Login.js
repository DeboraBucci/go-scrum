import React from "react";
import { useNavigate } from "react-router-dom";

import Hero from "../UI/Hero";
import LoginForm from "./LoginForm";

const Login = () => {
  const navigate = useNavigate();

  const goToRegisterHandler = () => {
    navigate("/register", { replace: true });
  };

  const loginHandler = (values) => {
    console.log(values);
  };

  return (
    <section className="form-container">
      <div className="form-container__content">
        <h2 className="heading-secondary margin-b-md">Iniciar Sesión</h2>
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
