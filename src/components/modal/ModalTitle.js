import React, { useRef, useState } from "react";

const ModalTitle = ({ curTask, saveHandler }) => {
  const [titleEdit, setTitleEdit] = useState(false);
  const titleRef = useRef(null);

  // FUNCTIONS -------------------------------------------------------------
  const titleChangeHandler = () => setTitleEdit(true);
  const closeEditTitleHandler = () => setTitleEdit(false);

  const saveTitleHandler = () => {
    closeEditTitleHandler(false);

    // handle input
    const curTitle = titleRef.current.value;
    if (curTitle.length > 0 && curTitle.length < 20) {
      curTask.name = titleRef.current.value;
      saveHandler();
    }
  };
  // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

  // CONTENT ---------------------------------------------------------------
  const edit = (
    <div className="modal-title__edit">
      <input defaultValue={curTask.name} ref={titleRef} />
      <button
        className="modal-title__btn modal-title__btn--save"
        onClick={saveTitleHandler}
      >
        <i className="fa-solid fa-check"></i>
      </button>
      <button
        className="modal-title__btn modal-title__btn--cancel"
        onClick={closeEditTitleHandler}
      >
        <i className="fa-solid fa-xmark"></i>
      </button>
    </div>
  );

  const title = <h4 onDoubleClick={titleChangeHandler}>{curTask.name}</h4>;

  const content = titleEdit ? edit : title;
  // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

  return <div className="modal-title margin-b-tn">{content}</div>;
};

export default ModalTitle;
