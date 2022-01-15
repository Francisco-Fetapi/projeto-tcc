import React from "react";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createTheme } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { selectAll } from "../store/App.selectors";

export default function Theme({ children }) {
  const { dark } = useSelector(selectAll);

  const theme = createTheme({
    props: {
      // backgroundLogin:'#F0F2F5'
    },
    palette: {
      type: dark ? "dark" : "light",
      secondary: {
        light: "#81c784",
        main: "#4caf50",
        dark: "#388e3c",
        contrastText: "rgba(247, 247, 247, 0.939)",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
