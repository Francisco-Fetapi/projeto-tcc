import React from "react";
import TemplateModal from "./Template.jsx";
import FormAlterarEmail from "../Forms/FormAlterarEmail";
import { useEffect } from "react";
import { alterarLarguraDoModal } from "../../helpers/LoginAndSignUp";
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
      nomeModal="modalAlterarEmail"
      titulo="Alterar Email"
      subtitulo=""
      {...propsModal}
      {...props}
    >
      <FormAlterarEmail setModal={props.setModal} />
    </TemplateModal>
  );
}
