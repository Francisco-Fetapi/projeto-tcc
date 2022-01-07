import React from "react";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import Add from "@material-ui/icons/AddCircle";
import { Text } from "../../styles";
import { BASE_URL } from "../../API";

export default function Sugestao({ usuario }) {
  return (
    <Paper variant="outlined" className="sugestao">
      <Box component="figure">
        <img src={`${BASE_URL}/${usuario.foto_perfil}`} alt="Imagem usuario" />
      </Box>
      <Box
        className="info"
        display="flex"
        flexDirection="column"
        alignItems="center"
        mt={4.5}
      >
        <Text align="center">{usuario.nome}</Text>
        <Box flexGrow={1} />
        <Text color="textSecondary" variant="subtitle2">
          {`de ${usuario.pais},${usuario.estado},${usuario.cidade}`}
        </Text>
        <Text
          color="textSecondary"
          variant="subtitle2"
          style={{ fontSize: 12 }}
        >
          {usuario.email}
        </Text>
        <Box mt={2} display="flex" justifyContent="center">
          <Button variant="contained" color="primary" startIcon={<Add />}>
            Adicionar
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
