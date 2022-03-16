import React from "react";
import { Text } from "~/styles";
import { Movie } from "~/styles/pages/Movie";
import Box from "@material-ui/core/Box";
import { mostrarXCharOntText } from "~/helpers";
// import Button from "@material-ui/core/Button";
// import { useNavigate } from "react-router-dom";

export default function ListaFilmes({ title, movies, loading }) {
  if (loading) {
    return <div />;
  }
  return (
    <Movie.Lista>
      <Box>
        <Text
          variant="h6"
          style={{ fontWeight: "bolder", textTransform: "uppercase" }}
        >
          {title}
        </Text>
      </Box>

      <Box mt={3} className="filmes">
        {movies.map((movie, key) => (
          <Filme
            img={movie.poster_path}
            nome={movie.name || movie.title}
            key={key}
          />
        ))}
      </Box>
    </Movie.Lista>
  );
}

function Filme({ img, nome }) {
  return (
    <Box className="filme">
      <img src={img} alt={nome} />
      <Box component="figcaption">{mostrarXCharOntText(nome, 15)}</Box>
    </Box>
  );
}
