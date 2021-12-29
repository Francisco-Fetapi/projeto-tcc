import React from "react";
import { Perfil } from "../../styles/pages/Perfil";
import Banner from "./Banner";
import InfoUsuario from "./InfoUsuario";

export default function Main() {
  return (
    <Perfil.Container>
      <Banner />
      <InfoUsuario />
    </Perfil.Container>
  );
}
