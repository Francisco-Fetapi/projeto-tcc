import React from "react";
import TemplateModal from "./Template.jsx";
import FormEditarBiografia from "../Forms/FormEditarBiografia.jsx";
import { useEffect } from "react";
import { alterarLarguraDoModal } from "~/helpers/LoginAndSignUp";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectAppState } from "~/store/App.selectors";
import { primeiroNome } from "~/helpers/index.js";

export default function ModalEditarPerfil(props) {
  const [propsModal, setPropsModal] = useState({});
  const usuario = useSelector(selectAppState("usuario"));

  return (
    <TemplateModal
      nomeModal="modalEditarBiografia"
      titulo={`${primeiroNome(usuario)} - Editar Biografia`}
      subtitulo="Informações sobre você que melhor te descrevem."
      setPropsModal={setPropsModal}
      {...propsModal}
      {...props}
    >
      <FormEditarBiografia setModal={props.setModal} />
    </TemplateModal>
  );
}
