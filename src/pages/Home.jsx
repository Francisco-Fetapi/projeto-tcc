import React, { useEffect } from "react";
import { HomeContainer } from "../styles/pages/Home";
import Header from "../components/Header";
import HomeMain from "../components/Home/Main.jsx";
import Box from "@material-ui/core/Box";
import useUsuario from "../hooks/useUsuario";

export default function Home() {
  const { seNaoLogadoIrParaLogin } = useUsuario();
  useEffect(() => {
    seNaoLogadoIrParaLogin();
  }, []);
  return (
    <HomeContainer>
      <Header />
      <Box>
        <HomeMain />
      </Box>
    </HomeContainer>
  );
}
