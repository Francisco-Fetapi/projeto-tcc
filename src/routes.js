import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginAndSignUp from "./pages/LoginAndSignUp";
import ConfirmarEmail from "./pages/ConfirmarEmail";
import MaisSobreVoce from "./pages/MaisSobreVoce";
import Perfil from "./pages/Perfil";
import Amigos from "./pages/Amigos";
import Series from "./pages/Series";
import Filmes from "./pages/Filmes";
import Videos from "./pages/Videos";
import Atores from "./pages/Atores";

export default function routes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginAndSignUp page="login" />} />
      <Route path="/criar-conta" element={<LoginAndSignUp page="signUp" />} />
      <Route
        path="/esqueci-a-passe"
        element={<LoginAndSignUp page="esqueci-a-passe" />}
      />
      <Route path="/confirmar-email" element={<ConfirmarEmail />} />
      <Route path="/mais-sobre-voce" element={<MaisSobreVoce />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/amigos" element={<Amigos />} />
      <Route path="/series" element={<Series />} />
      <Route path="/filmes" element={<Filmes />} />
      <Route path="/videos" element={<Videos />} />
      <Route path="/atores" element={<Atores />} />
    </Routes>
  );
}
