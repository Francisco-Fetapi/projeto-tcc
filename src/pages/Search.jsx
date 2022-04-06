import React, { useEffect } from "react";
import { Search } from "../styles/pages/Search";
import Header from "../components/Header";
import SearchMain from "../components/Search/Main";
import Box from "@material-ui/core/Box";

import useUsuario from "../hooks/useUsuario";

export default function SearchPage() {
  const { seNaoLogadoIrParaLogin } = useUsuario();
  useEffect(seNaoLogadoIrParaLogin, []);
  return (
    <Search.Container>
      <Header />
      <Box>
        <SearchMain />
      </Box>
    </Search.Container>
  );
}
