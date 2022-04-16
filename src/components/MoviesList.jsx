import React from "react";
import { Movie } from "~/styles";
import MovieCard from "./MovieCard";

export default function MoviesList({ movies }) {
  return (
    <div>
      <Movie.List>
        {movies.map((movie, key) => (
          <MovieCard key={key} movie={{ ...movie }} />
        ))}
      </Movie.List>
    </div>
  );
}
