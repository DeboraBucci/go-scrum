import React from "react";
import Swal from "sweetalert2";

import ModalTitle from "./ModalTitle";

const Modal = ({ closeModal, curTask, setTasksHandler }) => {
  const closeModalHandler = () => {
    closeModal();
  };

  const isTimeSpecified = curTask.hours || curTask.minutes || false;

  const status = () =>
    (curTask.status === "codeReview" && "Code Review") ||
    (curTask.status === "todo" && "To Do") ||
    curTask.status;

  const statusIcon = () => {
    switch (curTask.status) {
      case "backlog":
        return "comments";

      case "todo":
        return "thumbtack";

      case "doing":
        return "list-check";

      case "testing":
        return "flask-vial";

      case "codeReview":
        return "magnifying-glass";

      case "done":
        return "check";

      default:
        return "";
    }
  };

  const deleteTaskHandler = () => {
    Swal.fire({
      title: "Estás seguro?",
      text: "No podrás recuperar la tarea una vez eliminada!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, borrala!",
      customClass: "swal",
    }).then((result) => {
      if (result.isConfirmed) {
        const filteredArr = JSON.parse(localStorage.getItem("tasks")).filter(
          (task) => task.id !== curTask.id
        );

        localStorage.setItem("tasks", JSON.stringify(filteredArr));
        setTasksHandler(filteredArr);

        closeModalHandler();

        Swal.fire({
          title: "Borrada!",
          text: "La tarea ha sido borrada.",
          icon: "success",
          customClass: "swal",
        });
      }
    });
  };

  const saveHandler = () => {
    const editedTasks = JSON.parse(localStorage.getItem("tasks")).map((task) =>
      task.id !== curTask.id ? task : curTask
    );

    localStorage.setItem("tasks", JSON.stringify(editedTasks));

    setTasksHandler(editedTasks);
  };

  return (
    <div className={`modal ${curTask.difficulty}`}>
      <ModalTitle curTask={curTask} saveHandler={saveHandler} />

      <p className={`modal__difficulty ${curTask.difficulty}`}>
        {curTask.difficulty !== "" ? (
          curTask.difficulty
        ) : (
          <span className="modal__unkown">
            <i className="fa-solid fa-circle-question"></i> Dificultad
            Desconocida
          </span>
        )}
      </p>

      {isTimeSpecified && (
        <div className="modal__time">
          <i className="fa-regular fa-clock"></i>
          <p className="modal__time--hours">
            {curTask.hours.toLocaleString("en-US", {
              minimumIntegerDigits: 2,
              useGrouping: false,
            })}
          </p>
          {curTask.hours && <span>:</span>}
          <p className="modal__time--minutes">
            {curTask.minutes.toLocaleString("en-US", {
              minimumIntegerDigits: 2,
              useGrouping: false,
            })}
          </p>
          {(curTask.hours && <span>hs</span>) || <span>mins</span>}
        </div>
      )}
      {!isTimeSpecified && (
        <span className="modal__unkown">
          <i className="fa-solid fa-circle-question"></i> Tiempo no especificado
        </span>
      )}

      <p className="modal__status">
        <i className={`fa-solid fa-${statusIcon()}`}></i> {status()}
      </p>
      <p className="modal__description">{curTask.description}</p>

      <div className="modal__people">
        <div className="modal__group">
          <p className="modal__group--title">Autor</p>
          <div className="modal__group--content">
            <p key={curTask.author}>{curTask.author}</p>
          </div>
        </div>

        <div className="modal__group">
          <p className="modal__group--title">Miembros</p>

          <div className="modal__group--content">
            {curTask.members.length === 0 && (
              <p>No hay ningún miembro para esta tarea.</p>
            )}

            {curTask.members !== "" && curTask.members[0] !== "" && (
              <div className="modal__members">
                {curTask.members.map((member) => (
                  <p key={member}>
                    {member} <i className="fa-solid fa-xmark"></i>
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="modal__cta">
        <button onClick={closeModalHandler}>
          <i className="fa-solid fa-xmark modal__btn--x"></i>
        </button>

        <button
          className="modal__btn modal__btn--delete"
          onClick={deleteTaskHandler}
        >
          Borrar
        </button>
      </div>
    </div>
  );
};

export default Modal;
