import React from "react";
import TemplateModal from "./Template.jsx";
import { useNavigate } from "react-router-dom";
import FormSignUp from "../Forms/FormSignUp.jsx";

export default function ModalSignUp() {
  const navigate = useNavigate();
  return (
    <TemplateModal
      navigateToOnClose="/login"
      nomeModal="modalSignUp"
      titulo="Criar conta"
      subtitulo="Rápido e fácil. Junte-se a nós"
    >
      <FormSignUp handleClose={() => navigate("/login")} />
    </TemplateModal>
  );
}
