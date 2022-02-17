import React from "react";
import Box from "@material-ui/core/Box";
import MoviesHeader from "~/components/MoviesHeader";
import MoviesList from "~/components/MoviesList";
import movies from "~/mock/series.json";
import { Movie } from "~/styles";
import FormSearch from "../Forms/FormSearch";

export default function MainContent({ favoritos }) {
  function procurar(values) {
    console.log(values);
  }
  if (favoritos) {
    return (
      <Movie.Content>
        <MoviesHeader pagina="Movies Favoritos">
          Veja os filmes e séries que você marcou como favoritos.
        </MoviesHeader>
        <Box my={2}>
          <FormSearch
            placeholder="Procure favoritos"
            id="search"
            procurar={procurar}
          />
        </Box>
        <MoviesList movies={movies} />
      </Movie.Content>
    );
  }
  return (
    <Movie.Content>
      <MoviesHeader pagina="Filmes">
        Veja as informações dos filmes que mais gostas e interaja com outros
        usuários acerca deles. Além de ver, você também pode guardar e marcar um
        filme como favorito.
      </MoviesHeader>
      <Box my={2}>
        <FormSearch
          placeholder="Procure filmes"
          id="search"
          procurar={procurar}
        />
      </Box>
      <MoviesList movies={movies} />
    </Movie.Content>
  );
}
