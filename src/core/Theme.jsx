import React, { useEffect } from "react";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createTheme } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { selectAppState } from "../store/App.selectors";

import blue from "@material-ui/core/colors/blue";
import deepOrange from "@material-ui/core/colors/deepOrange";
// import green from "@material-ui/core/colors/green";

export default function Theme({ children }) {
  const dark = useSelector(selectAppState("dark"));

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

  useEffect(() => {
    const body = document.querySelector("body");
    if (dark) {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={dark ? "dark" : ""}>{children}</div>
    </ThemeProvider>
  );
}
