import React from "react";
import Box from "@material-ui/core/Box";
import MoviesHeader from "~/components/MoviesHeader";
// import movies from "~/mock/series.json";
import { Movie } from "~/styles";
import FormSearch from "../Forms/FormSearch";

export default function MainContent() {
  function procurar(values) {
    console.log(values);
  }
  return (
    <Movie.Content>
      <MoviesHeader pagina="Atores">
        Encontre aqui informações das maiores celebridades dos filmes e seriados
        que tens visto. Clique num ator para ver mais informações sobre ele.
      </MoviesHeader>
      <Box my={2}>
        <FormSearch
          placeholder="Procure atores"
          id="search"
          procurar={procurar}
        />
      </Box>
      {/* <MoviesList movies={movies} /> */}
    </Movie.Content>
  );
}
