import React, { useEffect } from "react";
import { Series } from "../styles/pages/Series";
import Header from "../components/Header";
import SeriesMain from "../components/Series/Main";
import Box from "@material-ui/core/Box";

import useUsuario from "../hooks/useUsuario";

export default function Home() {
  const { seNaoLogadoIrParaLogin } = useUsuario();
  useEffect(seNaoLogadoIrParaLogin, []);
  return (
    <Series.Container>
      <Header />
      <Box>
        <SeriesMain />
      </Box>
    </Series.Container>
  );
}
