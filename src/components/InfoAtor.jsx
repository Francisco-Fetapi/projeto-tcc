import React, { useContext } from "react";
import { PerfilAtorContext } from "./Atores/MainContent";

export default function InfoAtor() {
  const { ator } = useContext(PerfilAtorContext);
  return (
    <div>
      <h1>Informacoes do Ator</h1>
      <p>Nome {ator.name}</p>
    </div>
  );
}
