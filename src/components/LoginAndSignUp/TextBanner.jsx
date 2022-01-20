import React from "react";
import { Text } from "~/styles";
import { BannerContainer, QuadradoBanner } from "~/styles/pages/LoginAndSignUp";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";

import useTheme from "@material-ui/core/styles/useTheme";

export default function TextBanner() {
  const navigate = useNavigate();
  const theme = useTheme();

  function irParaSignUp() {
    navigate("/criar-conta");
  }
  return (
    <BannerContainer colorPrimary={theme.palette.primary.main}>
      <QuadradoBanner>Rede Social</QuadradoBanner>
      <Text className="titulo1" variant="subtitle2">
        Junte-se a nós
      </Text>
      <Text className="titulo2" variant="h6">
        Nessa mega comunidade{" "}
      </Text>
      <Text className="paragrafo">
        repleta de pessoas com os mesmos interesses que você.
      </Text>
      <div style={{ flexGrow: 1 }} />
      <Box>
        <Text variant="subtitle2" className="nao_tem_conta">
          Não tens uma conta?
        </Text>
        <Button color="primary" onClick={irParaSignUp}>
          Criar conta
        </Button>
      </Box>
    </BannerContainer>
  );
}
