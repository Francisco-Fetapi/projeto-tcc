import React, { useEffect } from "react";
import { Atores } from "../styles/pages/Atores";
import Header from "../components/Header";
import AtoresMain from "../components/Atores/Main";
import Box from "@material-ui/core/Box";

import useUsuario from "../hooks/useUsuario";

export default function AtoresPage() {
  const { seNaoLogadoIrParaLogin } = useUsuario();
  useEffect(seNaoLogadoIrParaLogin, []);
  return (
    <Atores.Container>
      <Header />
      <Box>
        <AtoresMain />
      </Box>
    </Atores.Container>
  );
}
