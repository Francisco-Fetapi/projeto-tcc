import React from "react";
import TemplateModal from "./Template.jsx";
import FormEsqueciAPasse from "../Forms/FormEsqueciAPasse.jsx";
import { useEffect } from "react";
import { alterarLarguraDoModal } from "~/helpers/LoginAndSignUp";
import { useState } from "react";

export default function ModalEsqueciAPasse(props) {
  const [propsModal, setPropsModal] = useState({});
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
      navigateToOnClose="/login"
      nomeModal="modalEsqueciAPasse"
      titulo="Esqueci a palavra-passe"
      subtitulo="Defina uma nova palavra-passe"
      {...propsModal}
      {...props}
    >
      <FormEsqueciAPasse />
    </TemplateModal>
  );
}
