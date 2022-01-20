import React from "react";
import Button from "@material-ui/core/Button";
import TextField1 from "../TextField1";
import Box from "@material-ui/core/Box";

import { Formik, Form } from "formik";
import useUsuario from "~/hooks/useUsuario";

import { useSelector } from "react-redux";
import { selectAll } from "~/store/App.selectors";
import LinearProgress from "../Progress/Linear.jsx";
import useLinearProgress from "~/hooks/useLinearProgress";

export default function FormAddPost({ setModal }) {
  const { alterarBiografia } = useUsuario();
  const { usuario } = useSelector(selectAll);
  const LoadingLinear = useLinearProgress();

  function alterar(values, actions) {
    alterarBiografia(values, actions, { setModal, LoadingLinear });
  }

  return (
    <>
      <LinearProgress aberto={LoadingLinear.loading} />
      <Formik
        initialValues={{
          mini_biografia: usuario.mini_biografia,
        }}
        onSubmit={alterar}
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
    </>
  );
}
