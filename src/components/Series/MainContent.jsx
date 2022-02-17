import React from "react";
import Box from "@material-ui/core/Box";
import MoviesHeader from "~/components/MoviesHeader";
import SeriesList from "./SeriesList";
import movies from "~/mock/series.json";
import { Movie } from "~/styles";
import FormSearch from "../Forms/FormSearch";

export default function MainContent() {
  function procurar(values) {
    console.log(values);
  }
  return (
    <Movie.Content>
      <MoviesHeader pagina="Series" />
      <Box my={2}>
        <FormSearch
          placeholder="Procure filmes"
          id="search"
          procurar={procurar}
        />
      </Box>
      <SeriesList movies={movies} />
    </Movie.Content>
  );
}
