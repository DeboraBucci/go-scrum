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
    <div className="modal-status">
      <i className={`fa-solid fa-${statusIcon(curTask.status)}`}></i>

      <select
        className="modal-status__dropdown"
        key={curTask.status}
        defaultValue={curTask.status}
        onChange={saveDifficultyHandler}
        ref={statusRef}
      >
        {statusOptions.map((opt) => (
          <option value={opt.val}>{opt.name}</option>
        ))}
      </select>
    </div>
  );
};

export default ModalStatus;
