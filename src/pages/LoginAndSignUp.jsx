import React, { useEffect } from "react";
import ModalSignUp from "../components/Modals/ModalSignUp.jsx";
import ModalEsqueciAPasse from "../components/Modals/ModalEsqueciAPasse.jsx";
import { Container, LoginBanner } from "../styles/pages/LoginAndSignUp";
import TextBanner from "../components/LoginAndSignUp/TextBanner.jsx";
import useTheme from "@material-ui/styles/useTheme";
import Paper from "@material-ui/core/Paper";
import FormLogin from "../components/Forms/FormLogin";
import useModal from "../hooks/useModal.js";

export default function LoginAndSignUp({ page }) {
  const theme = useTheme();

  const [modalSignUp, abrirSU, fecharSU] = useModal();
  const [modalForgot, abrirForgot, fecharForgot] = useModal();

  useEffect(() => {
    if (page === "signUp") {
      abrirSU();
    } else {
      fecharSU();
    }
    if (page === "esqueci-a-passe") {
      abrirForgot();
    } else {
      fecharForgot();
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
      <ModalSignUp open={modalSignUp} />
      <ModalEsqueciAPasse open={modalForgot} />
    </Container>
  );
}
