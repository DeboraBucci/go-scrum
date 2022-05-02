import React from "react";
import { nameInitials } from "../../functions/nameInitials";

const TaskCard = ({ task, openModal }) => {
  const openModalHandler = () => {
    openModal(task.id);
  };

  return (
    <div className={`card ${task.difficulty}`}>
      <h4 className="card__title margin-b-tn">{task.name}</h4>
      <p className={`card__difficulty ${task.difficulty}`}>{task.difficulty}</p>
      <p className="card__description">
        {task.description.length > 100
          ? task.description.slice(0, 97) + "..."
          : task.description}
      </p>

      <div className="card__time">
        <i className="fa-solid fa-clock"></i>
        <span>{task.time.hs}</span>

        {task.time.hs && task.time.mins ? ":" : ""}

        <span>{task.time.mins}</span>

        <span> {task.time.hs ? "hs" : "mins"}</span>
      </div>

      <div className="card__members margin-t-tn">
        <div className="card__member card__member--author">
          <i className="fa-solid fa-crown"></i>
          <p>{nameInitials(task.author)}</p>
          <span>{task.author}</span>
        </div>

        {task.members.map((member) => (
          <div className="card__member" key={member + Date.now()}>
            <p>{nameInitials(member)}</p>
            <span>{member}</span>
          </div>
        ))}
      </div>
      <button className="card__btn" onClick={openModalHandler}>
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
};

export default TaskCard;
