import React from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

import Login from "./components/auth/Login.js";
import Register from "./components/auth/Register.js";
import User from "./components/auth/User.js";
import Error404 from "./components/errors/Error404.js";
import Home from "./components/home/Home.js";

const RequireAuth = ({ children }) => {
  const isLogged = localStorage.getItem("logged");

  if (!isLogged) {
    return <Navigate to={"/login"} replace={true} />;
  }

  return children;
};

const RequireNotLogged = ({ children }) => {
  const isLogged = localStorage.getItem("logged");

  if (isLogged) {
    return <Navigate to={"/"} replace={true} />;
  }

  return children;
};

function App() {
  const navigate = useNavigate();

  const loginHandler = (user) => {
    localStorage.setItem("tasks", JSON.stringify([]));
    localStorage.setItem("logged", true);
    localStorage.setItem("user", JSON.stringify(user));

    navigate("/", { replace: true });
  };

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
              <Login setLogged={loginHandler} />
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
