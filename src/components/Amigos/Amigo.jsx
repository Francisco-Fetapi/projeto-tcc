import React from "react";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import { Text } from "~/styles";

import { mostrarXCharOntText, primeiroEUltimoNome } from "~/helpers";
import { useNavigate } from "react-router-dom";
import RemoveRedEye from "@material-ui/icons/RemoveRedEye";

export default function Amigo({ usuario }) {
  const navigate = useNavigate();

  return (
    <Paper variant="outlined" className="sugestao">
      <Box component="figure">
        <img src={usuario.foto_perfil} alt="Imagem usuario" />
      </Box>
      <Box
        className="info"
        display="flex"
        flexDirection="column"
        alignItems="center"
        mt={4.5}
      >
        <abbr title={usuario.nome}>
          <Text align="center">{primeiroEUltimoNome(usuario)}</Text>
        </abbr>
        <Box flexGrow={1} />
        <Text color="textSecondary" variant="subtitle2">
          {mostrarXCharOntText(
            `de ${usuario.pais},${usuario.estado},${usuario.cidade}`,
            24
          )}
        </Text>
        <Text
          color="textSecondary"
          variant="subtitle2"
          style={{ fontSize: 12 }}
        >
          {usuario.email}
        </Text>
        <Box mt={2} display="flex" justifyContent="center">
          <Button
            onClick={() => navigate("/usuario/" + usuario.id)}
            variant="outlined"
            color="default"
            startIcon={<RemoveRedEye />}
          >
            Ver perfil
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
