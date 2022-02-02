import React from "react";
import TemplateModal from "./Template.jsx";
import FormAlterarEmail from "../Forms/FormAlterarEmail";
import { useState } from "react";

export default function ModalEsqueciAPasse(props) {
  const [propsModal, setPropsModal] = useState({});

  return (
    <TemplateModal
      nomeModal="modalAlterarEmail"
      titulo="Alterar Email"
      subtitulo=""
      setPropsModal={setPropsModal}
      {...propsModal}
      {...props}
    >
      <FormAlterarEmail setModal={props.setModal} />
    </TemplateModal>
  );
}
