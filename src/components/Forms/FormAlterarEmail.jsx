import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField1 from "../TextField1";
import Box from "@material-ui/core/Box";

import Security from "@material-ui/icons/Security";
import AlternateEmail from "@material-ui/icons/AlternateEmail";

import { Formik, Form } from "formik";
import useUsuario from "../../hooks/useUsuario";

import { FaUserLock } from "react-icons/fa";
import { Text } from "../../styles";

export default function FormAlterarEmail() {
  const { alterarEmail } = useUsuario();
  const [form2, setForm2] = useState(false);
  const [dataForm1, setDataForm1] = useState({});

  function inserirNovoEmailESenha(values, actions) {
    alterarEmail.inserirNovoEmailESenha(
      values,
      actions,
      setForm2,
      setDataForm1
    );
  }
  function inserirCodigo(values, actions) {
    const allData = { ...dataForm1, ...values };
    alterarEmail.inserirCodigo(allData, actions);
    console.log(allData);
  }

  return (
    <div>
      {!form2 && (
        <FormInserirNovoEmailESenha
          inserirNovoEmailESenha={inserirNovoEmailESenha}
        />
      )}
      {form2 && <FormInserirCodigo inserirCodigo={inserirCodigo} />}
    </div>
  );
}

function FormInserirNovoEmailESenha({ inserirNovoEmailESenha }) {
  return (
    <Formik
      initialValues={{
        novo_email: "",
        senha_conf: "",
      }}
      onSubmit={inserirNovoEmailESenha}
    >
      <Form autoComplete="off">
        <Box mt={-0.5}>
          <TextField1
            icon={<AlternateEmail style={{ width: 18, height: 18 }} />}
            id="novo_email"
            label="Novo email"
          />
        </Box>
        <Box mt={1}>
          <Text color="textSecondary" variant="subtitle2">
            Um código de confirmação será enviado para esse email para confirmar
            se ele lhe pertence.
          </Text>
        </Box>
        <Box mt={2}>
          <TextField1
            icon={<FaUserLock />}
            id="senha_conf"
            label="Palavra-passe"
          />
        </Box>
        <Box mt={1}>
          <Text color="textSecondary" variant="subtitle2">
            Para confirmar as alterações
          </Text>
        </Box>

        <Box mt={4} display="flex" justifyContent="center">
          <Button
            variant="contained"
            style={{ height: "42px" }}
            color="primary"
            type="submit"
          >
            Concluido
          </Button>
        </Box>
      </Form>
    </Formik>
  );
}
function FormInserirCodigo({ inserirCodigo }) {
  return (
    <Formik
      initialValues={{
        codigo: "",
      }}
      onSubmit={inserirCodigo}
    >
      <Form autoComplete="off">
        <Box mt={-0.5}>
          <TextField1
            placeholder="XXX-XXX"
            icon={<Security />}
            id="codigo"
            label="Código de confirmação"
            inputProps={{
              maxLength: 6,
            }}
          />
        </Box>
        <Box mt={1}>
          <Text color="textSecondary" variant="subtitle2">
            O código de confirmação foi enviado para o seu novo email.
          </Text>
        </Box>

        <Box mt={4} display="flex" justifyContent="center">
          <Button
            variant="contained"
            style={{ height: "42px" }}
            color="primary"
            type="submit"
          >
            Alterar Email
          </Button>
        </Box>
      </Form>
    </Formik>
  );
}
