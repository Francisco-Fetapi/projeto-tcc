import React from "react";
import { Amigos } from "../styles/pages/Amigos";
import Header from "../components/Header";
import AmigosMain from "../components/Amigos/Main";
import Box from "@material-ui/core/Box";

export default function Home() {
  return (
    <Amigos.Container>
      <Header />
      <Box>
        <AmigosMain />
      </Box>
    </Amigos.Container>
  );
}
