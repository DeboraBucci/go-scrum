import React, { useCallback, useEffect } from "react";
import Modal from "./Modal";

const Backdrop = ({ closeModal }) => {
  return <div onClick={closeModal} className="backdrop"></div>;
};

const Overlay = ({ closeModal, taskId, setTasksHandler }) => {
  // FIND CURRENT TASK
  const tasksArr = JSON.parse(localStorage.getItem("tasks"));
  const curTask = tasksArr.find((task) => task.id === taskId);

  // DETECT KEY PRESS
  const keywordHandler = useCallback(
    (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keywordHandler, false);
  }, [keywordHandler]);

  return (
    <div onKeyUpCapture={keywordHandler}>
      <Backdrop closeModal={closeModal} />
      <Modal
        setTasksHandler={setTasksHandler}
        closeModal={closeModal}
        curTask={curTask}
      />
    </div>
  );
};

export default Overlay;
