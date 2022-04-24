import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Hero from "../UI/Hero";
import RegisterForm from "./RegisterForm";

const Register = () => {
  const navigate = useNavigate();

  const goToLoginHandler = () => {
    navigate("/login", { replace: true });
  };

  const registerHandler = (values) => {
    Swal.fire({
      position: "top-start",
      icon: "success",
      title: "You've been registered!",
      showConfirmButton: false,
      timer: 1500,
      toast: true,
      customClass: "swal",
    });
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
