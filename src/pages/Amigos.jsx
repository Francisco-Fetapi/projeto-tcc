import React, { useEffect } from "react";
import { Amigos } from "../styles/pages/Amigos";
import Header from "../components/Header";
import AmigosMain from "../components/Amigos/Main";
import Box from "@material-ui/core/Box";

import useUsuario from "../hooks/useUsuario";

export default function Home() {
  const { seNaoLogadoIrParaLogin } = useUsuario();
  useEffect(seNaoLogadoIrParaLogin, []);
  return (
    <Amigos.Container>
      <Header />
      <Box>
        <AmigosMain />
      </Box>
    </Amigos.Container>
  );
}
