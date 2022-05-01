import React, { useRef, useState } from "react";

const ModalTitle = ({ curTask, saveHandler }) => {
  const [titleEdit, setTitleEdit] = useState(false);
  const titleRef = useRef(null);

  const titleChangeHandler = () => {
    setTitleEdit(true);
  };

  const closeEditTitleHandler = () => {
    setTitleEdit(false);
  };

  const saveTitleHandler = () => {
    closeEditTitleHandler(false);

    const curTitle = titleRef.current.value;
    if (curTitle.length > 0 && curTitle.length < 20) {
      curTask.name = titleRef.current.value;
      saveHandler();
    }
  };

  return (
    <div className="modal__title">
      {titleEdit ? (
        <div className="modal__t-group">
          <input defaultValue={curTask.name} ref={titleRef} />
          <button className="modal__t-group--save" onClick={saveTitleHandler}>
            <i className="fa-solid fa-check"></i>
          </button>
          <button
            className="modal__t-group--close"
            onClick={closeEditTitleHandler}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      ) : (
        <h4 onDoubleClick={titleChangeHandler}>{curTask.name}</h4>
      )}
    </div>
  );
};

export default ModalTitle;
