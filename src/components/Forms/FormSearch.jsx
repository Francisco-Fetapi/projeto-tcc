import React from "react";
import TextField1 from "../TextField1.jsx";
import Search from "@material-ui/icons/Search";

import { Formik, Form } from "formik";

export default function FormSearch({ procurar, defaultValue, ...props }) {
  return (
    <Formik
      initialValues={{
        search: defaultValue,
      }}
      onSubmit={procurar}
    >
      <Form autoComplete="off">
        <TextField1
          icon={<Search />}
          type="search"
          className="field-pesquisar"
          {...props}
        />
      </Form>
    </Formik>
  );
}
