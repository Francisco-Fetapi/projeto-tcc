import React, { useState } from "react";
import TemplateModal from "./Template.jsx";
import { useNavigate } from "react-router-dom";
import FormSignUp from "../Forms/FormSignUp.jsx";

export default function ModalSignUp(props) {
  const navigate = useNavigate();
  const [propsModal, setPropsModal] = useState({});

  return (
    <TemplateModal
      navigateToOnClose="/login"
      nomeModal="modalSignUp"
      titulo="Criar conta"
      subtitulo="Rápido e fácil. Junte-se a nós"
      setPropsModal={setPropsModal}
      {...propsModal}
      {...props}
    >
      <FormSignUp handleClose={() => navigate("/login")} />
    </TemplateModal>
  );
}
