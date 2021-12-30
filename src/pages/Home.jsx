import React from "react";
import { HomeContainer } from "../styles/pages/Home";
import Header from "../components/Header";
import HomeMain from "../components/Home/Main.jsx";
import Box from "@material-ui/core/Box";

export default function Home() {
  return (
    <HomeContainer>
      <Header />
      <Box>
        <HomeMain />
      </Box>
    </HomeContainer>
  );
}
