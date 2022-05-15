import React, { useState } from "react";

import FilterTasks from "./FilterTasks";
import TaskCard from "./TaskCard";

import { pickBackgroundImage } from "../../functions/pickBackgroundImage";

const Tasks = ({ tasks, openModal }) => {
  const [renderTasks, SetRenderTasks] = useState(tasks);

  const tasksEl = renderTasks.map((task) => (
    <TaskCard
      key={`${task.title}-${Math.random()}`}
      status={task.status}
      task={task}
      openModal={openModal}
    />
  ));

  const curUserBackground = pickBackgroundImage();

  return (
    <section className={`tasks ${curUserBackground}`}>
      <h2 className="heading--secondary">Tareas</h2>

      <FilterTasks SetRenderTasks={SetRenderTasks} tasks={tasks} />
      <div className="tasks__columns">
        <div className="tasks__status">
          <h3 className="heading--tertiary margin-b-tn">
            <i className="fa-solid fa-comments"></i> Backlog
          </h3>
          {tasksEl.filter((taskEl) => taskEl.props.status === "backlog")}
        </div>
        <div className="tasks__status">
          <h3 className="heading--tertiary margin-b-tn">
            <i className="fa-solid fa-thumbtack"></i> To Do
          </h3>
          {tasksEl.filter((taskEl) => taskEl.props.status === "todo")}
        </div>
        <div className="tasks__status">
          <h3 className="heading--tertiary margin-b-tn">
            <i className="fa-solid fa-list-check"></i> Doing
          </h3>
          {tasksEl.filter((taskEl) => taskEl.props.status === "doing")}
        </div>
        <div className="tasks__status">
          <h3 className="heading--tertiary margin-b-tn">
            <i className="fa-solid fa-flask-vial"></i> Testing
          </h3>
          {tasksEl.filter((taskEl) => taskEl.props.status === "testing")}
        </div>
        <div className="tasks__status">
          <h3 className="heading--tertiary margin-b-tn">
            <i className="fa-solid fa-magnifying-glass"></i> Code Review
          </h3>
          {tasksEl.filter((taskEl) => taskEl.props.status === "codeReview")}
        </div>
        <div className="tasks__status">
          <h3 className="heading--tertiary margin-b-tn">
            <i className="fa-solid fa-check"></i> Done
          </h3>
          {tasksEl.filter((taskEl) => taskEl.props.status === "done")}
        </div>
      </div>

      {tasks.length === 0 && (
        <div className="tasks__empty">
          <i className="fa-regular fa-face-smile-beam"></i>
          <p>No tienes ninguna tarea!</p>
        </div>
      )}
    </section>
  );
};

export default Tasks;
