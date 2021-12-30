import React from "react";
import { Perfil } from "../../styles/pages/Perfil";
import Banner from "./Banner";
import FotosEAmigos from "./FotosEAmigos";
import InfoUsuario from "./InfoUsuario";
import Box from "@material-ui/core/Box";
import PublicacoesGuardadas from "./PublicacoesGuardadas";
import Favoritos from "./Favoritos";

export default function Main() {
  return (
    <Perfil.Container>
      <Banner />
      <InfoUsuario />
      <FotosEAmigos />
      <Box className="grid-2">
        <Box className="publicacoes-guardadas favoritos">
          <PublicacoesGuardadas />
          <Favoritos />
        </Box>
        <Box>
          <h1>Ola Mundo</h1>
        </Box>
      </Box>
    </Perfil.Container>
  );
}
