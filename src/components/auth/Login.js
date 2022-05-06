import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import Hero from "../UI/Hero";
import LoginForm from "./LoginForm";

const { REACT_APP_API_ENDPOINT } = process.env;

const Login = ({ setLogged }) => {
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
        console.log(data);
        if (data.status_code === 200) {
          localStorage.setItem("token", data.result?.token);
          localStorage.setItem("userName", data?.result?.user.userName);
          localStorage.setItem("user", JSON.stringify(data));

          navigate("/", { replace: true });
        } else {
          throw new Error();
        }
      })
      .catch(() =>
        Swal.fire({
          icon: "error",
          title: "Invalid credentials",
          customClass: "swal",
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
