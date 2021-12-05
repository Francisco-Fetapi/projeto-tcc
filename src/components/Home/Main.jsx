import React from "react";
import { MainContainer } from "../../styles/pages/Home";
import MenuLeft from "../MenuLeft.jsx";
import MenuRight from "../MenuRIght.jsx";

export default function Main() {
  return (
    <MainContainer>
      <MenuLeft />
      <div>Grid2</div>
      <MenuRight />
    </MainContainer>
  );
}
