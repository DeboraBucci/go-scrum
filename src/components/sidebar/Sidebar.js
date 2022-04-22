import React, { useState } from "react";
import AddNewTask from "../tasks/AddNewTask";

const Sidebar = () => {
  const [isOpened, setIsOpened] = useState(false);

  const openSidebarHandler = () => {
    setIsOpened(true);
  };

  const closeSidebarHandler = () => {
    setIsOpened(false);
  };

  return (
    <>
      <div className={`sidebar ${isOpened && "sidebar__opened"}`}>
        <AddNewTask close={closeSidebarHandler} />

        <button
          className={`sidebar__close-btn ${!isOpened && "hidden"}`}
          onClick={closeSidebarHandler}
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>
      </div>

      <div
        className={`sidebar-opener ${isOpened && "sidebar-opener__closed"}`}
        onClick={openSidebarHandler}
      >
        <button
          className={`sidebar-opener__btn ${isOpened && "hidden"}`}
          onClick={openSidebarHandler}
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </>
  );
};

export default Sidebar;
