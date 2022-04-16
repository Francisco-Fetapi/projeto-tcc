import React from "react";
import { Movie } from "~/styles";
import MovieCard from "./MovieCard";

export default function MoviesList({ movies }) {
  return (
    <div>
      <Movie.List>
        {movies.map((movie) => (
          <MovieCard key={movie.id_movie} movie={movie} />
        ))}
      </Movie.List>
    </div>
  );
}
