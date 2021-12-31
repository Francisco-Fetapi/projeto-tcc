import React from "react";
import { Text } from "../../styles";
import { ConfirmarEmail } from "../../styles";
import Box from "@material-ui/core/Box";
import TextField1 from "../TextField1";
import { useNavigate } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Security from "@material-ui/icons/Security";

import { Formik, Form } from "formik";

export default function FormConfirmarEmail() {
  const navigate = useNavigate();
  function confirmar() {
    navigate("/mais-sobre-voce");
  }
  return (
    <ConfirmarEmail.Form>
      <Formik
        initialValues={{
          cod_confirmacao: "123",
        }}
      >
        <Form autoComplete="off">
          <Box mt={-0.5}>
            <TextField1
              placeholder="XXX-XXX-XXX"
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
              onClick={confirmar}
            >
              Confirmar
            </Button>
            <br />
            <Button
              variant="text"
              style={{ width: "250px", height: "42px" }}
              color="primary"
            >
              Reenviar o código
            </Button>
          </Box>
        </Form>
      </Formik>
    </ConfirmarEmail.Form>
  );
}
