import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { RegisterPage } from "../pages/RegisterPage";
import { LoginPage } from "../pages/LoginPage";
import { UserPage } from "../pages/UserPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/register" element={<RegisterPage />}></Route>
      <Route path="/user" element={<UserPage />}></Route>
      <Route path="*" element={<Navigate to="/login" replace />}></Route>
    </Routes>
  );
};
