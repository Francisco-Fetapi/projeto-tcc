import React from "react";
import TemplateModal from "./Template.jsx";
// import { useNavigate } from "react-router-dom";
import FormEsqueciAPasse from "../Forms/FormEsqueciAPasse.jsx";

export default function ModalSignUp() {
  //   const navigate = useNavigate();
  return (
    <TemplateModal
      navigateToOnClose="/login"
      nomeModal="modalEsqueciAPasse"
      titulo="Esqueci a palavra-passe"
      subtitulo="Insira seu email e defina uma nova palavra-passe"
    >
      <FormEsqueciAPasse />
    </TemplateModal>
  );
}
