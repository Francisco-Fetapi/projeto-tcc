import React from "react";
import Button from "@material-ui/core/Button";
import TextField1 from "../TextField1";
import Box from "@material-ui/core/Box";

import { Formik, Form } from "formik";
import useUsuario from "../../hooks/useUsuario";

export default function FormAddPost() {
  const { usuario } = useUsuario();

  return (
    <Formik
      initialValues={{
        mini_biografia: usuario.mini_biografia,
      }}
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
          >
            Concluir
          </Button>
        </Box>
      </Form>
    </Formik>
  );
}
