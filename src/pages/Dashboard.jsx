import React, { useState } from "react";

import { Route, Routes } from "react-router-dom";
import NavigationBar from "../layouts/navibar/NavigationBar";
import HomePage from "./HomePage";
import AdminPage from "./signedin/admin/AdminPage";
import UserProfile from "./signedin/user/UserProfile";
import Login from "./signedout/Login";
import Register from "./signedout/Register";

export default function Dashboard() {
  // Handle Log In
  const [isAuth, setAuth] = useState(window.localStorage.getItem("isAuth"));
  const [isAdmin, setAdmin] = useState(window.localStorage.getItem("isAdmin"));
  const [userId, setUserId] = useState(window.localStorage.getItem("userId"));

  const handleSignOut = () => {
    setAuth(false);
    window.localStorage.clear();
  };

  const handleSignIn = (userId, email) => {
    setAuth(true);
    window.localStorage.setItem("isAuth", true);
    setAdmin(userId);
    window.localStorage.setItem("userId", userId);
  };

  return (
    <div>
      <NavigationBar auth={isAuth} signOut={handleSignOut} />

      {/* Ortak */}
      <Routes>
        <Route exact path="/" element={<HomePage />} />

        <Route path="/login" element={<Login signIn={handleSignIn} />} />
        <Route path="/register" element={<Register />} />

        <Route path="/profile" element={<UserProfile />} />

        <Route exact path="/admin" element={<AdminPage />} />
      </Routes>
    </div>
  );
}
