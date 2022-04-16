import React, { useEffect } from "react";
import { Filmes } from "../styles/pages/Filmes";
import Header from "../components/Header";
import MoviesMain from "../components/MoviesFavoritos/Main";
import Box from "@material-ui/core/Box";

import useUsuario from "../hooks/useUsuario";

export default function MoviesFavoritos() {
  const { seNaoLogadoIrParaLogin } = useUsuario();
  useEffect(seNaoLogadoIrParaLogin, []);
  return (
    <Filmes.Container>
      <Header />
      <Box>
        <MoviesMain />
      </Box>
    </Filmes.Container>
  );
}
