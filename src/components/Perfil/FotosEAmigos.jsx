import React from "react";
import { Perfil } from "../../styles/pages/Perfil";
import Amigos from "./Amigos";
import Fotos from "./Fotos";

export default function FotosEAmigos() {
  return (
    <Perfil.FotosAmigos>
      <Fotos />
      <Amigos />
    </Perfil.FotosAmigos>
  );
}
