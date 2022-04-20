import React from "react";
import Logo from "../../assets/go-scrum-logo-img.png";

const Login = () => {
  return (
    <section className="login">
      <form className="login__form">
        <h2>INICIAR SESION</h2>
      </form>

      <div className="login__brand ">
        <img src={Logo} alt="logo" className="login__img" />
        <h1 className="heading--primary">Go Scrum</h1>
      </div>
      <div className="wrapper">
        <div className="wave"></div>
      </div>
    </section>
  );
};

export default Login;
