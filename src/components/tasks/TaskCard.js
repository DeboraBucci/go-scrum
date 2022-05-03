import React from "react";
import { nameInitials } from "../../functions/nameInitials";

const TaskCard = ({ task, openModal }) => {
  const openModalHandler = () => openModal(task.id);

  // TITLE ---------------------------
  const title = <h4 className="card__title margin-b-tn">{task.name}</h4>;

  // DIFFICULTY ----------------------
  const difficulty = (
    <p className={`card__difficulty ${task.difficulty}`}>{task.difficulty}</p>
  );

  // DESCRIPTION ---------------------
  const description = (
    <p className="card__description">
      {task.description.length > 100
        ? task.description.slice(0, 97) + "..."
        : task.description}
    </p>
  );

  // TIME ----------------------------
  const time = (task.time.mins > 0 || task.time.hs > 0) && (
    <div className="card__time">
      <i className="fa-solid fa-clock"></i>
      <span>{task.time.hs > 0 && task.time.hs}</span>

      {task.time.hs && task.time.mins ? ":" : ""}

      <span>{task.time.mins > 0 && task.time.mins}</span>

      <span> {task.time.hs ? "hs" : "mins"}</span>
    </div>
  );

  // AUTHOR --------------------------
  const author = (
    <div className="card__member card__member--author">
      <i className="fa-solid fa-crown"></i>
      <p>{nameInitials(task.author)}</p>
      <span>{task.author}</span>
    </div>
  );

  // MEMBERS -------------------------
  const membersArr =
    task.members.length > 6 ? task.members.slice(0, 5) : task.members;

  const membersList = membersArr.map((member, i) => (
    <div className="card__member" key={member + i}>
      <p>{nameInitials(member)}</p>
      <span>{member}</span>
    </div>
  ));

  const leftMembers = task.members.length > 6 && (
    <div className="card__member card__left-members">
      <p>
        {task.members.length - 5} <i className="fa-solid fa-plus"></i>
      </p>
      <span>
        {task.members
          .slice(5)
          .map(
            (memb, i) =>
              memb +
              (i === task.members.length - membersList.length - 1 ? "" : ", ")
          )}
      </span>
    </div>
  );

  // CTA -----------------------------
  const cta = (
    <button className="card__btn" onClick={openModalHandler}>
      <i className="fa-solid fa-plus"></i>
    </button>
  );

  return (
    <div className={`card ${task.difficulty}`}>
      {title}
      {difficulty}
      {description}
      {time}
      <div className="card__members margin-t-tn">
        {author}
        {membersList}
        {leftMembers}
      </div>
      {cta}
    </div>
  );
};

export default TaskCard;
