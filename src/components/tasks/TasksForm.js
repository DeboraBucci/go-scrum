import React from "react";

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import TextError from "../UI/TextError";

const TasksForm = () => {
  const initialValues = {
    name: "",
    status: "",
    difficulty: "",
    time: "",
    description: "",
    members: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    status: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  const nameInput = (
    <>
      <div className="form__input-group">
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
      </div>
      <ErrorMessage name="name" component={TextError} />
    </>
  );

  const statusDropdown = (
    <>
      <div className="form__input-group form__dropdown">
        <label htmlFor="status">
          <span className="hidden">Estado Actual de la Tarea</span>
          <i className="fa-solid fa-chart-simple"></i>
        </label>
        <Field as="select" id="status" name="status">
          <option defaultValue value="choose">
            Elije el Estado de la Tarea
          </option>
          <option value="backlog">Backlog</option>
          <option value="todo">To Do</option>
          <option value="doing">Doing</option>
          <option value="testing">Testing</option>
          <option value="codeReview">Code Review</option>
          <option value="done">Done</option>
        </Field>
        <i className="fa-solid fa-chevron-down form__dropdown--i"></i>
      </div>
      <ErrorMessage name="status" component={TextError} />
    </>
  );

  const difficultyDropdown = (
    <>
      <div className="form__input-group form__dropdown">
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
        <i className="fa-solid fa-chevron-down form__dropdown--i"></i>
      </div>
      <ErrorMessage name="difficulty" component={TextError} />
    </>
  );

  const descriptionInput = (
    <>
      <div className="form__input-group ">
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
      <ErrorMessage name="description" component={TextError} />
    </>
  );

  const membersInput = (
    <>
      <div className="form__input-group ">
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
      <ErrorMessage name="members" component={TextError} />
    </>
  );

  const timeInput = (
    <>
      <div className="form__input-group">
        <label htmlFor="time">
          <span className="hidden">Minutos que lleva realizar la tarea</span>
          <i className="fa-regular fa-clock"></i>
        </label>
        <Field
          type="number"
          id="time"
          name="time"
          placeholder="15 minutes"
          min="1"
          className="num-input"
        />
      </div>
      <ErrorMessage name="time" component={TextError} />
    </>
  );

  const cta = (
    <div className="form__cta">
      <button type="submit" className="button button--white">
        Crear
      </button>
      <button type="button" className="button button--cancel">
        Cancelar
      </button>
    </div>
  );

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className="tasks__form margin-t-md">
        <div>{nameInput}</div>
        <div>{statusDropdown}</div>
        <div>{difficultyDropdown}</div>
        <div>{timeInput}</div>
        <div>{descriptionInput}</div>
        <div>{membersInput}</div>
        {cta}
      </Form>
    </Formik>
  );
};

export default TasksForm;
