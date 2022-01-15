import React from "react";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createTheme } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { selectAll } from "../store/App.selectors";

import blue from "@material-ui/core/colors/blue";
import deepOrange from "@material-ui/core/colors/deepOrange";
// import green from "@material-ui/core/colors/green";

export default function Theme({ children }) {
  const { dark } = useSelector(selectAll);

  const theme = createTheme({
    props: {
      // backgroundLogin:'#F0F2F5'
    },
    palette: {
      type: dark ? "dark" : "light",
      primary: blue,
      secondary: deepOrange,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={dark ? "dark" : ""}>{children}</div>
    </ThemeProvider>
  );
}
