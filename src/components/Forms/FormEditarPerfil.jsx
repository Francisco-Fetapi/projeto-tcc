import React from "react";
import Button from "@material-ui/core/Button";
import TextField1 from "../TextField1";
import Box from "@material-ui/core/Box";
import MenuItem from "@material-ui/core/MenuItem";

import Radio from "@material-ui/core/Radio";
import RadioGroupMui from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

import { Formik, Form, useField } from "formik";
import paises from "~/mock/paises.json";
import generos from "~/mock/generos.json";
import motivos from "~/mock/motivosAssistir.json";
import { Text } from "~/styles";
import { FaUser } from "react-icons/fa";

import { useSelector } from "react-redux";
import { selectAppState } from "~/store/App.selectors";
import useUsuario from "~/hooks/useUsuario";

import LinearProgress from "../Progress/Linear.jsx";
import useLinearProgress from "~/hooks/useLinearProgress";

import Alerta from "../Alerta";
import useAlert from "~/hooks/useAlert";

function RadioGroup({ children, id }) {
  const [field] = useField({ name: id });
  return <RadioGroupMui {...field}>{children}</RadioGroupMui>;
}

export default function FormEditarPerfil({ setModal }) {
  const paisesArray = Object.keys(paises);
  const { updatePerfil } = useUsuario();
  const usuario = useSelector(selectAppState("usuario"));
  const LoadingLinear = useLinearProgress();
  const { alert, alertar, fechar } = useAlert();
  function atualizarPerfil(values, actions) {
    updatePerfil(values, actions, { setModal, LoadingLinear, alertar });
  }

  return (
    <>
      <LinearProgress aberto={LoadingLinear.loading} />
      <Alerta alert={alert} fechar={fechar} />
      <Formik
        initialValues={{
          mini_biografia: usuario.mini_biografia,
          nome: usuario.nome,
          senha: usuario.senha,
          data_nascimento: usuario.data_nascimento,
          genero: usuario.genero,
          pais: usuario.pais,
          estado: usuario.estado,
          cidade: usuario.cidade,
          genero_favorito: usuario.genero_favorito,
          genero_favorito_porque: usuario.genero_favorito_porque || "",
          genero_n_favorito: usuario.genero_n_favorito,
          assisto_para: usuario.assisto_para,
          password: "",
        }}
        onSubmit={atualizarPerfil}
      >
        {({ values }) => (
          <Form autoComplete="off">
            <TextField1
              placeholder="Insira seu nome"
              icon={<FaUser />}
              id="nome"
              label="Nome de usuário"
            />

            <Box mt={2.5}>
              <TextField1
                placeholder="Data de nascimento"
                type="date"
                icon={null}
                id="data_nascimento"
                label="Quando você nasceu?"
              />
            </Box>

            <Box className="genero_e_foto" my={2.5}>
              <Box>
                <FormControl component="fieldset">
                  <FormLabel component="legend">
                    <Text variant="subtitle1" style={{ fontWeight: 500 }}>
                      Genero
                    </Text>
                  </FormLabel>
                  <RadioGroup aria-label="gender" id="genero" color="primary">
                    <Box display="flex">
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
                    </Box>
                  </RadioGroup>
                </FormControl>
              </Box>
            </Box>

            <Box>
              <TextField1 select id="pais" label="Escolha o seu pais">
                {paisesArray.map((pais) => (
                  <MenuItem key={pais} value={pais}>
                    {pais}
                  </MenuItem>
                ))}
              </TextField1>
            </Box>
            <Box mt={2.5}>
              <TextField1 select id="estado" label="Escolha o seu estado">
                {Object.keys(paises[values.pais]).map((estado) => (
                  <MenuItem key={estado} value={estado}>
                    {estado}
                  </MenuItem>
                ))}
              </TextField1>
            </Box>
            <Box mt={2.5}>
              {paises[values.pais][values.estado] && (
                <>
                  {paises[values.pais][values.estado].length > 0 && (
                    <TextField1 select id="cidade" label="Escolha a sua cidade">
                      {paises[values.pais][values.estado].map((cidade) => (
                        <MenuItem key={cidade} value={cidade}>
                          {cidade}
                        </MenuItem>
                      ))}
                    </TextField1>
                  )}

                  {paises[values.pais][values.estado].length === 0 && (
                    <TextField1 id="cidade" label="Nome da sua cidade" />
                  )}
                </>
              )}
              {!paises[values.pais][values.estado] && (
                <TextField1 id="cidade" label="Nome da sua cidade" />
              )}
            </Box>

            <Box mt={2.5}>
              <TextField1
                select
                id="genero_favorito"
                label="Escolha o seu genero favorito"
              >
                {generos.map((genero) => (
                  <MenuItem key={genero} value={genero}>
                    {genero}
                  </MenuItem>
                ))}
              </TextField1>
            </Box>
            <Box mt={2.5}>
              <TextField1
                id="genero_favorito_porque"
                label="Gosto mais desse genero porque..."
                placeholder="Este campo é opcional"
              />
            </Box>

            <Box mt={2.5}>
              <TextField1
                select
                id="genero_n_favorito"
                label="O genero que menos gostas"
              >
                {generos
                  .filter((genero) => genero !== values.genero_favorito)
                  .map((genero) => (
                    <MenuItem key={genero} value={genero}>
                      {genero}
                    </MenuItem>
                  ))}
              </TextField1>
            </Box>
            <Box mt={2.5}>
              <TextField1 select id="assisto_para" label="Assisto para...">
                {motivos.map((motivo) => (
                  <MenuItem key={motivo} value={motivo}>
                    {motivo}
                  </MenuItem>
                ))}
              </TextField1>
            </Box>

            <Box mt={2.5}>
              <TextField1
                placeholder="Sua senha atual"
                icon={null}
                id="password"
                label="Senha"
              />
              <Text variant="body2" color="textSecondary">
                Necessária para efetivar as alterações
              </Text>
            </Box>

            <Box
              mt={4}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Button
                variant="contained"
                style={{ width: "150px", height: "42px" }}
                color="primary"
                type="submit"
              >
                Concluido
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </>
  );
}
