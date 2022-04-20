import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "./components/auth/Login.js";
import Register from "./components/auth/Register.js";
import Home from "./components/home/Home.js";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
