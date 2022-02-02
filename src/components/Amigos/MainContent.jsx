import React from "react";
import Box from "@material-ui/core/Box";
import ListaPedidos from "./ListaPedidos";
import ListaSugestoes from "./ListaSugestoes";
import ListaAmigos from "./ListaAmigos";

export default function MainContent() {
  return (
    <Box className="main">
      <ListaPedidos />
      <ListaAmigos />
      <ListaSugestoes />
    </Box>
  );
}
