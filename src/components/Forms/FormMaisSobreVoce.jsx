import React from "react";
import { MaisSobreVoce } from "../../styles";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import MenuItem from "@material-ui/core/MenuItem";
import TextField1 from "../TextField1";

import { Formik, Form } from "formik";
import useUsuario from "../../hooks/useUsuario";
import paises from "../../mock/paises.json";
import generos from "../../mock/generos.json";
import motivos from "../../mock/motivosAssistir.json";

export default function FormMaisSobreVoce() {
  const { criarConta } = useUsuario();
  const paisesArray = Object.keys(paises);
  return (
    <MaisSobreVoce.Form>
      <Formik
        initialValues={{
          pais: paisesArray[0],
          estado: "",
          cidade: "",
          genero_favorito: "",
          genero_favorito_porque: "",
          pior_genero: "",
          pra_que_assistir: "",
          biografia: "",
        }}
        onSubmit={criarConta}
      >
        {({ values }) => (
          <Form autoComplete="off">
            <Box className="grid-3">
              <Box>
                <TextField1 select id="pais" label="Escolha o seu pais">
                  {paisesArray.map((pais) => (
                    <MenuItem key={pais} value={pais}>
                      {pais}
                    </MenuItem>
                  ))}
                </TextField1>
              </Box>
              <Box>
                <TextField1 select id="estado" label="Escolha o seu estado">
                  {Object.keys(paises[values.pais]).map((estado) => (
                    <MenuItem key={estado} value={estado}>
                      {estado}
                    </MenuItem>
                  ))}
                </TextField1>
              </Box>
              <Box>
                {paises[values.pais][values.estado] && (
                  <>
                    {paises[values.pais][values.estado].length > 0 && (
                      <TextField1
                        select
                        id="cidade"
                        label="Escolha a sua cidade"
                      >
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
            </Box>
            <Box mt={5} className="grid-2">
              <Box>
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
              <Box>
                <TextField1
                  id="genero_favorito_porque"
                  label="Gosto mais desse genero porque..."
                  placeholder="Este campo é opcional"
                />
              </Box>
            </Box>
            <Box mt={5} className="grid-2">
              <Box>
                <TextField1
                  select
                  id="pior_genero"
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
              <Box>
                <TextField1
                  select
                  id="pra_que_assistir"
                  label="Assisto para..."
                >
                  {motivos.map((motivo) => (
                    <MenuItem key={motivo} value={motivo}>
                      {motivo}
                    </MenuItem>
                  ))}
                </TextField1>
              </Box>
            </Box>
            <Box mt={5}>
              <TextField1
                multiline
                id="biografia"
                label="Fale um pouco de você"
                rows={5}
                fullWidth
              />
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
    </MaisSobreVoce.Form>
  );
}
