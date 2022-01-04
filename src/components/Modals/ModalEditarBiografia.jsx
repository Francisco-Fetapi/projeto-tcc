import React from "react";
import TemplateModal from "./Template.jsx";
import FormEditarBiografia from "../Forms/FormEditarBiografia.jsx";
import { useEffect } from "react";
import { alterarLarguraDoModal } from "../../helpers/LoginAndSignUp";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectAll } from "../../store/App.selectors";

export default function ModalEditarPerfil() {
  const [propsModal, setPropsModal] = useState({});
  const { usuario } = useSelector(selectAll);

  useEffect(() => {
    window.onresize = () => alterarLarguraDoModal(setPropsModal, 410);
    window.onload = () => alterarLarguraDoModal(setPropsModal, 410);
    return () => {
      window.onresize = null;
      window.onload = null;
    };
  }, []);
  return (
    <TemplateModal
      nomeModal="modalEditarBiografia"
      titulo={`${usuario.nome} - Editar Biografia`}
      subtitulo="Informações sobre você que melhor te descrevem."
      {...propsModal}
    >
      <FormEditarBiografia />
    </TemplateModal>
  );
}
