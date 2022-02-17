import React, { useState } from "react";
import { Movie } from "~/styles";
import MovieCard from "./MovieCard";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";

export default function SeriesList({ movies }) {
  const [loading, setLoading] = useState(true);
  return (
    <div>
      <Movie.List>
        {movies.concat(movies).map((movie, key) => (
          <MovieCard key={key} movie={{ ...movie, id: key }} />
        ))}
      </Movie.List>
      {loading && (
        <Box my={2} display="flex" justifyContent="center">
          <CircularProgress color="default" />
        </Box>
      )}
    </div>
  );
}
