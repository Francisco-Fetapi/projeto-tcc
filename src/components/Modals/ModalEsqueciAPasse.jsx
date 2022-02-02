import React from "react";
import TemplateModal from "./Template.jsx";
import FormEsqueciAPasse from "../Forms/FormEsqueciAPasse.jsx";
import { useState } from "react";

export default function ModalEsqueciAPasse(props) {
  const [propsModal, setPropsModal] = useState({});

  return (
    <TemplateModal
      navigateToOnClose="/login"
      nomeModal="modalEsqueciAPasse"
      titulo="Esqueci a palavra-passe"
      subtitulo="Defina uma nova palavra-passe"
      setPropsModal={setPropsModal}
      {...propsModal}
      {...props}
    >
      <FormEsqueciAPasse />
    </TemplateModal>
  );
}
