import React, { useContext } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Publicacao from "./Publicacao";
import { Text, Link } from "~/styles";
import { useNavigate } from "react-router-dom";
import { PerfilContext } from "~/pages/Perfil";

export default function PublicacoesGuardadas() {
  const navigate = useNavigate();
  const { alheio } = useContext(PerfilContext);
  const children1 = (
    <>
      <Box
        mb={2}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text variant="h6">PUBLICAÇÕES GUARDADAS</Text>
      </Box>
      <Box>
        {[1, 2, 3].map((item) => (
          <Publicacao key={item}>
            Uma parte do post, só para identificar. Não precisa ser um texto
            longo, 200 caracteres....
          </Publicacao>
        ))}
      </Box>
      <Box mt={1} display="flex" justifyContent="center">
        <Button
          color="primary"
          onClick={() => navigate("/publicacoes-guardadas")}
        >
          Visualizar todas
        </Button>
      </Box>
    </>
  );
  const children2 = (
    <>
      <Text variant="h6">PUBLICAÇÕES GUARDADAS</Text>
      <Box
        mb={2}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="70vh"
        minHeight="390px"
      >
        <Text align="center" color="textSecondary" variant="subtitle2">
          Você só pode ver as publicaçoes guardadas deste usuário caso ele
          permita.
        </Text>
        <Box mt={2}>
          <Link to="/">Politicas de privacidade</Link>
        </Box>
      </Box>
    </>
  );
  return <Box>{!alheio ? children1 : children2}</Box>;
}
