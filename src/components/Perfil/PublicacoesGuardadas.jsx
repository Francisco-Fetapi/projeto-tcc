import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Publicacao from "./Publicacao";
import { Text } from "~/styles";
import { useNavigate } from "react-router-dom";

export default function PublicacoesGuardadas() {
  const navigate = useNavigate();
  return (
    <Box>
      <Box
        mb={2}
        style={{ zoom: ".85" }}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text variant="h6">PUBLICAÇÕES GUARDADAS</Text>
        <Button
          color="default"
          variant="text"
          onClick={() => navigate("/publicacoes-guardadas")}
        >
          Ver mais
        </Button>
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
        <Button color="primary">Carregar mais</Button>
      </Box>
    </Box>
  );
}
