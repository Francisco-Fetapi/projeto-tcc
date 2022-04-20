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
import LinhaDoTempo from "./pages/LinhaDoTempo";
import PostSaveds from "./pages/PostSaveds";
import Search from "./pages/Search";

import Movie from "./pages/Movie";

import NotFound from "./pages/NotFound";
import MoviesFavoritos from "./pages/MoviesFavoritos";

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
      <Route path="/perfil" element={<Perfil alheio={false} />} />
      <Route path="/amigos" element={<Amigos />} />
      <Route path="/series" element={<Series />} />
      <Route path="/filmes" element={<Filmes />} />
      <Route path="/videos" element={<Videos />} />
      <Route path="/atores" element={<Atores />} />
      <Route path="/ator/:id_ator" element={<Atores perfil={true} />} />
      <Route
        path="/publicacoes-guardadas/:id_usuario"
        element={<PostSaveds />}
      />
      <Route
        path="/movies-favoritos/:id_usuario"
        element={<MoviesFavoritos />}
      />
      <Route path="/minha-linha-do-tempo" element={<LinhaDoTempo />} />
      <Route path="/usuario/:id" element={<Perfil alheio={true} />} />
      <Route path="/filmes/:id" element={<Movie media_type="movie" />} />
      <Route path="/series/:id" element={<Movie media_type="tv" />} />
      <Route path="/procurar" element={<Search />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
