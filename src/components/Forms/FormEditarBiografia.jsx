import React from "react";
import Button from "@material-ui/core/Button";
import TextField1 from "../TextField1";
import Box from "@material-ui/core/Box";
// import { FaVideo, FaPhotoVideo, FaEye } from "react-icons/fa";

import { Formik, Form } from "formik";
import useUsuario from "../../hooks/useUsuario";

import { useSelector } from "react-redux";
import { selectAll } from "../../store/App.selectors";

export default function FormAddPost() {
  const { alterarBiografia } = useUsuario();
  const { usuario } = useSelector(selectAll);

  return (
    <Formik
      initialValues={{
        mini_biografia: usuario.mini_biografia,
      }}
      onSubmit={alterarBiografia}
    >
      <Form autoComplete="off">
        <TextField1
          label="Biografia"
          multiline
          rows={6}
          id="mini_biografia"
          fullWidth
          placeholder="Insira um biografia curta e descritiva."
        />
        <Box mt={1} display="flex" justifyContent={"center"}>
          <Button
            style={{ height: "42px" }}
            variant="contained"
            color="primary"
            type="submit"
          >
            Concluir
          </Button>
        </Box>
      </Form>
    </Formik>
  );
}
