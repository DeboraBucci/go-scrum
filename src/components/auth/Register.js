import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Hero from "../UI/Hero";
import SweetAlert from "../UI/SweetAlert";
import RegisterForm from "./RegisterForm";

const { REACT_APP_API_ENDPOINT } = process.env;

const Register = () => {
  const [dropdownsData, setDropdownsData] = useState([]);

  useEffect(() => {
    fetch(`${REACT_APP_API_ENDPOINT}auth/data`)
      .then((response) => response.json())
      .then((data) => {
        setDropdownsData(data.result);
      });
  }, []);

  const navigate = useNavigate();

  const goToLoginHandler = () => navigate("/login", { replace: true });

  const registerHandler = async (values) => {
    try {
      const response = await fetch(`${REACT_APP_API_ENDPOINT}auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            userName: values.userName,
            email: values.email,
            password: values.password,
            teamID: values.teamID,
            role: values.role,
            continent: values.continent,
            region: values.region,
          },
        }),
      });

      const data = await response.json();

      // IF OK
      if (response.ok) toast("🦄 Te registraste con éxito!");
      // IF CONFLICT
      else if (data.status_code === 409)
        throw new Error(
          "El correo electrónico que ingresaste ya está registrado."
        );
      // IF NOT OK
      else throw new Error("");
    } catch (err) {
      SweetAlert({
        title: "Something went wrong",
        text: err.message,
      });
    }
  };

  return (
    <section className="register">
      <div className="register__content">
        <h2 className="heading--secondary margin-b-hg">Registrarse</h2>
        <RegisterForm
          loginHandler={goToLoginHandler}
          registerHandler={registerHandler}
          dropdownsData={dropdownsData}
        />
      </div>

      <Hero />

      <ToastContainer />
    </section>
  );
};

export default Register;
