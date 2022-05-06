import React, { useState } from "react";
import { Form, Formik } from "formik";
import { Switch, FormControlLabel } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import * as Yup from "yup";

import AuthInputGroup from "./AuthInputGroup";
import { requiredMessage } from "../../data";

const RegisterForm = ({ loginHandler, registerHandler, dropdownsData }) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const initialValues = {
    userName: "",
    email: "",
    password: "",
    passwordCheck: "",
    role: "",
    continent: "",
    region: "",
    teamID: "",
  };

  const validationSchema = Yup.object({
    userName: Yup.string()
      .required(requiredMessage)
      .min(4, "El nombre debe tener al menos 4 caracteres.")
      .matches(/^([^0-9]*)$/, "El nombre de usuario no debe contener números."),
    email: Yup.string().email("Invalid email format").required(requiredMessage),
    password: Yup.string()
      .min(6, "La contraseña debe tener al menos 6 (seis) caracteres.")
      .required(requiredMessage)
      .matches(
        /(?=.*\d)(?=.*[A-Z])/,
        "La contraseña debe contar con al menos una letra en mayúsculas y un número."
      ),
    passwordCheck: Yup.string()
      .required(requiredMessage)
      .oneOf([Yup.ref("password"), null], "Las contraseñas no son idénticas."),
    role: Yup.string().required(requiredMessage),
    continent: Yup.string().required(requiredMessage),
    region: Yup.string().when("continent", {
      is: "America",
      then: Yup.string().required(requiredMessage),
    }),
  });

  const onSubmit = (values, { resetForm }) => {
    if (values.teamID === "") values.teamID = uuidv4();
    if (values.continent !== "America") values.region = "Otro";
    if (values.region === "Brasil") values.region = "Brazil";

    registerHandler(values);
    resetForm();
  };

  const switchChangeHandler = (e) => setIsSwitchOn(e.target.checked);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values }) => {
        return (
          <Form className="register__form">
            {/* USERNAME */}
            <div className="register__box register__box--1">
              <AuthInputGroup
                label="Nombre de Usuario"
                icon="fa-regular fa-user"
                name="userName"
              />
            </div>

            {/* EMAIL */}
            <div className="register__box register__box--2">
              <AuthInputGroup
                label="Correo Electrónico"
                icon="fa-regular fa-at"
                name="email"
              />
            </div>

            {/* PASSWORD */}
            <div className="register__box register__box--3">
              <AuthInputGroup
                label="Contraseña"
                icon="fa-solid fa-key"
                name="password"
              />
            </div>

            {/* PASSWORD CHECK */}
            <div className="register__box register__box--4">
              <AuthInputGroup
                label="Confirmar Contraseña"
                icon="fa-solid fa-key"
                name="passwordCheck"
              />
            </div>

            {/* CONTINENT */}
            <div className="register__box register__box--5">
              <AuthInputGroup
                as="select"
                label="Seleccione su continente"
                icon="fa-solid fa-earth-americas"
                name="continent"
              >
                <option defaultValue value="">
                  Seleccione su continente
                </option>
                {dropdownsData?.continente?.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </AuthInputGroup>
            </div>

            {/* ROLE */}
            <div className="register__box register__box--6">
              <AuthInputGroup
                as="select"
                label="Rol en el Equipo"
                icon="fa-solid fa-people-group"
                name="role"
              >
                <option defaultValue value="" className="special-select">
                  Seleccione su Rol en el Equipo
                </option>
                {dropdownsData?.Rol?.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </AuthInputGroup>
            </div>

            {/* REGION */}
            <div
              className={`register__box register__box--7 ${
                values.continent !== "America" && "hidden-input"
              }`}
            >
              <AuthInputGroup
                as="select"
                label="Seleccione su región"
                icon="fa-solid fa-location-dot"
                name="region"
              >
                <option defaultValue value="">
                  Seleccione su región
                </option>
                {dropdownsData?.region?.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </AuthInputGroup>
            </div>

            {/* SWITCH */}
            <div className="register__box register__box--8">
              <FormControlLabel
                control={<Switch size="big" color="secondary" />}
                label="Ya pertenenzo a un equipo"
                onChange={switchChangeHandler}
              />
            </div>

            {/* TEAM ID */}
            <div
              className={`register__box register__box--9 ${
                !isSwitchOn ? "disabled" : ""
              }`}
            >
              <AuthInputGroup
                label="Ingrese el ID de su equipo"
                icon="fa-solid fa-hashtag"
                name="teamID"
                disabled={!isSwitchOn}
              />
            </div>

            {/* CTA */}
            <div className="register__box register__box--10 margin-t-md">
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
          </Form>
        );
      }}
    </Formik>
  );
};

export default RegisterForm;
