import React from "react";
import { Movie } from "~/styles";
import MovieCard from "./MovieCard";

export default function SeriesList({ movies }) {
  return (
    <Movie.List>
      {movies.map((movie) => (
        <MovieCard key={movie.nome} movie={movie} />
      ))}
    </Movie.List>
  );
}
