import React from "react";

import { Form, Formik } from "formik";
import * as Yup from "yup";

import AuthInputGroup from "./AuthInputGroup";
import { requiredMessage } from "../../data";

const LoginForm = ({ registerHandler, loginHandler }) => {
  const initialValues = {
    userName: "",
    password: "",
  };

  const validationSchema = Yup.object({
    userName: Yup.string().required(requiredMessage),
    password: Yup.string()
      .min(6, "La contraseña debe tener al menos seis caracteres.")
      .required(requiredMessage),
  });

  const onSubmit = (values) => {
    loginHandler(values);
  };

  const userNameInput = (
    <AuthInputGroup
      label="Nombre de usuario"
      name="userName"
      icon="fa-solid fa-key"
    />
  );

  const passwordInput = (
    <AuthInputGroup
      label="Contraseña"
      name="password"
      icon="fa-solid fa-user"
    />
  );

  const cta = (
    <div className="login__cta margin-t-sm">
      <button type="submit" className="button button--purple">
        Iniciar Sesión
      </button>
      <button
        type="button"
        className="button button--underline"
        onClick={registerHandler}
      >
        Registrarse
      </button>
    </div>
  );

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className="login__form form">
        <div>{userNameInput}</div>
        <div>{passwordInput}</div>
        {cta}
      </Form>
    </Formik>
  );
};

export default LoginForm;
