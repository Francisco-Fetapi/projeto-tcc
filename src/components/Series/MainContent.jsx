import React from "react";
// import Box from "@material-ui/core/Box";
import MoviesHeader from "~/components/MoviesHeader";
import SeriesList from "./SeriesList";
import movies from "~/mock/series.json";
import { Movie } from "~/styles";

export default function MainContent() {
  return (
    <Movie.Content>
      <MoviesHeader pagina="Series" />
      <SeriesList movies={movies} />
    </Movie.Content>
  );
}
