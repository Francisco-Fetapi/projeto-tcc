import React, { useEffect } from "react";
import { Filmes } from "../styles/pages/Filmes";
import Header from "../components/Header";
import FilmesMain from "../components/Filmes/Main";
import Box from "@material-ui/core/Box";

import useUsuario from "../hooks/useUsuario";

export default function FilmesPage({ favoritos }) {
  const { seNaoLogadoIrParaLogin } = useUsuario();
  useEffect(seNaoLogadoIrParaLogin, []);
  return (
    <Filmes.Container>
      <Header />
      <Box>
        <FilmesMain favoritos={favoritos} />
      </Box>
    </Filmes.Container>
  );
}
