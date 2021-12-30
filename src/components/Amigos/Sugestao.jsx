import React from "react";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import Add from "@material-ui/icons/AddCircle";
import { Text } from "../../styles";

export default function Sugestao({ img }) {
  return (
    <Paper variant="outlined" className="sugestao">
      <Box component="figure">
        <img src={`./img/${img}`} alt="Imagem usuario" />
      </Box>
      <Box
        className="info"
        display="flex"
        flexDirection="column"
        alignItems="center"
        mt={4.5}
      >
        <Text align="center">Nome Usuario</Text>
        <Box flexGrow={1} />
        <Text color="textSecondary" variant="subtitle2">
          De Angola, Benguela, Lobito
        </Text>
        <Text color="textSecondary" variant="subtitle2">
          19 anos
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
