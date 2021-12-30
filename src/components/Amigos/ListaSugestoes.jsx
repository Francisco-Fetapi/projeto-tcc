import React from "react";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import { Text } from "../../styles";
import Sugestao from "./Sugestao";

import Button from "@material-ui/core/Button";
import Add from "@material-ui/icons/AddCircle";

export default function ListaSugestoes() {
  return (
    <Paper elevation={2} className="lista-sugestoes">
      <Box
        className="desc"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Text align="center" variant="h6">
          $Usuario, deseja receber ainda mais atualizações?
        </Text>
        <Box mt={2}>
          <Text align="center" variant="subtitle2" color="textSecondary">
            Adicione essas pessoas que talvez você conheça a sua lista de amigos
            para ver mais atualizações
          </Text>
        </Box>
      </Box>
      <Box className="sugestoes">
        <Sugestao img="user3.jpg" />
        <Sugestao img="user1.jpg" />
        <Sugestao img="user5.jpg" />
        <Sugestao img="user4.jpg" />
      </Box>
      <Box mt={2} display="flex" justifyContent="center">
        <Button color="secondary" variant="outlined" startIcon={<Add />}>
          Carregar mais
        </Button>
      </Box>
    </Paper>
  );
}
