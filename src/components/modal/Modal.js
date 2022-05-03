import React from "react";

import ModalTitle from "./ModalTitle";
import ModalDifficulty from "./ModalDifficulty";
import ModalStatus from "./ModalStatus";
import ModalTime from "./ModalTime";
import ModalAuthor from "./ModalAuthor";
import ModalMembers from "./ModalMembers";
import ModalDescription from "./ModalDescription";
import ModalCTA from "./ModalCTA";

const Modal = ({ closeModal, curTask, setTasksHandler }) => {
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

      <ModalDifficulty curTask={curTask} saveHandler={saveHandler} />

      <ModalStatus curTask={curTask} saveHandler={saveHandler} />

      <ModalTime curTask={curTask} saveHandler={saveHandler} />

      <ModalAuthor curTask={curTask} />

      <ModalMembers curTask={curTask} saveHandler={saveHandler} />

      <ModalDescription curTask={curTask} saveHandler={saveHandler} />

      <ModalCTA
        curTask={curTask}
        setTasksHandler={setTasksHandler}
        closeModal={closeModal}
      />
    </div>
  );
};

export default Modal;
