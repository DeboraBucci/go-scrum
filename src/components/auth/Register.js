import React from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../UI/Hero";
import RegisterForm from "./RegisterForm";

const Register = () => {
  const navigate = useNavigate();

  const loginHandler = () => {
    navigate("/login", { replace: true });
  };

  return (
    <section className="form-container">
      <div className="form-container__content">
        <h2 className="heading--secondary margin-b-md">Registrarse</h2>
        <RegisterForm loginHandler={loginHandler} />
      </div>

      <Hero />
    </section>
  );
};

export default Register;
