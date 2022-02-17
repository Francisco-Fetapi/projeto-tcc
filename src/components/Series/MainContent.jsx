import React from "react";
import Box from "@material-ui/core/Box";
import MoviesHeader from "~/components/MoviesHeader";
import MoviesList from "~/components/MoviesList";
import movies from "~/mock/series.json";
import { Movie } from "~/styles";
import FormSearch from "../Forms/FormSearch";

export default function MainContent() {
  function procurar(values) {
    console.log(values);
  }
  return (
    <Movie.Content>
      <MoviesHeader pagina="Series">
        Veja as informações das séries que mais gostas e interaja com outros
        usuários acerca delas. Além de ver, você também pode guardar e marcar
        uma série como favorita.
      </MoviesHeader>
      <Box my={2}>
        <FormSearch
          placeholder="Procure séries"
          id="search"
          procurar={procurar}
        />
      </Box>
      <MoviesList movies={movies} />
    </Movie.Content>
  );
}
