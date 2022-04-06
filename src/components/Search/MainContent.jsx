import React, { useEffect, useState } from "react";
import { Movie } from "~/styles/pages/Movie";
import ListaFilmes from "../Movie/ListaFilmes";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import useTMDB from "~/hooks/useTMDB";
import { useSearchParams } from "react-router-dom";
import { MovieContext } from "../Movie/MainContent";

export default function MainContent() {
  const [filmes, setFilmes] = useState({});
  const [series, setSeries] = useState({});

  const TMDB = useTMDB();
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("termo_de_pesquisa");

  useEffect(() => {
    TMDB.getMovieBySearch2({ setLoading, setFilmes }, search, 1);
  }, [search]);
  useEffect(() => {
    TMDB.getTvBySearch2({ setLoading: setLoading2, setSeries }, search, 1);
  }, [search]);

  return (
    <Movie.Main>
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <MovieContext.Provider
          value={{
            loadingFilmes: loading,
            loadingSeries: loading2,
          }}
        >
          <ListaFilmes
            title="Filmes"
            movies={filmes.results}
            loading={loading}
          />
          <ListaFilmes
            title="Séries"
            movies={series.results}
            loading={loading2}
          />
        </MovieContext.Provider>
      )}
    </Movie.Main>
  );
}

function Loading() {
  return (
    <Box
      height="90vh"
      width="100vw"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <CircularProgress />
    </Box>
  );
}
