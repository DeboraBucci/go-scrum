import React, { useState } from "react";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import Overlay from "../UI/Overlay";
import Tasks from "../tasks/Tasks";

const Home = ({ user }) => {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")));
  const [modalIsOpened, setModalIsOpened] = useState(false);
  const [taskId, setTaskId] = useState(null);

  const setTasksHandler = (tasks) => {
    setTasks(tasks);
  };

  const tasksHandler = (values) => {
    // COPY
    const taskObj = { ...values };

    // AUTHOR
    taskObj.author = user.name;

    // ID
    taskObj.id =
      taskObj.name
        .split(" ")
        .map((n) => n.trim(" "))
        .join("") + Date.now();

    // MEMBERS
    if (taskObj.members === "") taskObj.members = [];
    if (taskObj.members.length > 0) {
      const membersArr = taskObj.members
        .toLowerCase()
        .split(",")
        .map((member) => {
          const mName = member
            .split(" ")
            .filter((n) => n !== "")
            .map((n) => n[0].toUpperCase() + n.slice(1))
            .join(" ");

          return mName;
        })
        .filter((n) => n !== "");

      const uniqueMembers = new Set(membersArr);
      taskObj.members = [...uniqueMembers];
    }

    // UPDATE TASKS
    const tasksArr = JSON.parse(localStorage.getItem("tasks"));
    tasksArr.push(taskObj);
    localStorage.setItem("tasks", JSON.stringify(tasksArr));

    setTasksHandler(JSON.parse(localStorage.getItem("tasks")));
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
      <Header user={user} />
      <Tasks tasks={tasks} openModal={openModalHandler} />
      <Sidebar tasksHandler={tasksHandler} />
      {modalIsOpened && (
        <Overlay
          setTasksHandler={setTasksHandler}
          tasks={tasks}
          closeModal={closeModalHandler}
          taskId={taskId}
        />
      )}
    </div>
  );
};

export default Home;
