import React from "react";
// import { PerfilAtorContext } from "../Atores/MainContent";
import TemplateModal from "./Template.jsx";

import ListaAAssistir from "~/components/ListaAAssistir";

export default function ModalPerfilAtor(props) {
  // const { ator } = useContext(PerfilAtorContext);
  return (
    <TemplateModal
      nomeModal="modalAssistindo"
      titulo={`O que estás assistindo?`}
      subtitulo="Selecione algum filme/série na lista abaixo"
      {...props}
      fullScreen
      style={{ maxWidth: "500px" }}
    >
      <ListaAAssistir />
    </TemplateModal>
  );
}
