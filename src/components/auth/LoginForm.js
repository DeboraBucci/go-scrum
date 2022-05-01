import React from "react";

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import TextError from "../errors/TextError";

const LoginForm = ({ registerHandler, loginHandler }) => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string()
      .min(6, "La contraseña debe tener al menos seis caracteres.")
      .required("Required"),
  });

  const onSubmit = (values) => {
    loginHandler(values);
  };

  const emailInput = (
    <>
      <div className="form__input-group">
        <label htmlFor="email">
          <span className="hidden">Email</span>
          <i className="fa-regular fa-at"></i>
        </label>
        <Field
          type="text"
          id="email"
          name="email"
          placeholder="Correo Electrónico"
        />
      </div>
      <ErrorMessage name="email" component={TextError} />
    </>
  );

  const passwordInput = (
    <>
      <div className="form__input-group">
        <label htmlFor="password">
          <span className="hidden">Contraseña</span>
          <i className="fa-solid fa-key"></i>
        </label>
        <Field
          type="password"
          id="password"
          name="password"
          placeholder="Contraseña"
        />
      </div>
      <ErrorMessage name="password" component={TextError} />
    </>
  );

  const cta = (
    <div className="form__cta">
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
      <Form className="form">
        <div>{emailInput}</div>
        <div>{passwordInput}</div>
        {cta}
      </Form>
    </Formik>
  );
};

export default LoginForm;
