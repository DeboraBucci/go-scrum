import React, { useRef } from "react";
import { difficultyOpt } from "../../data";

const ModalDifficulty = ({ curTask, saveHandler }) => {
  const difficultyRef = useRef(null);

  const saveDifficultyHandler = () => {
    curTask.difficulty = difficultyRef.current.value;
    saveHandler();
  };

  return (
    <select
      className={`modal-difficulty ${curTask.difficulty}`}
      defaultValue={curTask.difficulty}
      onChange={saveDifficultyHandler}
      ref={difficultyRef}
    >
      <option key="choose" value="" className="modal__opt">
        Seleccione una dificultad
      </option>
      {difficultyOpt.map((opt) => (
        <option key={opt.val} value={opt.val} className="modal__opt">
          {opt.name}
        </option>
      ))}
    </select>
  );
};

export default ModalDifficulty;
