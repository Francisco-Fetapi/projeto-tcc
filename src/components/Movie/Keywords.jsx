import React, { useContext } from "react";
import { Text } from "~/styles";
import { Movie } from "~/styles/pages/Movie";
import Box from "@material-ui/core/Box";
import Chip from "@material-ui/core/Chip";
import { MovieContext } from "./MainContent";
// import Button from "@material-ui/core/Button";
// import { useNavigate } from "react-router-dom";

export default function Keywords({ keywords }) {
  const { movie } = useContext(MovieContext);
  const on_internet = navigator.onLine;
  return (
    <Movie.Keywords
      imagem={on_internet ? movie.backdrop_path : "/img/" + movie.backdrop_path}
    >
      <Box>
        <Box mb={2}>
          <Text
            variant="h4"
            style={{ fontWeight: "bolder", textShadow: "1px 1px 1px #111" }}
          >
            Palavras-chave
          </Text>
        </Box>
        <Box maxWidth={500}>
          {keywords.map((item) => (
            <Chip label={item} clickable key={item} />
          ))}
        </Box>
      </Box>
    </Movie.Keywords>
  );
}
