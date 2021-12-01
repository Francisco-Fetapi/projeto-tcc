import React, { useEffect } from "react";
import { Container, LoginBanner } from "../styles/pages/LoginAndSignUp";
import TextBanner from "../components/LoginAndSignUp/TextBanner.jsx";
import useTheme from "@material-ui/styles/useTheme";
import Paper from "@material-ui/core/Paper";
import FormLogin from "../components/Forms/FormLogin";
import useModal from "../hooks/useModal.js";

export default function LoginAndSignUp({ page }) {
  const theme = useTheme();

  const [aberto, abrirModalSignUp, fecharModalSignUp] = useModal("modalSignUp");
  useEffect(() => {
    if (page === "signUp") {
      abrirModalSignUp();
    } else if (page === "login" && aberto) {
      fecharModalSignUp();
    }
  }, [page]);
  return (
    <Container background={theme.palette.primary.main}>
      <Paper className="paper" elevation={20}>
        <LoginBanner>
          <TextBanner />
        </LoginBanner>
        <FormLogin />
      </Paper>
    </Container>
  );
}
