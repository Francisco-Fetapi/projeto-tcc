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

export default function MainContent() {
  const TMDB = useTMDB();
  const movies = useSelector(selectAppState("trending_series"));
  const [loading, setLoading] = useState(movies.results.length > 0);
  const [search, setSearch] = useState("");
  useEffect(() => {
    TMDB.getSeries({ setLoading }, 0);
  }, []);
  useEffect(() => {
    if (search) {
      TMDB.getTvBySearch({ setLoading }, search, 1);
    } else {
      TMDB.getSeries({ setLoading }, 1);
    }
    console.log(search);
  }, [search]);

  function carregarMais() {
    if (search) {
      TMDB.getTvBySearch({ setLoading }, search, movies.page + 1);
    } else {
      TMDB.getSeries({ setLoading }, movies.page + 1);
    }
  }
  function procurar(values) {
    setSearch(values.search);
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
      {loading && (
        <Box display="flex" my={8} justifyContent="center">
          <CircularProgress color="inherit" />
        </Box>
      )}
      {movies.results.length > 0 && <MoviesList movies={movies.results} />}
      {movies.page < movies.total_pages && !loading && (
        <Box my={2} display="flex" justifyContent="center">
          <Button
            startIcon={<CircularProgress size="small" />}
            color="primary"
            variant="text"
            onClick={carregarMais}
          >
            Carregar mais
          </Button>
        </Box>
      )}
    </Movie.Content>
  );
}
