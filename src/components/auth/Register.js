import React from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../UI/Hero";
import RegisterForm from "./RegisterForm";

const Register = () => {
  const navigate = useNavigate();

  const goToLoginHandler = () => {
    navigate("/login", { replace: true });
  };

  const registerHandler = (values) => {
    console.log(values);
  };

  return (
    <section className="form-container">
      <div className="form-container__content">
        <h2 className="heading--secondary margin-b-md">Registrarse</h2>
        <RegisterForm
          loginHandler={goToLoginHandler}
          registerHandler={registerHandler}
        />
      </div>

      <Hero />
    </section>
  );
};

export default Register;
