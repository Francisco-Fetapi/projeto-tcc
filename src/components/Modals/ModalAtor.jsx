import React from "react";
import TemplateModal from "./Template.jsx";

import InfoAtor from "~/components/InfoAtor";
// import { primeiroNome } from "~/helpers/index.js";

export default function ModalPerfilAtor(props) {
  return (
    <TemplateModal
      nomeModal="modalPerfilAtor"
      titulo={`Perfil do Ator`}
      subtitulo="Conheça mais sobre...."
      navigateToOnClose="/atores"
      {...props}
      fullScreen
      style={{ maxWidth: "990px" }}
    >
      <InfoAtor />
    </TemplateModal>
  );
}
