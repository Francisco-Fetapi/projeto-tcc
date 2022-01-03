import React, { useEffect } from "react";
import Header from "../components/Header";
import PerfilMain from "../components/Perfil/Main";
import Box from "@material-ui/core/Box";
import useUsuario from "../hooks/useUsuario";

export default function Perfil_() {
  const { seNaoLogadoIrParaLogin } = useUsuario();
  useEffect(seNaoLogadoIrParaLogin, []);
  return (
    <Box>
      <Header />
      <Box mt={-3}>
        <PerfilMain />
      </Box>
    </Box>
  );
}
