import React from "react";
import { useParams } from "react-router-dom";
import PaginaEmConstrucao from "../PaginaEmConstrucao";

export default function MainContent() {
  const { id } = useParams();
  return <PaginaEmConstrucao pagina={`Usuario ${id}`} />;
}
