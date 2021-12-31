import React from "react";
import { MaisSobreVoce } from "../../styles";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import MenuItem from "@material-ui/core/MenuItem";
import TextField1 from "../TextField1";
import { useNavigate } from "react-router-dom";

import { Formik, Form } from "formik";

const itens = [1, 2, 3].map((item) => (
  <MenuItem key={item} value={`item${item}`}>
    Item {item}
  </MenuItem>
));

export default function FormMaisSobreVoce() {
  const navigate = useNavigate();

  function concluido() {
    navigate("/");
  }
  return (
    <MaisSobreVoce.Form>
      <Formik
        initialValues={{
          pais: "item1",
          estado: "item2",
          cidade: "item3",
          genero_favorito: "item2",
          genero_favorito_porque: "item3",
          pior_genero: "item1",
          pra_que_assistir: "item3",
          biografia: "",
        }}
      >
        <Form autoComplete="off">
          <Box className="grid-3">
            <Box>
              <TextField1 select id="pais" label="Escolha o seu pais">
                {itens}
              </TextField1>
            </Box>
            <Box>
              <TextField1 select id="estado" label="Escolha o seu estado">
                {itens}
              </TextField1>
            </Box>
            <Box>
              <TextField1 select id="cidade" label="Escolha a sua cidade">
                {itens}
              </TextField1>
            </Box>
          </Box>
          <Box mt={5} className="grid-2">
            <Box>
              <TextField1
                select
                id="genero_favorito"
                label="Escolha o seu genero favorito"
              >
                {itens}
              </TextField1>
            </Box>
            <Box>
              <TextField1
                select
                id="genero_favorito_porque"
                label="Gosto mais desse genero porque..."
              >
                {itens}
              </TextField1>
            </Box>
          </Box>
          <Box mt={5} className="grid-2">
            <Box>
              <TextField1
                select
                id="pior_genero"
                label="O genero que menos gostas"
              >
                {itens}
              </TextField1>
            </Box>
            <Box>
              <TextField1 select id="pra_que_assistir" label="Assisto para...">
                {itens}
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

          <Box mt={4} display="flex" flexDirection="column" alignItems="center">
            <Button
              variant="contained"
              style={{ width: "150px", height: "42px" }}
              color="primary"
              onClick={concluido}
            >
              Concluido
            </Button>
          </Box>
        </Form>
      </Formik>
    </MaisSobreVoce.Form>
  );
}
