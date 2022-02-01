import React, { useEffect } from "react";
import { LinhaDoTempo } from "../styles/pages/LinhaDoTempo";
import Header from "../components/Header";
import LinhaDoTempoMain from "../components/LinhaDoTempo/Main";
import Box from "@material-ui/core/Box";

import useUsuario from "../hooks/useUsuario";

export default function LinhaDoTempoPage() {
  const { seNaoLogadoIrParaLogin } = useUsuario();
  useEffect(seNaoLogadoIrParaLogin, []);
  return (
    <LinhaDoTempo.Container>
      <Header />
      <Box>
        <LinhaDoTempoMain />
      </Box>
    </LinhaDoTempo.Container>
  );
}
