import React from "react";
import { MainContainer } from "~/styles/pages/Home";
import MenuLeft from "../MenuLeft.jsx";
import MenuRight from "../MenuRIght.jsx";
import MainContent from "./MainContent";

export default function Main({ favoritos }) {
  return (
    <MainContainer>
      <MenuLeft />
      <div>
        <MainContent favoritos={favoritos} />
      </div>
      <MenuRight />
    </MainContainer>
  );
}
