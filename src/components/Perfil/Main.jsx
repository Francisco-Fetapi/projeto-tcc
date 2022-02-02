import React from "react";
import { Perfil } from "~/styles/pages/Perfil";
import Banner from "./Banner";
import FotosEAmigos from "./FotosEAmigos";
import InfoUsuario from "./InfoUsuario";
import Box from "@material-ui/core/Box";
import PublicacoesGuardadas from "./PublicacoesGuardadas";
import Favoritos from "./Favoritos";
import MarcadosParaMaisTarde from "./MarcadosParaMaisTarde";
import AddPost from "../AddPost";
import Posts from "../Posts";
import { useSelector } from "react-redux";
import { selectAppState } from "~/store/App.selectors";

import Skeleton from "@material-ui/lab/Skeleton";

function PubsSavedsAndFavoritos({ className }) {
  return (
    <Box className={`publicacoes-guardadas ${className}`}>
      <PublicacoesGuardadas />
      <Box position="relative">
        <Favoritos />
      </Box>
    </Box>
  );
}

export default function Main() {
  const usuario = useSelector(selectAppState("usuario"));
  const a_carregar = !usuario.id;
  return (
    <Perfil.Container>
      {!a_carregar && <Banner />}
      {a_carregar && <Skeleton variant="rect" width="100%" height={300} />}
      <InfoUsuario />
      <FotosEAmigos />
      <Box className="grid-2">
        <PubsSavedsAndFavoritos />
        <Box>
          <MarcadosParaMaisTarde />
          <Box mt={8} className="posts-desktop">
            <Box>
              <AddPost />
            </Box>
            <Box>
              <Posts />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="grid-2 posts-mobile">
        <Box>
          <AddPost />
        </Box>
        <Box>
          <Posts />
        </Box>
      </Box>
    </Perfil.Container>
  );
}
