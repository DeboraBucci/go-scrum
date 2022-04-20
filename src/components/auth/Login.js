import React from "react";
import { useNavigate } from "react-router-dom";

import Hero from "../UI/Hero";
import LoginForm from "./LoginForm";

const Login = () => {
  const navigate = useNavigate();

  const registerHandler = () => {
    navigate("/register", { replace: true });
  };

  return (
    <section className="login">
      <div className="login__content">
        <h2 className="heading--secondary margin-b-md">Iniciar Sesión</h2>
        <LoginForm registerHandler={registerHandler} />
      </div>

      <Hero />
    </section>
  );
};

export default Login;
