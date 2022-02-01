import React, { useEffect } from "react";
import { Filmes } from "../styles/pages/Filmes";
import Header from "../components/Header";
import FilmesMain from "../components/Filmes/Main";
import Box from "@material-ui/core/Box";

import useUsuario from "../hooks/useUsuario";

export default function FilmesPage() {
  const { seNaoLogadoIrParaLogin } = useUsuario();
  useEffect(seNaoLogadoIrParaLogin, []);
  return (
    <Filmes.Container>
      <Header />
      <Box>
        <FilmesMain />
      </Box>
    </Filmes.Container>
  );
}
