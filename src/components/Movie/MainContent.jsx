import React, { createContext, useEffect, useState } from "react";
// import { Text } from "~/styles";
import { Movie } from "~/styles/pages/Movie";

import Banner from "./Banner";
import Elenco from "./Elenco";
import Galeria from "./Galeria";
import Keywords from "./Keywords";
import ListaFilmes from "./ListaFilmes";

import movies from "~/mock/series.json";
// import Footer from "./Footer";
import ListaDiscussoes from "./ListaDiscussoes";

import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import useTMDB from "~/hooks/useTMDB";
import { useLocation, useParams } from "react-router-dom";

export const MovieContext = createContext();

export default function MainContent() {
  // const elenco = [1, 2, 3, 4, 5, 6];
  const [movie, setMovie] = useState({});
  const TMDB = useTMDB();
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [loading3, setLoading3] = useState(true);
  const [loading4, setLoading4] = useState(true);
  const [loading5, setLoading5] = useState(true);
  const [loading6, setLoading6] = useState(true);
  const [elenco, setElenco] = useState([]);
  const [recomendados, setRecomendados] = useState([]);
  const [similars, setSimilars] = useState([]);
  const [images, setImages] = useState({
    posters: [],
    backdrops: [],
  });
  const [keywords, setKeywords] = useState([]);
  const filmes = movies.concat({ img: "spider-man.jpg", nome: "Spider man 2" });
  const { id } = useParams();
  const { pathname } = useLocation();
  const eh_filme = pathname.includes("filmes");

  useEffect(() => {
    if (eh_filme) {
      TMDB.getMovie({ setLoading, setMovie }, id);
    } else {
      TMDB.getTv({ setLoading, setMovie }, id);
    }
  }, []);
  useEffect(() => {
    if (eh_filme) {
      TMDB.getCreditsMovie({ setLoading: setLoading2, setElenco }, id);
    } else {
      TMDB.getCreditsTv({ setLoading: setLoading2, setElenco }, id);
    }
  }, []);
  useEffect(() => {
    if (eh_filme) {
      TMDB.getKeywordsMovie({ setLoading: setLoading3, setKeywords }, id);
    } else {
      TMDB.getKeywordsTv({ setLoading: setLoading3, setKeywords }, id);
    }
  }, []);
  useEffect(() => {
    if (eh_filme) {
      TMDB.getImagesMovie({ setLoading: setLoading4, setImages }, id);
    } else {
      TMDB.getImagesTv({ setLoading: setLoading4, setImages }, id);
    }
  }, []);
  useEffect(() => {
    if (eh_filme) {
      TMDB.getMovieRecomendations(
        { setLoading: setLoading5, setRecomendados },
        id
      );
    } else {
      TMDB.getMovieRecomendations(
        { setLoading: setLoading5, setRecomendados },
        id
      );
    }
  }, []);
  useEffect(() => {
    if (eh_filme) {
      TMDB.getMovieSimilar({ setLoading: setLoading6, setSimilars }, id);
    } else {
      TMDB.getMovieSimilar({ setLoading: setLoading6, setSimilars }, id);
    }
  }, []);

  return (
    <Movie.Main>
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <MovieContext.Provider
          value={{
            movie,
            elenco,
            keywords,
            images,
            recomendados,
            similars,
            loadingElenco: loading2,
            loadingKeywords: loading3,
            loadingImages: loading4,
          }}
        >
          <Banner />
          <Elenco title="Elenco principal" elenco={elenco.cast} type="atores" />
          <Elenco
            title="Equipe Técnica"
            elenco={elenco.crew}
            type="equipe_tecnica"
          />
          <Keywords keywords={keywords} />
          <Galeria />
          <ListaFilmes
            title={(eh_filme ? "Filmes " : "Séries ") + "Similares"}
            movies={similars}
          />
          <ListaFilmes
            title={
              (eh_filme ? "Filmes " : "Séries ") +
              (eh_filme ? "recomendados" : "recomendadas")
            }
            movies={recomendados}
          />
          <Box className="discussoes_e_infos">
            <ListaDiscussoes />
          </Box>
          {/* <Footer /> */}
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
