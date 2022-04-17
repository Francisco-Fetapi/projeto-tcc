import React, { createContext, useContext, useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from "@material-ui/core/styles";
import MoviesHeader from "~/components/MoviesHeader";
import { Movie, Text } from "~/styles";
import FormSearch from "../Forms/FormSearch";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import AtoresList from "./AtoresList";
import useTMDB from "~/hooks/useTMDB";
import { AtoresContext } from "~/pages/Atores";
import useModal from "~/hooks/useModal";
import ModalAtor from "~/components/Modals/ModalAtor";
import { useParams } from "react-router-dom";

export const PerfilAtorContext = createContext();

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
  const { perfil } = useContext(AtoresContext);
  const [modalPerfilAtor, abrirPA, fecharPA] = useModal();
  const [loading3, setLoading3] = useState(true);
  const [ator, setAtor] = useState({});
  const { id_ator } = useParams();

  useEffect(() => {
    if (search) {
      TMDB.getAtores({ setLoading, setAtores }, search, 1);
      return;
    }
  }, [search]);
  useEffect(() => {
    if (perfil) {
      abrirPA();
    } else {
      fecharPA();
    }
    setLoading3(perfil);
  }, [perfil]);

  useEffect(() => {
    if (perfil) {
      TMDB.getAtor({ setLoading: setLoading3, setAtor }, id_ator);
    }
  }, [perfil]);

  function carregarMais() {
    TMDB.getAtores(
      { setLoading: setLoading2, setAtores },
      search,
      atores.page + 1
    );
  }
  function procurar(values) {
    setSearch(values.search);
  }

  return (
    <PerfilAtorContext.Provider value={{ ator }}>
      <LoadingCircular
        aberto={loading3}
        mensagem="Carregando informações do ator"
      />
      <Movie.Content>
        <ModalAtor open={modalPerfilAtor && !loading3} />
        <MoviesHeader pagina="Atores">
          Encontre aqui informações das maiores celebridades dos filmes e
          seriados que tens visto. <br />
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
    </PerfilAtorContext.Provider>
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

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: "fixed",
    flexDirection: "column",
    background: "rgba(0,0,0,0.8)",
  },
}));

function LoadingCircular({ aberto, mensagem }) {
  const classes = useStyles();

  return (
    <Backdrop className={classes.backdrop} open={aberto}>
      <Box>
        <CircularProgress color="inherit" />
      </Box>
      {mensagem && (
        <Box mt={1} display="flex" justifyContent="center">
          <Text color="textSecondary" variant="subtitle2">
            {mensagem}
          </Text>
        </Box>
      )}
    </Backdrop>
  );
}
