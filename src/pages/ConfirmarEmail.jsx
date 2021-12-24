import React from "react";
import { ConfirmarEmail, Text } from "../styles";
import Box from "@material-ui/core/Box";
import { FaEnvelope } from "react-icons/fa";
import IconAndText from "../components/IconAndText";

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
    </ConfirmarEmail.Container>
  );
}
