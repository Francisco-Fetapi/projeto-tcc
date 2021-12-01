import React, { useState } from "react";
import { Text } from "../../styles";
import { ContainerFormLogin } from "../../styles/pages/LoginAndSignUp";
import Box from "@material-ui/core/Box";
import TextField1 from "../TextField1";
import { FaEnvelope, FaUserLock } from "react-icons/fa";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import ModalSignUp from "../Modals/ModalSignUp.jsx";
import { useNavigate } from "react-router-dom";

export default function FormLogin() {
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  function handleChange() {
    setChecked((state) => !state);
  }
  return (
    <>
      <ContainerFormLogin>
        <Box component="form" autocomplete="off">
          <Box my={2}>
            <Text variant="h4" style={{ fontWeight: "bold" }}>
              Inciar Sessão
            </Text>
          </Box>
          <Box my={2.5}>
            <TextField1
              placeholder="Insira seu email"
              icon={<FaEnvelope />}
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
            <Button style={{ height: "42px" }} color="primary" fullWidth>
              Esqueci minha palavra-passe
            </Button>
          </Box>
        </Box>
      </ContainerFormLogin>
      <ModalSignUp />
    </>
  );
}
