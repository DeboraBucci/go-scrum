import React, { useRef } from "react";

const ModalTime = ({ curTask, saveHandler }) => {
  const hsRef = useRef(null);
  const minsRef = useRef(null);

  // FUNCTIONS -------------------------------------------------------------
  const saveHsHandler = () => {
    const curHs = parseInt(hsRef.current.value);

    if (curHs <= 24 && !isNaN(curHs)) {
      curTask.time.hs = curHs;
      saveHandler();
    }
  };

  const saveMinsHandler = () => {
    const curMins = parseInt(minsRef.current.value);
    if (curMins <= 59 && !isNaN(curMins)) {
      curTask.time.mins = curMins;
      saveHandler();
    }
  };

  const checkEmpty = (val) => (val !== "" ? val : "00");

  // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

  // CONTENT ---------------------------------------------------------------
  const hs = (
    <input
      onBlur={saveHsHandler}
      ref={hsRef}
      className="modal-time__hs"
      type="number"
      min={0}
      max={24}
      defaultValue={checkEmpty(curTask.time.hs)}
    />
  );

  const mins = (
    <input
      onBlur={saveMinsHandler}
      ref={minsRef}
      className="modal-time__mins"
      type="number"
      min={0}
      max={59}
      defaultValue={checkEmpty(curTask.time.mins)}
    />
  );

  const content = (
    <div className="modal-time">
      <i className="fa-regular fa-clock"></i>
      {hs}
      <p>:</p>
      {mins}
    </div>
  );
  // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

  return content;
};

export default ModalTime;
