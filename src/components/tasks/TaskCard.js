import React from "react";

const TaskCard = ({ task, openModal }) => {
  const membersEl =
    task.members !== "" &&
    task.members.map((member) => {
      const memberArr = member.trim().split(" ");
      const memberInitialsArr = memberArr.map((name) => name.slice(0, 1));
      const memberInitials =
        memberInitialsArr.length > 1
          ? memberInitialsArr[0] +
            memberInitialsArr[memberInitialsArr.length - 1]
          : memberInitialsArr[0];

      return (
        <div className="card__member" key={member}>
          <p>{memberInitials.toUpperCase()}</p>
          <span>{member.trim()}</span>
        </div>
      );
    });

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

      {task.minutes && (
        <div className="card__time">
          <i className="fa-solid fa-clock"></i>
          <span>
            {task.hours.toLocaleString("en-US", {
              minimumIntegerDigits: 2,
              useGrouping: false,
            })}
          </span>
          {task.hours && task.minutes && ":"}
          <span>
            {task.hours
              ? task.minutes.toLocaleString("en-US", {
                  minimumIntegerDigits: 2,
                  useGrouping: false,
                })
              : task.minutes}
          </span>
          <span> {task.hours ? "hs" : "mins"}</span>
        </div>
      )}

      {task.members && (
        <div className="card__members margin-t-tn">{membersEl}</div>
      )}

      <button className="card__btn" onClick={openModalHandler}>
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
};

export default TaskCard;
