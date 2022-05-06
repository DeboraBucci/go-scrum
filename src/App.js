import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Login from "./components/auth/Login.js";
import Register from "./components/auth/Register.js";
import User from "./components/user/User.js";
import Error404 from "./components/errors/Error404.js";
import Home from "./components/home/Home.js";
import Header from "./components/header/Header.js";

const RequireAuth = ({ children, to, check = true }) => {
  if (check) return <Navigate to={to} replace={true} />;
  return children;
};

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
    setToken(localStorage.getItem("token"));
  }, []);

  return (
    <React.Fragment>
      {token && <Header user={user} />}
      <Routes>
        <Route
          exact
          path="/"
          element={
            <RequireAuth to="/login">
              <Home user={user} />
            </RequireAuth>
          }
        />
        <Route
          path="/user"
          element={
            <RequireAuth to="/login">
              <User />
            </RequireAuth>
          }
        />
        <Route
          path="/login"
          element={
            <RequireAuth to="/" check={token}>
              <Login />
            </RequireAuth>
          }
        />
        <Route
          path="/register"
          element={
            <RequireAuth to="/" check={token}>
              <Register />
            </RequireAuth>
          }
        />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
