import React, { useContext, useState, useEffect } from "react";
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
import { PerfilContext } from "~/pages/Perfil";
import { useLocation, useParams } from "react-router-dom";

function PubsSavedsAndFavoritos({ className, id_usuario }) {
  return (
    <Box className={`publicacoes-guardadas ${className}`}>
      <PublicacoesGuardadas id_usuario={id_usuario} />
      <Box position="relative">
        <Favoritos />
      </Box>
    </Box>
  );
}

export default function Main() {
  const Perfil_Context = useContext(PerfilContext);
  const usuario_logado = useSelector(selectAppState("usuario"));
  const { pathname } = useLocation();
  const perfil = useParams();
  const [usuario, setUsuario] = useState({});

  useEffect(() => {
    if (Perfil_Context.alheio) {
      setUsuario(Perfil_Context.usuario);
    } else {
      setUsuario(usuario_logado);
    }
  }, [Perfil_Context, usuario_logado, pathname]);

  const a_carregar =
    !usuario.id || (Perfil_Context.alheio && Perfil_Context.loadingUsuario);
  return (
    <Perfil.Container>
      {!a_carregar && <Banner />}
      {a_carregar && <Skeleton variant="rect" width="100%" height={300} />}
      <InfoUsuario />
      <FotosEAmigos />
      <Box className="grid-2">
        <PubsSavedsAndFavoritos id_usuario={perfil.id} />
        <Box pl={2.5}>
          <MarcadosParaMaisTarde />
          <Box mt={8} className="posts-desktop">
            {!Perfil_Context.alheio && (
              <Box>
                <AddPost />
              </Box>
            )}
            <Box>
              {!perfil.id && <Posts target="meus" />}
              {perfil.id && <Posts target="meus" id_usuario={perfil.id} />}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="grid-2 posts-mobile">
        <Box>
          <AddPost />
        </Box>
        <Box>
          {!perfil.id && <Posts target="meus" />}
          {perfil.id && <Posts target="meus" id_usuario={perfil.id} />}
        </Box>
      </Box>
    </Perfil.Container>
  );
}
