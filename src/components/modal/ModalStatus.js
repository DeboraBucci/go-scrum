import React, { useRef } from "react";

import { statusOptions } from "../../data";
import { statusIcon } from "../../functions/status";

const ModalStatus = ({ curTask, saveHandler }) => {
  const statusRef = useRef(null);

  const saveDifficultyHandler = () => {
    curTask.status = statusRef.current.value;
    saveHandler();
  };

  return (
    <div className="modal__status-group">
      <i className={`fa-solid fa-${statusIcon(curTask.status)}`}></i>

      <select
        className="modal__status"
        defaultValue={curTask.status}
        onChange={saveDifficultyHandler}
        ref={statusRef}
      >
        {statusOptions.map((opt) => (
          <option value={opt.val} className="modal__opt">
            {opt.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ModalStatus;
