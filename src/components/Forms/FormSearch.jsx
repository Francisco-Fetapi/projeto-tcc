import React from "react";
import TextField1 from "../TextField1.jsx";
import Search from "@material-ui/icons/Search";
import Box from "@material-ui/core/Box";

import { Formik, Form } from "formik";

export default function FormSearch() {
  return (
    <Box ml={5}>
      <Formik
        initialValues={{
          search: "o",
        }}
      >
        <Form autoComplete="off">
          <TextField1
            icon={<Search />}
            placeholder="procurar filmes,series e pessoas"
            id="search"
            className="field-pesquisar"
          />
        </Form>
      </Formik>
    </Box>
  );
}
