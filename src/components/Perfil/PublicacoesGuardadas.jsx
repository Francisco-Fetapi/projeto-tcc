import React, { useContext, useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Publicacao from "./Publicacao";
import { Text, Link } from "~/styles";
import { useNavigate } from "react-router-dom";
import { PerfilContext } from "~/pages/Perfil";
import { useSelector } from "react-redux";
import { selectAppState } from "~/store/App.selectors";

import CircularProgress from "@material-ui/core/CircularProgress";
import usePost from "~/hooks/usePost";

export default function PublicacoesGuardadas() {
  const navigate = useNavigate();
  const { alheio } = useContext(PerfilContext);
  const [loading, setLoading] = useState(true);
  const posts_guardados = useSelector(selectAppState("meus_guardados"));
  const { getPosts } = usePost();

  useEffect(() => {
    getPosts({ setLoading }, 1, "meusGuardados");
  }, []);
  const children1 = (
    <>
      <Box
        mb={2}
        // display="flex"
        // justifyContent="space-between"
        // alignItems="center"
      >
        <Text variant="h6">PUBLICAÇÕES GUARDADAS</Text>
      </Box>
      <Box
        style={
          loading || posts_guardados.data.length === 0
            ? {
                minHeight: "220px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }
            : null
        }
      >
        {posts_guardados.data.slice(0, 4).map((post) => (
          <Publicacao key={post.id_post} post={post} />
        ))}
        {posts_guardados.data.length === 0 && loading && (
          <CircularProgress color="inherit" />
        )}
        {posts_guardados.data.length === 0 && <Box width="360px"></Box>}
        {posts_guardados.data.length === 0 && !loading && (
          <Box>
            <Text color="textSecondary" variant="subtitle2">
              Nenhuma publicação guardada
            </Text>
          </Box>
        )}
        {posts_guardados.total > 3 && (
          <Box mt={1} display="flex" justifyContent="center">
            <Button
              color="primary"
              onClick={() => navigate("/publicacoes-guardadas")}
            >
              Visualizar todas
            </Button>
          </Box>
        )}
      </Box>
    </>
  );
  const children2 = (
    <>
      <Text variant="h6">PUBLICAÇÕES GUARDADAS</Text>
      <Box
        mb={2}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="70vh"
        minHeight="390px"
      >
        <Text align="center" color="textSecondary" variant="subtitle2">
          Você só pode ver as publicaçoes guardadas deste usuário caso ele
          permita.
        </Text>
        <Box mt={2}>
          <Link to="/">Politicas de privacidade</Link>
        </Box>
      </Box>
    </>
  );
  return <Box>{!alheio ? children1 : children2}</Box>;
}
