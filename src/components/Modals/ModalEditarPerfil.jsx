import React from "react";
import TemplateModal from "./Template.jsx";
import { useState } from "react";

import FormEditarPerfil from "../Forms/FormEditarPerfil";
import { useSelector } from "react-redux";
import { selectAppState } from "~/store/App.selectors";
import { primeiroNome } from "~/helpers/index.js";

export default function ModalEditarPerfil(props) {
  const [propsModal, setPropsModal] = useState({});

  const usuario = useSelector(selectAppState("usuario"));

  return (
    <TemplateModal
      nomeModal="modalEditarPerfil"
      titulo={`${primeiroNome(usuario)} - Editar Perfil`}
      subtitulo="Atualize os dados da sua conta."
      setPropsModal={setPropsModal}
      {...propsModal}
      {...props}
    >
      <FormEditarPerfil setModal={props.setModal} />
    </TemplateModal>
  );
}
