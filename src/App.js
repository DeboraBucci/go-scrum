import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "./components/auth/Login.js";
import Register from "./components/auth/Register.js";
import User from "./components/auth/User.js";
import Error404 from "./components/errors/Error404.js";
import Home from "./components/home/Home.js";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" element={<User />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
