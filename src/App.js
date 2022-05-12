import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Login from "./components/auth/Login.js";
import Register from "./components/auth/Register.js";
import User from "./components/user/User.js";
import Error404 from "./components/errors/Error404.js";
import Home from "./components/home/Home.js";

const RequireAuth = ({ children }) => {
  const logged = localStorage.getItem("token");
  if (!logged) return <Navigate to={"/login"} replace={true} />;
  return children;
};

const RequireNotLogged = ({ children }) => {
  const logged = localStorage.getItem("token");
  if (logged) return <Navigate to={"/"} replace={true} />;
  return children;
};

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route
          path="/user"
          element={
            <RequireAuth>
              <User />
            </RequireAuth>
          }
        />
        <Route
          path="/login"
          element={
            <RequireNotLogged>
              <Login />
            </RequireNotLogged>
          }
        />
        <Route
          path="/register"
          element={
            <RequireNotLogged>
              <Register />
            </RequireNotLogged>
          }
        />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
