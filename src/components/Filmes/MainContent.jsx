import React, { useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import MoviesHeader from "~/components/MoviesHeader";
import MoviesList from "~/components/MoviesList";
// import movies from "~/mock/series.json";
import { Movie } from "~/styles";
import FormSearch from "../Forms/FormSearch";
import useTMDB from "~/hooks/useTMDB";
import { useSelector } from "react-redux";
import { selectAppState } from "~/store/App.selectors";

import CircularProgress from "@material-ui/core/CircularProgress";
import useMovie from "~/hooks/useMovie";

export default function MainContent() {
  const TMDB = useTMDB();
  const movies = useSelector(selectAppState("trending_filmes"));
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(false);
  const [search, setSearch] = useState(null);
  const { atualizarInfo } = useMovie();

  useEffect(() => {
    TMDB.getFilmes({ setLoading }, 0);
  }, []);
  useEffect(() => {
    if (movies.results.length > 0) {
      atualizarInfo(movies, "trending_filmes");
    }
  }, [window.location.href, movies.data]);

  useEffect(() => {
    if (search === "") {
      TMDB.getFilmes({ setLoading }, 1);
      return;
    }
    TMDB.getMovieBySearch({ setLoading }, search, 1);
  }, [search]);

  function carregarMais() {
    if (search) {
      TMDB.getMovieBySearch(
        { setLoading: setLoading2 },
        search,
        movies.page + 1
      );
    } else {
      TMDB.getFilmes({ setLoading: setLoading2 }, movies.page + 1);
    }
  }
  function procurar(values) {
    setSearch(values.search);
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
      <Corpo />
    </Movie.Content>
  );
}
