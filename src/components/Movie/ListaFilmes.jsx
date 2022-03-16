import React from "react";
import { Text, Link } from "~/styles";
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
        {movies.map((movie) => (
          <Filme movie={movie} key={movie.id} />
        ))}
      </Box>
    </Movie.Lista>
  );
}

function Filme({ movie }) {
  const name = movie.name || movie.title;
  const eh_filme = movie.title !== undefined;
  return (
    <Box className="filme">
      <Link to={eh_filme ? `/filmes/${movie.id}` : `/series/${movie.id}`}>
        <img src={movie.poster_path} alt={name} />
        <Box component="figcaption">{mostrarXCharOntText(name, 15)}</Box>
      </Link>
    </Box>
  );
}
