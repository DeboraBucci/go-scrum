import React from "react";
import { useNavigate } from "react-router-dom";

import Hero from "../UI/Hero";
import LoginForm from "./LoginForm";
import SweetAlert from "../UI/SweetAlert";

const { REACT_APP_API_ENDPOINT } = process.env;

const Login = () => {
  const navigate = useNavigate();

  const goToRegisterHandler = () => {
    navigate("/register", { replace: true });
  };

  const loginHandler = (values) => {
    const { userName, password } = values;

    fetch(`${REACT_APP_API_ENDPOINT}auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status_code === 200) {
          localStorage.setItem("token", data.result?.token);
          localStorage.setItem("tasks", JSON.stringify([]));
          localStorage.setItem("user", JSON.stringify(data.result.user));

          navigate("/", { replace: true });
        } else {
          throw new Error();
        }
      })
      .catch(() =>
        SweetAlert({
          title: "Invalid credentials",
        })
      );
  };

  return (
    <section className="login">
      <div className="login__content">
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
