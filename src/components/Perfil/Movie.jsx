import React from "react";
import Box from "@material-ui/core/Box";
import { Text } from "~/styles";

export default function Movie({ nome, img }) {
  return (
    <Box className="movie">
      <img src={`./img/${img}`} alt={nome} />
      <figcaption>
        <Text align="center">{nome}</Text>
      </figcaption>
    </Box>
  );
}
