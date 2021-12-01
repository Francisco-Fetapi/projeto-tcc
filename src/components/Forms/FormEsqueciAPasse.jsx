import React from "react";
import { Text } from "../../styles";
import { ContainerFormEsqueciAPasse } from "../../styles/pages/LoginAndSignUp";
import Box from "@material-ui/core/Box";
import TextField1 from "../TextField1";
import { FaEnvelope } from "react-icons/fa";
import Button from "@material-ui/core/Button";

export default function FormEsqueciAPasse({ handleClose }) {
  return (
    <ContainerFormEsqueciAPasse>
      <Box width={300} component="form" autocomplete="off">
        <Box mt={-0.5}>
          <TextField1
            placeholder="Insira seu email"
            icon={<FaEnvelope />}
            id="__email"
            label="Email"
          />
        </Box>
        <Box mt={1}>
          <Text color="textSecondary" variant="subtitle2">
            Um código de recuperação será enviado nesse email e usado para
            redefinir um nova <b>palavra-passe</b>
          </Text>
        </Box>

        <Box mt={4}>
          <Button
            variant="contained"
            style={{ height: "42px" }}
            color="primary"
            fullWidth
          >
            Redefinir passe
          </Button>
        </Box>
      </Box>
    </ContainerFormEsqueciAPasse>
  );
}
