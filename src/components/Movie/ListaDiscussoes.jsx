import React from "react";
import { Text } from "~/styles";
import { Movie } from "~/styles/pages/Movie";
import Box from "@material-ui/core/Box";
import Posts from "../Posts";
import { useParams } from "react-router-dom";

export default function ListaDiscussoes() {
  const { id } = useParams();
  return (
    <Movie.Discussoes>
      <Box>
        <Box>
          <Text variant="h4">Discussões</Text>
        </Box>
      </Box>
      <Box maxWidth="600px">
        <Posts target="movie" id_movie={id} />
      </Box>
    </Movie.Discussoes>
  );
}
