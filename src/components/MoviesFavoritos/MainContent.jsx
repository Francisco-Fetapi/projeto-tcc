import React, { useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import MoviesHeader from "~/components/MoviesHeader";
import MoviesList from "~/components/MoviesList";
import { Movie } from "~/styles";

import CircularProgress from "@material-ui/core/CircularProgress";
import useMovie from "~/hooks/useMovie";

export default function MainContent() {
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(false);
  const { getMoviesFavoritos } = useMovie();
  const [movies, setMovies] = useState({
    current_page: 1,
    last_page: 1,
    total: 0,
    data: [],
  });

  function getFavoritos() {
    getMoviesFavoritos({ setLoading, setMovies }, null, true, 1);
  }
  useEffect(getFavoritos, [window.location.href]);

  function carregarMais() {
    getMoviesFavoritos(
      { setLoading: setLoading2, setMovies },
      null,
      true,
      movies.current_page + 1
    );
  }
  console.log(movies);

  const Corpo = () => {
    return (
      <>
        {(loading || movies.data.length === 0) && (
          <Box display="flex" my={5} justifyContent="center">
            <CircularProgress color="inherit" />
          </Box>
        )}
        {movies.data.length > 0 && !loading && (
          <MoviesList
            movies={movies.data.map((movie) => ({ ...movie, favoritei: true }))}
          />
        )}
        {movies.current_page < movies.last_page && !loading2 && !loading && (
          <Box my={2} display="flex" justifyContent="center">
            <Button color="primary" variant="text" onClick={carregarMais}>
              Carregar mais
            </Button>
          </Box>
        )}
        {loading2 && (
          <Box display="flex" my={2} justifyContent="center">
            <CircularProgress color="inherit" />
          </Box>
        )}
      </>
    );
  };
  return (
    <Movie.Content>
      <MoviesHeader pagina="Movies Favoritos">
        Veja os filmes e séries que você marcou como favoritos.
      </MoviesHeader>
      <Corpo />
    </Movie.Content>
  );
}
