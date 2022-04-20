import React, { useEffect } from "react";
import { PostSaveds } from "../styles/pages/PostSaveds";
import Header from "../components/Header";
import PostSavedsMain from "../components/PostSaveds/Main";
import Box from "@material-ui/core/Box";

import useUsuario from "../hooks/useUsuario";

export default function PostSavedsPage() {
  const { seNaoLogadoIrParaLogin } = useUsuario();

  useEffect(seNaoLogadoIrParaLogin, []);
  return (
    <PostSaveds.Container>
      <Header />
      <Box>
        <PostSavedsMain />
      </Box>
    </PostSaveds.Container>
  );
}
