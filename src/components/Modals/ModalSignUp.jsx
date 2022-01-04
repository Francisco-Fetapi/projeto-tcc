import React, { useEffect, useState } from "react";
import TemplateModal from "./Template.jsx";
import { useNavigate } from "react-router-dom";
import FormSignUp from "../Forms/FormSignUp.jsx";
import { alterarLarguraDoModal } from "../../helpers/LoginAndSignUp";

export default function ModalSignUp() {
  const navigate = useNavigate();
  const [propsModal, setPropsModal] = useState({});
  useEffect(() => {
    window.onresize = () => alterarLarguraDoModal(setPropsModal, 390);
    window.onload = () => alterarLarguraDoModal(setPropsModal, 390);
    return () => {
      window.onresize = null;
      window.onload = null;
    };
  }, []);
  return (
    <TemplateModal
      navigateToOnClose="/login"
      nomeModal="modalSignUp"
      titulo="Criar conta"
      subtitulo="Rápido e fácil. Junte-se a nós"
      {...propsModal}
    >
      <FormSignUp handleClose={() => navigate("/login")} />
    </TemplateModal>
  );
}
