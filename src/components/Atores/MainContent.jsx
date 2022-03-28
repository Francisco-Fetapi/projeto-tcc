import React, { useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import MoviesHeader from "~/components/MoviesHeader";
import { Movie, Text } from "~/styles";
import FormSearch from "../Forms/FormSearch";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import AtoresList from "./AtoresList";
import useTMDB from "~/hooks/useTMDB";

export default function MainContent() {
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [atores, setAtores] = useState({
    page: 1,
    total_results: 1,
    total_pages: 0,
    results: [],
    notFound: false,
  });
  const [search, setSearch] = useState(null);
  const TMDB = useTMDB();

  useEffect(() => {
    if (search) {
      TMDB.getAtores({ setLoading, setAtores }, search, 1);
      return;
    }
  }, [search]);

  function carregarMais() {
    TMDB.getAtores(
      { setLoading: setLoading2, setAtores },
      search,
      atores.page + 1
    );
  }
  function procurar(values) {
    console.log(values);
    setSearch(values.search);
  }

  return (
    <Movie.Content>
      <MoviesHeader pagina="Atores">
        Encontre aqui informações das maiores celebridades dos filmes e seriados
        que tens visto. <br />
        Pesquise algum ator pelo nome e veja os resultados abaixo.
      </MoviesHeader>
      <Box my={2}>
        <FormSearch
          placeholder="Procure atores"
          id="search"
          procurar={procurar}
        />
      </Box>
      {loading && (
        <Box mt={8} mb={2} display="flex" justifyContent="center">
          <CircularProgress color="inherit" />
        </Box>
      )}
      {atores.total_pages === 0 && !loading && <MessageInit />}
      {!loading && <AtoresList atores={atores.results} />}
      {!loading2 && !loading && atores.total_pages > atores.page && (
        <Box display="flex" justifyContent="center" mt={5} mb={2.2}>
          <Button color="secondary" variant="text" onClick={carregarMais}>
            Carregar Mais
          </Button>
        </Box>
      )}
      {loading2 && (
        <Box mt={4} mb={2} display="flex" justifyContent="center">
          <CircularProgress color="inherit" />
        </Box>
      )}
    </Movie.Content>
  );
}

export function Loading() {
  return (
    <Box mt={7} display="flex" alignItems="center" justifyContent="center">
      <CircularProgress />
    </Box>
  );
}

function MessageInit() {
  return (
    <Box display="flex" justifyContent="center" mt={7}>
      <Text color="textSecondary" variant="subtitle2" align="center">
        Nada para exibir
        <br />A lista de atores correspondente a pesquisa aparecerá aqui.
      </Text>
    </Box>
  );
}
