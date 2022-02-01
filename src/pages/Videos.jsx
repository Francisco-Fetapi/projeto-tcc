import React, { useEffect } from "react";
import { Videos } from "../styles/pages/Videos";
import Header from "../components/Header";
import VideosMain from "../components/Videos/Main";
import Box from "@material-ui/core/Box";

import useUsuario from "../hooks/useUsuario";

export default function VideosPage() {
  const { seNaoLogadoIrParaLogin } = useUsuario();
  useEffect(seNaoLogadoIrParaLogin, []);
  return (
    <Videos.Container>
      <Header />
      <Box>
        <VideosMain />
      </Box>
    </Videos.Container>
  );
}
