import React, { useEffect } from "react";
import { ConfirmarEmail, Text } from "../styles";
import Box from "@material-ui/core/Box";
import { FaEnvelope } from "react-icons/fa";
import IconAndText from "../components/IconAndText";
import FormConfirmarEmail from "../components/Forms/FormConfirmarEmail";

import useUsuario from "../hooks/useUsuario";
import { IMG_USER_PADRAO } from "../API";
import { selectAll } from "../store/SignUp.selectors";
import { useSelector } from "react-redux";

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

  const usuario = useSelector(selectAll);

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
          <Text variant="h6">{usuario.nome}</Text>
          <Text color="textSecondary" variant="subtitle2">
            {usuario.email}
          </Text>
        </Box>
        <FormConfirmarEmail />
      </Box>
    </ConfirmarEmail.Container>
  );
}
