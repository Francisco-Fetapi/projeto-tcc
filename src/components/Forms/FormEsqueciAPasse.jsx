import React, { useState } from "react";
import { Text } from "../../styles";
import { ContainerFormEsqueciAPasse } from "../../styles/pages/LoginAndSignUp";
import Box from "@material-ui/core/Box";
import TextField1 from "../TextField1";
import { FaUserLock } from "react-icons/fa";
import Button from "@material-ui/core/Button";
import Fingerprint from "@material-ui/icons/Fingerprint";
import AlternateEmail from "@material-ui/icons/AlternateEmail";

export default function FormEsqueciAPasse({ handleClose }) {
  const [form2, setForm2] = useState(false);
  const [form3, setForm3] = useState(false);

  function definirEmail() {
    setForm2(true);
  }
  function definirCodigo() {
    setForm2(false);
    setForm3(true);
  }
  return (
    <ContainerFormEsqueciAPasse>
      {!form2 && !form3 && <FormInserirEmail definirEmail={definirEmail} />}
      {form2 && !form3 && <FormInserirCodigo definirCodigo={definirCodigo} />}
      {form3 && <FormInserirNovaPasse />}
    </ContainerFormEsqueciAPasse>
  );
}

function FormInserirEmail({ definirEmail }) {
  return (
    <Box width={300} component="form" autocomplete="off">
      <Box mt={-0.5}>
        <TextField1
          placeholder="Insira seu email"
          icon={<AlternateEmail style={{ width: 18, height: 18 }} />}
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

      <Box mt={4} display="flex" justifyContent="center">
        <Button
          variant="contained"
          style={{ height: "42px" }}
          color="primary"
          onClick={definirEmail}
        >
          Envie-me o Código
        </Button>
      </Box>
    </Box>
  );
}
function FormInserirCodigo({ definirCodigo }) {
  return (
    <Box width={300} component="form" autocomplete="off">
      <Box mt={-0.5}>
        <TextField1
          placeholder="Insira o codigo"
          icon={<Fingerprint />}
          id="codigo_de_recuperacao"
          label="Código de recuperação"
        />
      </Box>
      <Box mt={1}>
        <Text color="textSecondary" variant="subtitle2">
          Insira o código de recuperação que foi enviado no seu email para
          definir uma nova <b>palavra-passe</b>
        </Text>
      </Box>

      <Box mt={4} display="flex" justifyContent="center">
        <Button
          onClick={definirCodigo}
          variant="contained"
          style={{ height: "42px" }}
          color="primary"
        >
          Enviar Código
        </Button>
      </Box>
    </Box>
  );
}
function FormInserirNovaPasse() {
  return (
    <Box width={300} component="form" autocomplete="off">
      <Box mt={-0.5}>
        <TextField1
          placeholder="Insira uma nova palavra-passe"
          icon={<FaUserLock />}
          id="nova_senha"
          label="Nova palavra-passe"
          type="password"
        />
      </Box>
      <Box mt={1}>
        <Text color="textSecondary" variant="subtitle2">
          Depois de definida, essa será a <b>palavra-passe</b> com a qual a sua
          conta estará vinculada.
        </Text>
      </Box>
      <Box mt={2}>
        <TextField1
          icon={<FaUserLock />}
          placeholder="Deve ser igual ao campo anterior"
          id="conf_nova_senha"
          label="Confirmar palavra-passe"
          type="password"
        />
      </Box>

      <Box mt={4} display="flex" justifyContent="center">
        <Button variant="contained" style={{ height: "42px" }} color="primary">
          Definir Nova Passe
        </Button>
      </Box>
    </Box>
  );
}
