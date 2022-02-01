import React from "react";
import { NotFound } from "~/styles/pages/NotFound";
import Box from "@material-ui/core/Box";
import { Text } from "~/styles";

export default function NotFoun() {
  return (
    <NotFound.Container>
      <Box>
        <Text variant="h2" style={{ fontWeight: "bolder" }}>
          Ooops...
        </Text>
        <Box mt={2}>
          <Text variant="h4">Página não encontrada</Text>
        </Box>
        <Box mt={2}>
          <Text variant="subtitle1" color="textSecondary">
            A página solicitada não foi encontrada. Por favor tente mais tarde.
            <br />
            <b>NOTA:</b> O sistema ainda está no processo de desenvolvimento,
            então alguns links poderão apontar para páginas que ainda não foram
            criadas.
          </Text>
        </Box>
      </Box>
      <Box>
        <Text variant="h1" align="center" color="primary">
          404
        </Text>
      </Box>
    </NotFound.Container>
  );
}
