import React, { useState } from "react";
import { Text } from "~/styles";
import { ContainerFormEsqueciAPasse } from "~/styles/pages/LoginAndSignUp";
import Box from "@material-ui/core/Box";
import TextField1 from "../TextField1";
import { FaUserLock } from "react-icons/fa";
import Button from "@material-ui/core/Button";
import AlternateEmail from "@material-ui/icons/AlternateEmail";
import Security from "@material-ui/icons/Security";

import { Formik, Form } from "formik";
import useUsuario from "~/hooks/useUsuario";

import LinearProgress from "../Progress/Linear.jsx";
import useLinearProgress from "~/hooks/useLinearProgress";

export default function FormEsqueciAPasse({ handleClose }) {
  const [form2, setForm2] = useState(false);
  const [form3, setForm3] = useState(false);
  const { alterarSenha } = useUsuario();
  const [allData, setAllData] = useState({});
  const LoadingLinear = useLinearProgress();

  function definirEmail(values, actions) {
    alterarSenha.inserirEmail(
      values,
      actions,
      setForm2,
      setAllData,
      LoadingLinear
    );
  }
  function definirCodigo(values, actions) {
    alterarSenha.inserirCodigo(
      values,
      actions,
      setForm2,
      setForm3,
      allData,
      setAllData,
      LoadingLinear
    );
  }
  function concluir(values, actions) {
    const allValues = { ...allData, ...values };
    alterarSenha.concluir(allValues, actions, LoadingLinear);
  }
  return (
    <ContainerFormEsqueciAPasse>
      <LinearProgress aberto={LoadingLinear.loading} />
      {!form2 && !form3 && <FormInserirEmail definirEmail={definirEmail} />}
      {form2 && !form3 && <FormInserirCodigo definirCodigo={definirCodigo} />}
      {form3 && <FormInserirNovaPasse concluir={concluir} />}
    </ContainerFormEsqueciAPasse>
  );
}

function FormInserirEmail({ definirEmail }) {
  return (
    <Formik
      initialValues={{
        __email: "",
      }}
      style={{ width: 300 }}
      onSubmit={definirEmail}
    >
      <Form autoComplete="off">
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
            type="submit"
          >
            Envie-me o Código
          </Button>
        </Box>
      </Form>
    </Formik>
  );
}
function FormInserirCodigo({ definirCodigo }) {
  return (
    <Formik
      initialValues={{
        codigo_de_recuperacao: "",
      }}
      style={{ width: 300 }}
      onSubmit={definirCodigo}
    >
      <Form autoComplete="off">
        <Box mt={-0.5}>
          <TextField1
            icon={<Security />}
            id="codigo_de_recuperacao"
            label="Código de recuperação"
            placeholder="XXX-XXX"
            inputProps={{
              maxLength: 6,
            }}
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
            variant="contained"
            style={{ height: "42px" }}
            color="primary"
            type="submit"
          >
            Enviar Código
          </Button>
        </Box>
      </Form>
    </Formik>
  );
}
function FormInserirNovaPasse({ concluir }) {
  return (
    <Formik
      initialValues={{
        nova_senha: "",
        conf_nova_senha: "",
      }}
      style={{ width: 300 }}
      onSubmit={concluir}
    >
      <Form autoComplete="off">
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
            Depois de definida, essa será a <b>palavra-passe</b> com a qual a
            sua conta estará vinculada.
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
          <Button
            variant="contained"
            style={{ height: "42px" }}
            color="primary"
            type="submit"
          >
            Definir Nova Passe
          </Button>
        </Box>
      </Form>
    </Formik>
  );
}
