import React, { useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import MoviesHeader from "~/components/MoviesHeader";
import MoviesList from "~/components/MoviesList";
// import movies from "~/mock/series.json";
import { Movie } from "~/styles";
// import useTMDB from "~/hooks/useTMDB";
// import { useSelector } from "react-redux";
// import { selectAppState } from "~/store/App.selectors";

import CircularProgress from "@material-ui/core/CircularProgress";
// import useMovie from "~/hooks/useMovie";

export default function MainContent() {
  // const TMDB = useTMDB();
  // const movies = useSelector(selectAppState("trending_filmes"));
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(false);
  const [movies, setMovies] = useState({
    page: 1,
    total_results: 1,
    total_pages: 0,
    results: [],
  });
  // const { atualizarInfo } = useMovie();

  // useEffect(() => {
  //   TMDB.getFilmes({ setLoading }, 0);
  // }, []);
  // useEffect(() => {
  //   if (movies.results.length > 0) {
  //     atualizarInfo(movies, "trending_filmes");
  //   }
  // }, [window.location.href]);

  function carregarMais() {
    // TMDB.getFilmes({ setLoading: setLoading2 }, movies.page + 1);
  }

  const Corpo = () => {
    return (
      <>
        {(loading || movies.results.length === 0) && (
          <Box display="flex" my={5} justifyContent="center">
            <CircularProgress color="inherit" />
          </Box>
        )}
        {movies.results.length > 0 && !loading && (
          <MoviesList movies={movies.results} />
        )}
        {movies.page < movies.total_pages && !loading2 && !loading && (
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
      {/* <Box my={2}>
          <FormSearch
            placeholder="Procure favoritos"
            id="search"
            procurar={procurar}
          />
        </Box> */}
      <Corpo />
    </Movie.Content>
  );
}
