import React, { useState } from "react";
import TasksForm from "./TasksForm";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  return (
    <section className="tasks">
      <div className="tasks__create">
        <h2 className="heading-secondary heading-secondary--tasks">
          Crear Nueva Tarea
        </h2>
        <TasksForm />
      </div>

      <div className="tasks__cards">
        <h2 className="heading-secondary">Tareas</h2>
        {tasks.length === 0 && (
          <div className="tasks__cards--empty">
            <i className="fa-regular fa-face-smile-beam "></i>
            <p>No tienes ninguna tarea!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Tasks;
