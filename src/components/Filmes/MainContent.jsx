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

export default function MainContent({ favoritos }) {
  function procurar(values) {
    console.log(values);
  }
  const TMDB = useTMDB();
  const movies = useSelector(selectAppState("trending_filmes"));
  // const [movies, setmovies] = useState({
  //   page: 1,
  //   total_results: 1,
  //   total_pages: 0,
  //   results: [],
  // });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    TMDB.getFilmes({ setLoading }, 0);
  }, []);

  function carregarMais() {
    TMDB.getFilmes({ setLoading }, movies.page + 1);
  }
  const Corpo = () => {
    return (
      <>
        {movies.results.length > 0 && <MoviesList movies={movies.results} />}
        {loading && (
          <Box display="flex" my={8} justifyContent="center">
            <CircularProgress color="inherit" />
          </Box>
        )}
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
      </>
    );
  };
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
        <Corpo />
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
      <Corpo />
    </Movie.Content>
  );
}
