import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Login from "./components/auth/Login.js";
import Register from "./components/auth/Register.js";
import User from "./components/user/User.js";
import Error404 from "./components/errors/Error404.js";
import Home from "./components/home/Home.js";
import Header from "./components/header/Header.js";

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
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  return (
    <React.Fragment>
      {useState(localStorage.getItem("token")) && <Header user={user} />}
      <Routes>
        <Route
          exact
          path="/"
          element={
            <RequireAuth>
              <Home user={user} />
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
