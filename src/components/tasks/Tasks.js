import React, { useState } from "react";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  return (
    <section className="tasks">
      <h2 className="heading--secondary">Tareas</h2>

      <div className="tasks__columns">
        <div className="tasks__status">
          <h3 className="heading--tertiary ">
            <i className="fa-solid fa-comments"></i> Backlog
          </h3>
        </div>
        <div className="tasks__status">
          <h3 className="heading--tertiary">
            <i className="fa-solid fa-thumbtack"></i> To Do
          </h3>
        </div>
        <div className="tasks__status">
          <h3 className="heading--tertiary">
            <i className="fa-solid fa-list-check"></i> Doing
          </h3>
        </div>
        <div className="tasks__status">
          <h3 className="heading--tertiary">
            <i className="fa-solid fa-flask-vial"></i> Testing
          </h3>
        </div>
        <div className="tasks__status">
          <h3 className="heading--tertiary">
            <i className="fa-solid fa-magnifying-glass"></i> Code Review
          </h3>
        </div>
        <div className="tasks__status">
          <h3 className="heading--tertiary">
            <i className="fa-solid fa-check"></i> Done
          </h3>
        </div>
      </div>

      {tasks.length === 0 && (
        <div className="tasks__empty">
          <i className="fa-regular fa-face-smile-beam "></i>
          <p>No tienes ninguna tarea!</p>
        </div>
      )}
    </section>
  );
};

export default Tasks;
