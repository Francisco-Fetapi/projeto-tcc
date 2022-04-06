import React, { createContext, useEffect, useState } from "react";
import { Movie } from "~/styles/pages/Movie";

import Banner from "./Banner";
import Elenco from "./Elenco";

import ListaFilmes from "./ListaFilmes";

import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import useTMDB from "~/hooks/useTMDB";
import { useSearchParams } from "react-router-dom";

export const MovieContext = createContext();

export default function MainContent() {
  const [filmes, setFilmes] = useState({});
  const [elenco, setElenco] = useState({
    cast: [],
    crew: [],
  });
  const [series, setSeries] = useState({});

  const TMDB = useTMDB();
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [loading3, setLoading3] = useState(true);
  const { termo_de_pesquisa: search } = useSearchParams();

  useEffect(() => {
    TMDB.getMovieBySearch2({ setLoading, setFilmes }, search, 1);
  }, [search]);
  useEffect(() => {
    TMDB.getTvBySearch2({ setLoading: setLoading2, setSeries }, search, 1);
  }, [search]);
  useEffect(() => {
    TMDB.getAtores(
      { setLoading: setLoading3, setAtores: setElenco },
      search,
      1
    );
  }, [search]);

  console.log(search);

  return (
    <Movie.Main>
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <MovieContext.Provider
          value={{
            loadingFilmes: loading,
            loadingSeries: loading2,
            loadingElenco: loading3,
          }}
        >
          <Banner />
          {!loading3 && elenco.cast.length !== 0 && (
            <Elenco
              title="Elenco principal"
              elenco={elenco.cast}
              type="atores"
            />
          )}
          {!loading3 && elenco.crew.length !== 0 && (
            <Elenco
              title="Equipe Técnica"
              elenco={elenco.crew}
              type="equipe_tecnica"
            />
          )}
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
