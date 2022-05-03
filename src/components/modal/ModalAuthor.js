import React from "react";

const ModalAuthor = ({ curTask }) => {
  return (
    <div className="modal-author">
      <p className="modal-author__title">Autor</p>
      <div className="modal-author__content">
        <p key={curTask.author}>{curTask.author}</p>
      </div>
    </div>
  );
};

export default ModalAuthor;
