import React from "react";
import Box from "@material-ui/core/Box";
import { Text, Link } from "~/styles";
import { mostrarXCharOntText } from "~/helpers";

export default function Movie({ movie }) {
  const link = {
    movie: "filmes",
    tv: "series",
  };
  return (
    <Box className="movie">
      <img src={movie.poster_path} alt={movie.name} />
      <Link nostyle to={`/${link[movie.media_type]}/${movie.id}`}>
        <abbr title={movie.name}>
          <figcaption style={{}}>
            <Text align="center" variant="subtitle2">
              {mostrarXCharOntText(movie.name, 15)}
            </Text>
          </figcaption>
        </abbr>
      </Link>
    </Box>
  );
}
