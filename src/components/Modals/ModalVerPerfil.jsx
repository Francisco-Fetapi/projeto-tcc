import React from "react";
import TemplateModal from "./Template.jsx";
import { useState } from "react";

import InfoPerfil from "../Perfil/InfoPerfil.jsx";
import { useSelector } from "react-redux";
import { selectAppState } from "~/store/App.selectors";
import { primeiroNome } from "~/helpers/index.js";

export default function ModalEditarPerfil(props) {
  const [propsModal, setPropsModal] = useState({});

  const usuario = useSelector(selectAppState("usuario"));

  return (
    <TemplateModal
      nomeModal="modalVerPerfil"
      titulo={`${primeiroNome(usuario)} - Perfil`}
      subtitulo="Todos os dados da sua conta."
      setPropsModal={setPropsModal}
      {...propsModal}
      {...props}
    >
      <InfoPerfil />
    </TemplateModal>
  );
}
