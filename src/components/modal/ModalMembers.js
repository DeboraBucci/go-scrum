import React, { useRef } from "react";

const ModalMembers = ({ curTask, saveHandler }) => {
  const memberRef = useRef(null);

  // FUNCTIONS -------------------------------------------------------------
  const deleteMemberHandler = (e) => {
    // find selected member ->
    const deletedMember = e.target
      .closest(".modal-members__member")
      .innerHTML.split("<button")[0];
    const deletedMemberIndex = curTask.members.indexOf(deletedMember);

    // delete member from array ->
    curTask.members.splice(deletedMemberIndex, 1);

    // save changes ->
    saveHandler();
  };

  const addMemberHandler = () => {
    // entered str ->
    const enteredStr = memberRef.current.value;

    // check name has only alphabetic characters and/or spaces
    if (/^[a-zA-Z ]*$/.test(enteredStr) && enteredStr.length < 50) {
      // format name correctly ->
      const newMember = enteredStr
        .toLowerCase()
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" ");

      // add member to members ->
      curTask.members.push(newMember);

      // save changes ->
      saveHandler();
    }
  };
  // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

  // CONTENT ---------------------------------------------------------------
  const membersFallbackMsg = curTask.members.length === 0 && (
    <p className="margin-b-tn">No hay ningún miembro para esta tarea.</p>
  );

  const membersContent = (
    <div className="modal-members__list">
      {curTask.members.map((member, i) => (
        <p key={member + i} className="modal-members__member">
          {member}
          <button
            onClick={deleteMemberHandler}
            className="modal-members__btn--delete"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </p>
      ))}
    </div>
  );

  const members = (
    <div className="modal-members__content">
      {membersFallbackMsg}
      {membersContent}
    </div>
  );

  const addMemberInput = (
    <div className="modal-members__add">
      <input ref={memberRef} placeholder="Agregue un miembro a esta tarea..." />
      <button onClick={addMemberHandler}>
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );

  const content = (
    <div className="modal-members">
      <p className="modal-members__title">Miembros</p>

      <div className="modal-members__box">
        {members}
        {addMemberInput}
      </div>
    </div>
  );
  // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

  return content;
};

export default ModalMembers;
