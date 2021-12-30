import React from "react";
import { Perfil } from "../../styles/pages/Perfil";
import Banner from "./Banner";
import FotosEAmigos from "./FotosEAmigos";
import InfoUsuario from "./InfoUsuario";
import Box from "@material-ui/core/Box";
import PublicacoesGuardadas from "./PublicacoesGuardadas";
import Favoritos from "./Favoritos";
import MarcadosParaMaisTarde from "./MarcadosParaMaisTarde";
import AddPost from "../AddPost";
import Posts from "../Posts";

export default function Main() {
  return (
    <Perfil.Container>
      <Banner />
      <InfoUsuario />
      <FotosEAmigos />
      <Box className="grid-2">
        <Box className="publicacoes-guardadas">
          <PublicacoesGuardadas />
          <Favoritos />
        </Box>
        <Box>
          <MarcadosParaMaisTarde />
          <Box my={10}>
            <AddPost />
          </Box>
          <Box>
            <Posts />
          </Box>
        </Box>
      </Box>
    </Perfil.Container>
  );
}
