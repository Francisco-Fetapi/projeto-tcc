import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import { Text } from "../../styles";

import Done from "@material-ui/icons/Done";
import Clear from "@material-ui/icons/Clear";

export default function Pedido({ img }) {
  return (
    <Box className="pedido">
      <Paper variant="outlined" className="dados">
        <Text variant="h6">Nome Usuario</Text>
        <Box mt={2}>
          <Text variant="subtitle2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
            magnam ex impedit iure doloribus pariatur provident, exercitationem
          </Text>
        </Box>
        <Box component="figure">
          <img src={`./img/${img}`} alt="foto do usuario" />
        </Box>
      </Paper>
      <Box mt={5} display="flex" justifyContent="center">
        <ButtonGroup color="primary" className="btn-acoes">
          <Button className="aceitar" startIcon={<Done />}>
            Aceitar
          </Button>
          <Button className="rejeitar" startIcon={<Clear />}>
            Recusar
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
}
