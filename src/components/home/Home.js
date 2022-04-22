import React from "react";
import Header from "../header/Header";
import Sidenav from "../sidebar/Sidebar";
import Tasks from "../tasks/Tasks";

const Home = () => {
  return (
    <div>
      <Header />
      <Tasks />
      <Sidenav />
    </div>
  );
};

export default Home;
