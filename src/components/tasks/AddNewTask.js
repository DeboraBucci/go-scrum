import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import TextError from "../UI/TextError";

const AddNewTask = ({ close }) => {
  const initialValues = {
    name: "",
    status: "",
    difficulty: "",
    hours: "",
    minutes: "",
    description: "",
    members: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("*Requerido"),
    status: Yup.string().required("*Requerido"),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  const nameInput = (
    <div className="new-task__input-group">
      <label htmlFor="name">
        <span className="hidden">Nombre de la Tarea</span>
        <i className="fa-solid fa-feather-pointed"></i>
      </label>
      <Field
        type="text"
        id="name"
        name="name"
        placeholder="Nombre de la Tarea"
      />
      <ErrorMessage
        name="name"
        component={TextError}
        className={"new-task__input-group--err"}
      />
    </div>
  );

  const statusDropdown = (
    <div className="new-task__input-group">
      <label htmlFor="status">
        <span className="hidden">Estado Actual de la Tarea</span>
        <i className="fa-solid fa-chart-simple"></i>
      </label>
      <Field as="select" id="status" name="status">
        <option defaultValue value="choose">
          Elige el Estado de la Tarea
        </option>
        <option value="backlog">Backlog</option>
        <option value="todo">To Do</option>
        <option value="doing">Doing</option>
        <option value="testing">Testing</option>
        <option value="codeReview">Code Review</option>
        <option value="done">Done</option>
      </Field>
      <ErrorMessage
        name="status"
        component={TextError}
        className={"new-task__input-group--err"}
      />
    </div>
  );

  const difficultyDropdown = (
    <div className="new-task__input-group">
      <label htmlFor="difficulty">
        <span className="hidden">Dificultad de la Tarea</span>
        <i className="fa-solid fa-layer-group"></i>
      </label>
      <Field as="select" id="difficulty" name="difficulty">
        <option defaultValue value="choose">
          Dificultad de la Tarea
        </option>
        <option value="trivial">Trivial</option>
        <option value="easy">Fácil</option>
        <option value="medium">Mediana</option>
        <option value="hard">Difícil</option>
        <option value="epic">Épica</option>
      </Field>
    </div>
  );

  const descriptionInput = (
    <div className="new-task__input-group">
      <label htmlFor="description">
        <span className="hidden">Descripción</span>
        <i className="fa-solid fa-quote-left"></i>
      </label>
      <Field
        as="textarea"
        rows="5"
        cols="33"
        id="description"
        name="description"
        placeholder="Descripción"
      />
    </div>
  );

  const membersInput = (
    <div className="new-task__input-group">
      <label htmlFor="members">
        <span className="hidden">Miembros</span>
        <i className="fa-solid fa-people-group"></i>
      </label>
      <Field
        as="textarea"
        id="members"
        name="members"
        placeholder="José Gonzales / Daniela Mendoza / ..."
      />
    </div>
  );

  const timeInput = (
    <div className="new-task__input-group">
      <i className="fa-regular fa-clock"></i>

      <div className="new-task__input-group--time">
        <label htmlFor="hours">
          <span className="hidden">Minutos que lleva realizar la tarea</span>
        </label>
        <Field
          type="number"
          id="hours"
          name="hours"
          placeholder="2"
          min="0"
          className="num-input"
        />
        <span>hs</span>

        <label htmlFor="minutes">
          <span className="hidden">Minutos que lleva realizar la tarea</span>
        </label>
        <Field
          type="number"
          id="minutes"
          name="minutes"
          placeholder="15"
          min="1"
          max="59"
          className="num-input"
        />
        <span>mins</span>
      </div>
    </div>
  );

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className="new-task__form">
        <h2 className="heading--secondary new-task__heading">
          Crear Nueva Tarea
        </h2>

        <div className="new-task__content">
          {nameInput}
          {statusDropdown}
          {difficultyDropdown}
          {timeInput}
          {descriptionInput}
          {membersInput}
        </div>

        <div className="new-task__cta">
          <button
            type="submit"
            className="button button--white new-task__cta--create"
          >
            Crear
          </button>
          <button
            type="button"
            className="button button--cancel"
            onClick={close}
          >
            Cancelar
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default AddNewTask;
