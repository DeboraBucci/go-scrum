import React from "react";
import Swal from "sweetalert2";

const ModalCTA = ({ curTask, setTasksHandler, closeModal }) => {
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

  const closeModalHandler = () => {
    closeModal();
  };

  return (
    <div className="modal-cta">
      <button onClick={closeModalHandler}>
        <i className="fa-solid fa-xmark modal-cta__btn-close"></i>
      </button>

      <button className="modal-cta__btn-delete" onClick={deleteTaskHandler}>
        Borrar
      </button>
    </div>
  );
};

export default ModalCTA;
