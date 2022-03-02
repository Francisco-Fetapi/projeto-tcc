import React from "react";
import { Text } from "~/styles";
import { Movie } from "~/styles/pages/Movie";
import Box from "@material-ui/core/Box";
// import Posts from "../Posts";

export default function ListaDiscussoes() {
  return (
    <Movie.Discussoes>
      <Box>
        <Box>
          <Text variant="h4">Discussões</Text>
        </Box>
      </Box>
      <Box></Box>
    </Movie.Discussoes>
  );
}
