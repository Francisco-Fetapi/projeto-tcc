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
  function procurar(values) {
    console.log(values);
  }
  const TMDB = useTMDB();
  const movies = useSelector(selectAppState("trending_series"));
  const [paginate, setPaginate] = useState({
    page: 1,
    total_results: 1,
    total_pages: 0,
    results: [],
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    TMDB.getSeries({ setLoading, setPaginate });
  }, []);

  function carregarMais() {
    TMDB.getSeries({ setLoading, setPaginate }, paginate.page + 1);
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
      {movies.length > 0 && <MoviesList movies={movies} />}
      {loading && (
        <Box display="flex" my={2} justifyContent="center">
          <CircularProgress color="inherit" />
        </Box>
      )}
      {paginate.current_page < paginate.last_page && !loading && (
        <Box mt={2} display="flex" justifyContent="center">
          <Button
            startIcon={<CircularProgress size="small" />}
            color="secondary"
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
