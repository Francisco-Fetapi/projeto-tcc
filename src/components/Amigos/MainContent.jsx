import React from "react";
import Box from "@material-ui/core/Box";
import ListaPedidos from "./ListaPedidos";
import ListaSugestoes from "./ListaSugestoes";

export default function MainContent() {
  return (
    <Box className="main">
      <ListaPedidos />
      <ListaSugestoes />
    </Box>
  );
}
