import React, { useState } from "react";
import { Text } from "../../styles";
import { ContainerFormLogin } from "../../styles/pages/LoginAndSignUp";
import Box from "@material-ui/core/Box";
import TextField1 from "../TextField1";
import { FaUserLock } from "react-icons/fa";
import Checkbox from "@material-ui/core/Checkbox";
import AlternateEmail from "@material-ui/icons/AlternateEmail";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { useNavigate } from "react-router-dom";

import { Formik, Form } from "formik";
import useUsuario from "../../hooks/useUsuario";
import LinearProgress from "../Progress/Linear.jsx";
import useLinearProgress from "../../hooks/useLinearProgress";

import Alerta from "../Alerta";
import useAlert from "../../hooks/useAlert";

export default function FormLogin() {
  const [checked, setChecked] = useState(false);
  const { logar } = useUsuario();
  const navigate = useNavigate();
  const LoadingLinear = useLinearProgress();
  const { alert, alertar, fechar } = useAlert();

  function handleChange() {
    setChecked((state) => !state);
  }

  return (
    <>
      <ContainerFormLogin>
        <LinearProgress aberto={LoadingLinear.loading} />
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(v, a) => logar(v, a, LoadingLinear, alertar)}
        >
          <Form autoComplete="off">
            <Box my={2}>
              <Text variant="h4" style={{ fontWeight: "bold" }}>
                Inciar Sessão
              </Text>
            </Box>
            <Box my={2.5}>
              <TextField1
                placeholder="Insira seu email"
                icon={<AlternateEmail style={{ width: 18, height: 18 }} />}
                id="email"
                label="Email"
              />
            </Box>
            <Box mt={2.5}>
              <TextField1
                placeholder="Insira a sua palavra-passe"
                type={checked ? "text" : "password"}
                icon={<FaUserLock />}
                id="password"
                label="Palavra-passe"
              />
            </Box>
            <Box>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    color="primary"
                    onChange={handleChange}
                  />
                }
                label="Mostrar palavra-passe"
              />
            </Box>
            <Box mt={2}>
              <Button
                variant="contained"
                style={{ height: "42px" }}
                color="primary"
                fullWidth
                type="submit"
              >
                Inciar Sessão
              </Button>
            </Box>
            <Box
              className="btnCriarConta"
              mt={2}
              display="flex"
              justifyContent="center"
            >
              <Button
                style={{ height: "42px" }}
                color="secondary"
                variant="contained"
                onClick={() => navigate("/criar-conta")}
              >
                Criar conta
              </Button>
            </Box>
            <Box className="esqueciAPasse">
              <Button
                style={{ height: "42px" }}
                color="primary"
                fullWidth
                onClick={() => navigate("/esqueci-a-passe")}
              >
                Esqueci minha palavra-passe
              </Button>
            </Box>
          </Form>
        </Formik>
      </ContainerFormLogin>
      <Alerta alert={alert} fechar={fechar} />
    </>
  );
}
