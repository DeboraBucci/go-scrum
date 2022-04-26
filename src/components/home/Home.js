import React, { useState } from "react";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import Tasks from "../tasks/Tasks";

const Home = () => {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")));

  const tasksHandler = (tasksArr) => {
    setTasks(tasksArr);
  };

  return (
    <div>
      <Header />
      <Tasks tasks={tasks} />
      <Sidebar tasksHandler={tasksHandler} />
    </div>
  );
};

export default Home;
