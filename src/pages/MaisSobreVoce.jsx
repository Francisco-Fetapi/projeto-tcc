import React, { useEffect } from "react";
import { MaisSobreVoce, Text } from "../styles";
import Box from "@material-ui/core/Box";
import { FaInfoCircle } from "react-icons/fa";
import IconAndText from "../components/IconAndText";
import FormMaisSobreVoce from "../components/Forms/FormMaisSobreVoce";
import useUsuario from "../hooks/useUsuario";

export default function MaisSobreVoce_() {
  const { seLogadoIrParaHome, logado, seNaoTemEmailIrParaCriarConta } =
    useUsuario();
  useEffect(seLogadoIrParaHome, []);
  useEffect(seNaoTemEmailIrParaCriarConta, []);
  useEffect(() => {
    window.onbeforeunload = () => false;
    return () => {
      window.onbeforeunload = null;
    };
  }, []);
  if (logado) {
    return <div />;
  }

  return (
    <MaisSobreVoce.Container>
      <Box>
        <IconAndText Icon={FaInfoCircle} label="Mais sobre você" />
        <Box mt={1}>
          <Text align="center" variant="body1" color="textSecondary">
            Preencha os campos abaixo pra completar o processo de criação do seu
            perfil. Essas informações serão exibidas publicamente para todos os
            usuários do sistema.
          </Text>
        </Box>
      </Box>
      <Box mt={9} className="form">
        <FormMaisSobreVoce />
      </Box>
    </MaisSobreVoce.Container>
  );
}
