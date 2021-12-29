import React from "react";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import { Text } from "../../styles";

export default function Fotos() {
  return (
    <Paper className="fotos">
      <Text variant="h6">Fotos</Text>
      <Text variant="subtitle2" color="textSecondary">
        9 fotos
      </Text>
      <Box mt={2} className="fotos-grid">
        <Box>
          <img src="./img/user1.jpg" alt="user" />
        </Box>
        <Box>
          <img src="./img/user4.jpg" alt="user" />
        </Box>
        <Box>
          <img src="./img/user3.jpg" alt="user" />
        </Box>
        <Box>
          <img src="./img/user1.jpg" alt="user" />
        </Box>
        <Box>
          <img src="./img/user4.jpg" alt="user" />
        </Box>
        <Box>
          <img src="./img/user5.jpg" alt="user" />
        </Box>
      </Box>
    </Paper>
  );
}
