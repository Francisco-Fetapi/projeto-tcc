import React, { useEffect } from "react";
import { ConfirmarEmail, Text } from "../styles";
import Box from "@material-ui/core/Box";
import { FaEnvelope } from "react-icons/fa";
import IconAndText from "../components/IconAndText";
import FormConfirmarEmail from "../components/Forms/FormConfirmarEmail";

import useUsuario from "../hooks/useUsuario";
import { IMG_USER_PADRAO } from "../API";

export default function ConfirmarEmail1() {
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
    <ConfirmarEmail.Container>
      <Box className="titulo_e_descricao">
        <IconAndText Icon={FaEnvelope} label="Confirmar Email" />
        <Box mt={1}>
          <Text align="center" variant="body1" color="textSecondary">
            Precisamos confirmar se o email inserido para criar essa conta lhe
            pertence realmente
          </Text>
        </Box>
      </Box>
      <Box mt={2} className="foto-e-form">
        <Box>
          <img src={IMG_USER_PADRAO} alt="Imagem do usuario" />
          <Text variant="h6">Nome Usuario</Text>
          <Text color="textSecondary" variant="subtitle2">
            email@gmail.com
          </Text>
        </Box>
        <FormConfirmarEmail />
      </Box>
    </ConfirmarEmail.Container>
  );
}
