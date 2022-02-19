import React, { useEffect } from "react";
import { Movie } from "../styles/pages/Movie";
import Header from "../components/Header";
import MovieMain from "../components/Movie/Main";
import Box from "@material-ui/core/Box";

import useUsuario from "../hooks/useUsuario";

export default function MoviePage() {
  const { seNaoLogadoIrParaLogin } = useUsuario();
  useEffect(seNaoLogadoIrParaLogin, []);
  return (
    <Movie.Container>
      <Header />
      <Box>
        <MovieMain />
      </Box>
    </Movie.Container>
  );
}
