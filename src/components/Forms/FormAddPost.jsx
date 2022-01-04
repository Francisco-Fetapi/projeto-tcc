import React from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import TextField1 from "../TextField1";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import { FaVideo, FaPhotoVideo, FaEye } from "react-icons/fa";
import Send from "@material-ui/icons/Send";
import AddCircle from "@material-ui/icons/AddCircle";

import { Formik, Form } from "formik";
import useUsuario from "../../hooks/useUsuario";
import { BASE_URL, IMG_USER_PADRAO } from "../../API";

import { useSelector } from "react-redux";
import { selectAll } from "../../store/App.selectors";

export default function FormAddPost() {
  const { logado } = useUsuario();

  const { usuario } = useSelector(selectAll);
  const fotoPerfil = `${BASE_URL}/${usuario.foto_perfil}`;

  const a_carregar = logado && !usuario.id;
  return (
    <Paper className="paper" elevation={3}>
      <Formik
        initialValues={{
          post: "",
        }}
      >
        <Form autoComplete="off">
          <Box display="flex" alignItems="flex-start">
            {a_carregar && (
              <img src={IMG_USER_PADRAO} alt="imagem do usuario" />
            )}
            {!a_carregar && (
              <img
                src={fotoPerfil}
                alt="imagem do usuario"
                style={{ width: 64, height: 54 }}
              />
            )}
            <TextField1
              multiline
              rowsMax={10}
              id="post"
              fullWidth
              placeholder="Escreva alguma coisa e publique"
            />
          </Box>
          <Box mt={1} display="flex" justifyContent={"center"}>
            <Button endIcon={<Send />} variant="contained" color="primary">
              Publicar
            </Button>
          </Box>
          <Box mt={1}>
            <Divider />
          </Box>
          <Box className="button-group">
            <ButtonGroup fullWidth variant="text" color="primary">
              <Button startIcon={<FaVideo />}>Videos</Button>
              <Button startIcon={<FaPhotoVideo />}>Foto</Button>
              <Button startIcon={<FaEye />}>A Assistir</Button>
              <Button startIcon={<AddCircle />}>Mais</Button>
            </ButtonGroup>
          </Box>
        </Form>
      </Formik>
    </Paper>
  );
}
