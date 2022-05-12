import React from "react";

import ModalTitle from "./ModalTitle";
import ModalDifficulty from "./ModalDifficulty";
import ModalStatus from "./ModalStatus";
import ModalTime from "./ModalTime";
import ModalAuthor from "./ModalAuthor";
import ModalMembers from "./ModalMembers";
import ModalDescription from "./ModalDescription";
import SweetAlert from "../UI/SweetAlert";

import Swal from "sweetalert2";

const Modal = ({ closeModal, curTask, setTasksHandler }) => {
  const saveHandler = () => {
    const editedTasks = JSON.parse(localStorage.getItem("tasks")).map((task) =>
      task.id !== curTask.id ? task : curTask
    );

    localStorage.setItem("tasks", JSON.stringify(editedTasks));
    setTasksHandler(editedTasks);
  };

  const deleteTaskHandler = () => {
    Swal.fire({
      title: "Estás seguro?",
      text: "No podrás recuperar la tarea una vez eliminada!",
      icon: "warning",
      showCancelButton: true,
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

        SweetAlert({
          title: "Borrada!",
          text: "La tarea ha sido borrada.",
          icon: "success",
        });
      }
    });
  };

  const closeModalHandler = () => {
    closeModal();
  };

  return (
    <div className={`modal ${curTask.difficulty}`}>
      <ModalTitle curTask={curTask} saveHandler={saveHandler} />
      <ModalDifficulty curTask={curTask} saveHandler={saveHandler} />
      <ModalStatus curTask={curTask} saveHandler={saveHandler} />
      <ModalTime curTask={curTask} saveHandler={saveHandler} />
      <ModalAuthor curTask={curTask} />
      <ModalMembers curTask={curTask} saveHandler={saveHandler} />
      <ModalDescription curTask={curTask} saveHandler={saveHandler} />

      <div className="modal-cta">
        <button onClick={closeModalHandler}>
          <i className="fa-solid fa-xmark modal-cta__btn-close"></i>
        </button>

        <button className="modal-cta__btn-delete" onClick={deleteTaskHandler}>
          Borrar
        </button>
      </div>
    </div>
  );
};

export default Modal;
