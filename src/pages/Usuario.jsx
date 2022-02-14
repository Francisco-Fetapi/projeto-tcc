import React, { useEffect } from "react";
import { Usuario } from "../styles/pages/Usuario";
import Header from "../components/Header";
import UsuarioMain from "../components/Usuario/Main";
import Box from "@material-ui/core/Box";

import useUsuario from "../hooks/useUsuario";

export default function UsuarioPage() {
  const { seNaoLogadoIrParaLogin } = useUsuario();
  useEffect(seNaoLogadoIrParaLogin, []);
  return (
    <Usuario.Container>
      <Header />
      <Box>
        <UsuarioMain />
      </Box>
    </Usuario.Container>
  );
}
