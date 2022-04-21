import React from "react";

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import TextError from "../UI/TextError";

const LoginForm = ({ registerHandler }) => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string()
      .min(6)
      .required("Required")
      .matches(
        /(?=.*\d)(?=.*[A-Z])/,
        "La contraseña debe contar con al menos una letra en mayúsculas y un número."
      ),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  const emailInput = (
    <div>
      <div className="form__input-group">
        <label htmlFor="email">Email</label>
        <Field
          type="text"
          id="email"
          name="email"
          placeholder="pepe@example.com"
        />
      </div>
      <ErrorMessage name="email" component={TextError} />
    </div>
  );

  const passwordInput = (
    <div>
      <div className="form__input-group">
        <label htmlFor="password">Contraseña</label>
        <Field
          type="password"
          id="password"
          name="password"
          placeholder="Pepe123!"
        />
      </div>
      <ErrorMessage name="password" component={TextError} />
    </div>
  );

  const cta = (
    <div className="login__cta">
      <button type="submit" className="login__button login__button--login">
        Iniciar Sesión
      </button>
      <button
        type="button"
        className="login__button login__button--register"
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
        {emailInput}
        {passwordInput}
        {cta}
      </Form>
    </Formik>
  );
};

export default LoginForm;
