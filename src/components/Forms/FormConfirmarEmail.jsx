import React from "react";
import { Text } from "../../styles";
import { ConfirmarEmail } from "../../styles";
import Box from "@material-ui/core/Box";
import TextField1 from "../TextField1";
import Button from "@material-ui/core/Button";
import Security from "@material-ui/icons/Security";

import { Formik, Form } from "formik";
import useUsuario from "../../hooks/useUsuario";

export default function FormConfirmarEmail() {
  const { verificarEmail, reenviarCodigo } = useUsuario();

  return (
    <ConfirmarEmail.Form>
      <Formik
        initialValues={{
          cod_confirmacao: "",
        }}
        onSubmit={verificarEmail}
      >
        <Form autoComplete="off">
          <Box mt={-0.5}>
            <TextField1
              placeholder="XXX-XXX"
              icon={<Security />}
              id="cod_confirmacao"
              label="Código de confirmação"
            />
          </Box>
          <Box mt={1}>
            <Text color="textSecondary" variant="subtitle2">
              Copie e cole o código que enviamos ao seu email na caixa de texto
              acima.
            </Text>
          </Box>

          <Box mt={4} display="flex" flexDirection="column" alignItems="center">
            <Button
              variant="contained"
              style={{ width: "150px", height: "42px" }}
              color="primary"
              type="submit"
            >
              Confirmar
            </Button>
            <br />
            <Button
              variant="text"
              style={{ width: "250px", height: "42px" }}
              color="primary"
              onClick={reenviarCodigo}
            >
              Reenviar o código
            </Button>
          </Box>
        </Form>
      </Formik>
    </ConfirmarEmail.Form>
  );
}
