import React, { useContext } from "react";
import { PerfilAtorContext } from "../Atores/MainContent";
import TemplateModal from "./Template.jsx";

import InfoAtor from "~/components/InfoAtor";
// import { primeiroNome } from "~/helpers/index.js";

export default function ModalPerfilAtor(props) {
  const { ator } = useContext(PerfilAtorContext);
  return (
    <TemplateModal
      nomeModal="modalPerfilAtor"
      titulo={`${ator.name} - Perfil`}
      subtitulo="Veja mais informações sobre este perfil"
      navigateToOnClose="/atores"
      {...props}
      fullScreen
      style={{ maxWidth: "890px" }}
    >
      <InfoAtor />
    </TemplateModal>
  );
}
