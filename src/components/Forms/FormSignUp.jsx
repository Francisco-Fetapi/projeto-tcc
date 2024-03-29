import React, { useRef } from "react";
import { Text, Link } from "~/styles";
import { ContainerFormSignUp } from "~/styles/pages/LoginAndSignUp";
import Box from "@material-ui/core/Box";
import TextField1 from "../TextField1";
import { FaUserLock, FaUser, FaPlusCircle } from "react-icons/fa";
import Button from "@material-ui/core/Button";

import Radio from "@material-ui/core/Radio";
import RadioGroupMui from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

import AlternateEmail from "@material-ui/icons/AlternateEmail";

import { Formik, Form, useField } from "formik";
import useUsuario from "~/hooks/useUsuario";
import { IMG_USER_PADRAO } from "~/API";
import useLinearProgress from "~/hooks/useLinearProgress";

import LinearProgress from "../Progress/Linear.jsx";

function RadioGroup({ children, id }) {
  const [field] = useField({ name: id });
  return <RadioGroupMui {...field}>{children}</RadioGroupMui>;
}

export default function FormSignUp({ handleClose }) {
  const img = useRef();
  const { exibirFotoASerAlterada, enviarDadosDaConta, criar_conta_dados } =
    useUsuario();
  const LoadingLinear = useLinearProgress();

  function alterarFoto(e) {
    exibirFotoASerAlterada(e, img);
  }

  return (
    <>
      <ContainerFormSignUp>
        <LinearProgress aberto={LoadingLinear.loading} />
        <Formik
          initialValues={{
            _nome: criar_conta_dados.nome || "",
            _email: criar_conta_dados.email || "",
            _password: criar_conta_dados.password || "",
            _password2: criar_conta_dados.password2 || "",
            _data_nascimento: criar_conta_dados.data_nascimento || "",
            genero: criar_conta_dados.genero || "m",
          }}
          onSubmit={(values, actions) =>
            enviarDadosDaConta(values, actions, LoadingLinear)
          }
          style={{ width: 300 }}
        >
          <Form autoComplete="off">
            <Box mb={2.5}>
              <TextField1
                placeholder="Insira seu nome"
                icon={<FaUser />}
                id="_nome"
                label="Nome de usuário"
              />
            </Box>
            <Box my={2.5}>
              <TextField1
                placeholder="Insira seu email"
                icon={<AlternateEmail style={{ width: 18, height: 18 }} />}
                id="_email"
                label="Email"
              />
            </Box>
            <Box mt={2.5}>
              <TextField1
                placeholder="Insira a sua palavra-passe"
                type="password"
                icon={<FaUserLock />}
                id="_password"
                label="Palavra-passe"
              />
            </Box>
            <Box mt={2.5}>
              <TextField1
                placeholder="Confirme a sua palavra-passe"
                type="password"
                icon={<FaUserLock />}
                id="_password2"
                label="Confirmar palavra-passe"
              />
            </Box>
            <Box mt={2.5}>
              <TextField1
                placeholder="Data de nascimento"
                type="date"
                icon={null}
                id="_data_nascimento"
                label="Quando você nasceu?"
              />
            </Box>
            <Box className="genero_e_foto" mt={2.5}>
              <Box>
                <FormControl component="fieldset">
                  <FormLabel component="legend">
                    <Text variant="subtitle1" style={{ fontWeight: 500 }}>
                      Genero
                    </Text>
                  </FormLabel>
                  <RadioGroup aria-label="gender" id="genero" color="primary">
                    <FormControlLabel
                      value="m"
                      control={<Radio color="primary" />}
                      label="Masulino"
                    />
                    <FormControlLabel
                      value="f"
                      control={<Radio color="primary" />}
                      label="Feminino"
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
              <Box>
                <Text
                  align="right"
                  variant="subtitle1"
                  style={{ fontWeight: 500 }}
                >
                  Foto de perfil
                </Text>
                <label className="foto">
                  <img ref={img} src={IMG_USER_PADRAO} alt="Foto perfil" />
                  <input
                    type="file"
                    accept="image/*"
                    id="foto"
                    hidden
                    onChange={alterarFoto}
                  />
                  <div>
                    <FaPlusCircle />
                  </div>
                </label>
              </Box>
            </Box>
            <Box my={2}>
              <Text variant="subtitle2" color="textSecondary">
                Ao clicares em Regista-te, aceitas os nossos{" "}
                <Link target="__blank" to="/sobre#termos">
                  Termos
                </Link>
                , a nossa
                <Link target="__blank" to="/sobre#politica-de-privacidade">
                  {" "}
                  Política de privacidade
                </Link>{" "}
                e a nossa{" "}
                <Link target="__blank" to="/sobre#politica-de-cookies">
                  {" "}
                  Política de cookies
                </Link>{" "}
              </Text>
            </Box>

            <Box mt={4}>
              <Button
                variant="contained"
                style={{ height: "42px" }}
                color="primary"
                fullWidth
                type="submit"
              >
                Criar conta
              </Button>
            </Box>
            <Box mt={2}>
              <Button
                onClick={handleClose}
                style={{ height: "42px" }}
                color="primary"
                fullWidth
                type="button"
              >
                Já tenho uma conta
              </Button>
            </Box>
          </Form>
        </Formik>
      </ContainerFormSignUp>
    </>
  );
}
