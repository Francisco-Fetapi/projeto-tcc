import React from "react";
import TemplateModal from "./Template.jsx";
import { useState } from "react";

import InfoPerfil from "../Perfil/InfoPerfil.jsx";
import { primeiroNome } from "~/helpers/index.js";

export default function ModalEditarPerfil(props) {
  const [propsModal, setPropsModal] = useState({});

  const { usuario } = props;

  return (
    <TemplateModal
      nomeModal="modalVerPerfil"
      titulo={`${primeiroNome(usuario)} - Perfil`}
      subtitulo="Todos os dados da conta."
      setPropsModal={setPropsModal}
      {...propsModal}
      {...props}
    >
      <InfoPerfil usuario={usuario} />
    </TemplateModal>
  );
}
