import React from "react";
import Header from "../components/Header";
import PerfilMain from "../components/Perfil/Main";
import Box from "@material-ui/core/Box";

export default function Perfil_() {
  return (
    <Box>
      <Header />
      <Box mt={-3}>
        <PerfilMain />
      </Box>
    </Box>
  );
}