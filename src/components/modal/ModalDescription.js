import React, { useEffect, useRef, useState } from "react";

const ModalDescription = ({ curTask, saveHandler }) => {
  const [editMode, setEditMode] = useState(false);
  const descInp = useRef(null);
  const descBox = useRef(null);

  // FUNCTIONS -------------------------------------------------------------

  // close edit mode when clicking out ->
  useEffect(() => {
    function handleClickOutside(event) {
      if (descBox.current && !descBox.current.contains(event.target)) {
        setEditMode(false);
      }
    }

    // bind event listener to function
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // delete event listener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [descBox]);

  const descriptionChangeHandler = () => setEditMode(true);
  const closeEditDescriptionHandler = () => setEditMode(false);

  const saveDescriptionHandler = () => {
    closeEditDescriptionHandler();

    curTask.description = descInp.current.value;
    saveHandler();
  };
  // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

  // CONTENT ---------------------------------------------------------------
  const edit = (
    <div className="modal__description-group">
      <textarea
        ref={descInp}
        cols={40}
        rows={22}
        autoFocus
        defaultValue={curTask.description}
      />

      <div className="modal__description-group--btns">
        <button
          className="modal__description-group--save"
          onClick={saveDescriptionHandler}
        >
          Save
        </button>
        <button
          className="modal__description-group--cancel"
          onClick={closeEditDescriptionHandler}
        >
          Cancel
        </button>
      </div>
    </div>
  );

  const description = (
    <p onDoubleClick={descriptionChangeHandler}>{curTask.description}</p>
  );

  const content = !editMode ? description : edit;
  // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

  return (
    <div className="modal__description" ref={descBox}>
      {content}
    </div>
  );
};

export default ModalDescription;
