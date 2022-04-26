import React, { useState } from "react";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import Overlay from "../UI/Overlay";
import Tasks from "../tasks/Tasks";

const Home = () => {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")));
  const [modalIsOpened, setModalIsOpened] = useState(false);
  const [taskId, setTaskId] = useState(null);

  const tasksHandler = (tasksArr) => {
    setTasks(tasksArr);
  };

  const openModalHandler = (id) => {
    setTaskId(id);
    setModalIsOpened(true);
  };

  const closeModalHandler = () => {
    setModalIsOpened(false);
  };

  return (
    <div>
      <Header />
      <Tasks tasks={tasks} openModal={openModalHandler} />
      <Sidebar tasksHandler={tasksHandler} />
      {modalIsOpened && (
        <Overlay tasks={tasks} closeModal={closeModalHandler} taskId={taskId} />
      )}
    </div>
  );
};

export default Home;
