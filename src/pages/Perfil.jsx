import React from "react";
import { PerfilContainer } from "../styles/pages/Perfil";
import Header from "../components/Header";
import PerfilMain from "../components/Perfil/Main";
import Box from "@material-ui/core/Box";

export default function Perfil() {
  return (
    <PerfilContainer>
      <Header />
      <Box>
        <PerfilMain />
      </Box>
    </PerfilContainer>
  );
}
