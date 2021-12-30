import React from "react";
import Box from "@material-ui/core/Box";
import ListaPedidos from "./ListaPedidos";

export default function MainContent() {
  return (
    <Box className="main">
      <ListaPedidos />
    </Box>
  );
}
