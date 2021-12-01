import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginAndSignUp from "./pages/LoginAndSignUp";

export default function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginAndSignUp page="login" />} />
        <Route path="/criar-conta" element={<LoginAndSignUp page="signUp" />} />
        <Route
          path="/esqueci-a-passe"
          element={<LoginAndSignUp page="esqueci-a-passe" />}
        />
      </Routes>
    </BrowserRouter>
  );
}
