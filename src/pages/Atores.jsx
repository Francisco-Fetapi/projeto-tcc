import React, { createContext, useEffect } from "react";
import { Atores } from "../styles/pages/Atores";
import Header from "../components/Header";
import AtoresMain from "../components/Atores/Main";
import Box from "@material-ui/core/Box";

import useUsuario from "../hooks/useUsuario";

export const AtoresContext = createContext();

export default function AtoresPage({ perfil }) {
  const { seNaoLogadoIrParaLogin } = useUsuario();
  useEffect(seNaoLogadoIrParaLogin, []);
  return (
    <AtoresContext.Provider value={{ perfil }}>
      <Atores.Container>
        <Header />
        <Box>
          <AtoresMain />
        </Box>
      </Atores.Container>
    </AtoresContext.Provider>
  );
}
