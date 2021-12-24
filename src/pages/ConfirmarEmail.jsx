import React from "react";
import { ConfirmarEmail, Text } from "../styles";
import Box from "@material-ui/core/Box";
import { FaEnvelope } from "react-icons/fa";
import IconAndText from "../components/IconAndText";
import FormConfirmarEmail from "../components/Forms/FormConfirmarEmail";

export default function ConfirmarEmail_() {
  return (
    <ConfirmarEmail.Container>
      <Box>
        <IconAndText Icon={FaEnvelope} label="Confirmar Email" />
        <Box mt={1}>
          <Text variant="body1" color="textSecondary">
            Precisamos confirmar se o email inserido para criar essa conta lhe
            pertence realmente
          </Text>
        </Box>
      </Box>
      <Box mt={2} className="foto-e-form">
        <Box>
          <img src="./img/user.jpg" alt="Imagem do usuario" />
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
