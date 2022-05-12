import React from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

import TaskInputGroup from "./TaskInputGroup";

const AddNewTask = ({ close, tasksHandler, closeSidebarHandler }) => {
  const initialValues = {
    name: "",
    status: "",
    difficulty: "",
    importance: "",
    description: "",
    members: "",
    time: {
      hs: "",
      mins: "",
    },
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("*Requerido"),
    status: Yup.string().required("*Requerido"),
  });

  const onSubmit = (values) => {
    tasksHandler(values);
    closeSidebarHandler();
  };

  const form = (
    <Form className="new-task__form">
      <div className="new-task__content">
        {/* NAME INPUT */}
        <TaskInputGroup
          name="name"
          text="Nombre de la Tarea"
          i="fa-solid fa-feather-pointed"
        >
          <Field
            type="text"
            id="name"
            name="name"
            placeholder="Nombre de la Tarea"
          />
        </TaskInputGroup>

        {/* STATUS DROPDOWN */}
        <TaskInputGroup
          name="status"
          text="Estado Actual de la Tarea"
          i="fa-solid fa-chart-simple"
        >
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
        </TaskInputGroup>

        {/* IMPORTANCE INPUT */}
        <TaskInputGroup
          name="importance"
          text="Estado Actual de la Tarea"
          i="fa-solid fa-circle-exclamation"
        >
          <Field as="select" id="importance" name="importance">
            <option defaultValue value="choose">
              Elige la importancia de la tarea
            </option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </Field>
        </TaskInputGroup>

        {/* DIFFICULTY DROPDOWN */}
        <TaskInputGroup
          name="difficulty"
          text="Dificultad de la Tarea"
          i="fa-solid fa-layer-group"
        >
          <Field as="select" id="difficulty" name="difficulty">
            <option defaultValue value="">
              Dificultad de la Tarea
            </option>
            <option value="trivial">Trivial</option>
            <option value="easy">Fácil</option>
            <option value="medium">Mediana</option>
            <option value="hard">Difícil</option>
            <option value="epic">Épica</option>
          </Field>
        </TaskInputGroup>

        {/* TIME INPUTS  */}
        <div className="new-task__input-group">
          <i className="fa-regular fa-clock"></i>

          <div className="new-task__input-group--time">
            <label htmlFor="hours">
              <span className="hidden">
                Minutos que lleva realizar la tarea
              </span>
            </label>
            <Field
              type="number"
              id="hours"
              name="time.hs"
              placeholder="hours"
              min="0"
              className="num-input"
            />

            <span>:</span>

            <label htmlFor="minutes">
              <span className="hidden">
                Minutos que lleva realizar la tarea
              </span>
            </label>
            <Field
              type="number"
              id="minutes"
              name="time.mins"
              placeholder="minutes"
              min="1"
              max="59"
              className="num-input"
            />
          </div>
        </div>

        {/* DESCRIPTION INPUT  */}
        <TaskInputGroup
          name="description"
          text="Descripción"
          i="fa-solid fa-quote-left"
        >
          <Field
            as="textarea"
            rows="5"
            cols="33"
            id="description"
            name="description"
            placeholder="Descripción"
          />
        </TaskInputGroup>

        {/* MEMBERS INPUT  */}
        <TaskInputGroup
          name="members"
          text="Miembros"
          i="fa-solid fa-people-group"
        >
          <Field
            as="textarea"
            id="members"
            name="members"
            placeholder="José Gonzales, Daniela Mendoza, ..."
          />
        </TaskInputGroup>
      </div>

      <div className="new-task__cta">
        <button
          type="submit"
          className="button button--white new-task__cta--create"
        >
          Crear
        </button>
        <button type="button" className="button button--cancel" onClick={close}>
          Cancelar
        </button>
      </div>
    </Form>
  );

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {form}
    </Formik>
  );
};

export default AddNewTask;
