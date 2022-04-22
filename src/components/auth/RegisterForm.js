import React from "react";

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import TextError from "../UI/TextError";

const RegisterForm = ({ loginHandler, registerHandler }) => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    passwordCheck: "",
    role: "",
    code: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("*Requerido")
      .min(4, "El nombre de usuario debe tener al menos 4 (cuatro) caracteres.")
      .matches(/^([^0-9]*)$/, "El email no debe contener ningún número."),
    email: Yup.string().email("Invalid email format").required("*Requerido"),
    password: Yup.string()
      .min(6, "La contraseña debe tener al menos 6 (seis) caracteres.")
      .required("*Requerido")
      .matches(
        /(?=.*\d)(?=.*[A-Z])/,
        "La contraseña debe contar con al menos una letra en mayúsculas y un número."
      ),
    passwordCheck: Yup.string()
      .required("*Requerido")
      .oneOf([Yup.ref("password"), null], "Las contraseñas no son idénticas."),
  });

  const onSubmit = (values) => {
    registerHandler(values);
  };

  const nameInput = (
    <>
      <div className="form__input-group">
        <label htmlFor="name">
          <span className="hidden">Nombre</span>
          <i className="fa-regular fa-user"></i>
        </label>
        <Field
          type="text"
          id="name"
          name="name"
          placeholder="Nombre de Usuario"
        />
      </div>
      <ErrorMessage name="name" component={TextError} />
    </>
  );

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

  const checkPasswordInput = (
    <>
      <div className="form__input-group">
        <label htmlFor="passwordCheck">
          <span className="hidden">Confirmar Contraseña</span>
          <i className="fa-solid fa-key"></i>
        </label>
        <Field
          type="password"
          id="passwordCheck"
          name="passwordCheck"
          placeholder="Confirmar Contraseña"
        />
      </div>
      <ErrorMessage name="passwordCheck" component={TextError} />
    </>
  );

  const roleDropdown = (
    <>
      <div className="form__input-group form__dropdown">
        <label htmlFor="role">
          <span className="hidden">Rol en el Equipo</span>
          <i className="fa-solid fa-people-group"></i>
        </label>
        <Field as="select" id="role" name="role">
          <option defaultValue value="choose">
            Elige tu Rol en el Equipo
          </option>
          <option value="leader">Líder (tech leader)</option>
          <option value="member">Miembro (team member)</option>
        </Field>
        <i className="fa-solid fa-chevron-down form__dropdown--i"></i>
      </div>
      <ErrorMessage name="role" component={TextError} />
    </>
  );

  const codeInput = (
    <>
      <div className="form__input-group">
        <label htmlFor="code">
          <span className="hidden">Código de Usuario</span>
          <i className="fa-solid fa-hashtag"></i>
        </label>
        <Field
          type="text"
          id="code"
          name="code"
          placeholder="Código de Usuario"
        />
      </div>
      <ErrorMessage name="nombre" component={TextError} />
    </>
  );

  const ctaButtons = (
    <div className="form__cta">
      <button type="submit" className="button button--purple">
        Registrarse
      </button>
      <button
        type="button"
        className="button button--underline"
        onClick={loginHandler}
      >
        Log In
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
        <div>{nameInput}</div>
        <div>{emailInput}</div>
        <div>{passwordInput}</div>
        <div>{checkPasswordInput}</div>
        <div>{roleDropdown}</div>
        <div>{codeInput}</div>
        <div>{ctaButtons}</div>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
