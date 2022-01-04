import React from "react";
import TemplateModal from "./Template.jsx";
import { useEffect } from "react";
import { alterarLarguraDoModal } from "../../helpers/LoginAndSignUp";
import { useState } from "react";
import useUsuario from "../../hooks/useUsuario.js";
import InfoPerfil from "../Perfil/InfoPerfil.jsx";

export default function ModalEditarPerfil() {
  const [propsModal, setPropsModal] = useState({});
  const { usuario } = useUsuario();
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
      nomeModal="modalVerPerfil"
      titulo={`${usuario.nome} - Perfil`}
      subtitulo="Todos os dados da sua conta."
      {...propsModal}
    >
      <InfoPerfil />
    </TemplateModal>
  );
}
