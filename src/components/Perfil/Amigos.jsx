import React from "react";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { Text } from "../../styles";

export default function Amigos() {
  return (
    <Paper className="amigos">
      <Text variant="h6">Amigos</Text>
      <Text variant="subtitle2" color="textSecondary">
        32 amigos
      </Text>
      <Box mt={2} className="fotos-grid">
        <Box component="figure">
          <img src="./img/user1.svg" alt="user" />
          <Box component="figcaption">
            <Text align="center" variant="body2" color="textSecondary">
              Nome do usuario
            </Text>
          </Box>
        </Box>
        <Box component="figure">
          <img src="./img/user5.svg" alt="user" />
          <Box component="figcaption">
            <Text align="center" variant="body2" color="textSecondary">
              Nome do usuario
            </Text>
          </Box>
        </Box>
        <Box component="figure">
          <img src="./img/user3.svg" alt="user" />
          <Box component="figcaption">
            <Text align="center" variant="body2" color="textSecondary">
              Nome do usuario
            </Text>
          </Box>
        </Box>
        <Box component="figure">
          <img src="./img/user6.svg" alt="user" />
          <Box component="figcaption">
            <Text align="center" variant="body2" color="textSecondary">
              Nome do usuario 1
            </Text>
          </Box>
        </Box>
        <Box component="figure">
          <img src="./img/user4.svg" alt="user" />
          <Box component="figcaption">
            <Text align="center" variant="body2" color="textSecondary">
              Nome do usuario
            </Text>
          </Box>
        </Box>
        <Box component="figure">
          <img src="./img/user2.svg" alt="user" />
          <Box component="figcaption">
            <Text align="center" variant="body2" color="textSecondary">
              Nome do usuario
            </Text>
          </Box>
        </Box>
      </Box>
      <Box mt={1.6} display="flex" justifyContent="center" className="botao">
        <Button color="primary">Ver mais amigos</Button>
      </Box>
    </Paper>
  );
}
