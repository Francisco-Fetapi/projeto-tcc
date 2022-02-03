import React, { useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Text } from "~/styles";

import Button from "@material-ui/core/Button";
import useUsuario from "~/hooks/useUsuario";

import FormSearch from "../Forms/FormSearch";
import Amigo from "./Amigo";
import { primeiroNome } from "~/helpers";
import { useSelector } from "react-redux";
import { selectAppState } from "~/store/App.selectors";

export default function ListaSugestoes() {
  const { getSugestoes } = useUsuario();
  const [paginate, setPaginate] = useState({
    current_page: 1,
    last_page: 1,
    total: 0,
    data: [],
  });
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const usuario = useSelector(selectAppState("usuario"));

  useEffect(() => {
    if (usuarios.length === 0 || paginate.data.length === 0) {
      getSugestoes({ setPaginate, setLoading });
    }
  }, []);
  useEffect(() => {
    if (paginate.total > usuarios.length) {
      setUsuarios([...usuarios, ...paginate.data]);
    }
  }, [paginate]);
  function carregarMais() {
    getSugestoes({ setPaginate, setLoading }, paginate.current_page + 1);
  }
  function procurar(values) {
    console.log(values);
  }
  return (
    <Box mt={10}>
      <Paper elevation={2} className="lista-sugestoes">
        <Box
          className="desc"
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          {usuario.id && (
            <Text align="center" variant="h6">
              {primeiroNome(usuario)}, procure e veja o perfil dos teus amigos.
            </Text>
          )}
          {!usuario.id && (
            <Text align="center" variant="h6">
              Procure e veja o perfil dos teus amigos.
            </Text>
          )}
          <Box mt={2}>
            <Text align="center" variant="subtitle2" color="textSecondary">
              Lista de todas as pessoas com as quais você mantém contato.
            </Text>
          </Box>
        </Box>
        <Box
          mb={4}
          px={2}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Box style={{ maxWidth: "480px", width: "90%" }}>
            <FormSearch
              placeholder="Procure amigos"
              id="search_tudo"
              procurar={procurar}
            />
            <Box width={0.85}>
              <Text color="textSecondary" variant="subtitle2">
                Pesquise amigos pelo seu nome para melhor filtrar os resultados.
              </Text>
            </Box>
          </Box>
        </Box>
        <Box className="sugestoes">
          {usuarios.map((usuario, key) => (
            <Amigo
              usuario={usuario}
              setUsuarios={setUsuarios}
              key={usuario.id}
            />
          ))}
        </Box>
        {loading && (
          <Box display="flex" my={2} justifyContent="center">
            <CircularProgress color="default" />
          </Box>
        )}
        {paginate.current_page < paginate.last_page && (
          <Box mt={2} display="flex" justifyContent="center">
            <Button
              startIcon={<CircularProgress size="small" />}
              color="default"
              variant="text"
              onClick={carregarMais}
            >
              Carregar mais
            </Button>
          </Box>
        )}
        {paginate.current_page === paginate.last_page && paginate.total !== 0 && (
          <Box mt={2}>
            <Text color="textSecondary" align="center" variant="subtitle2">
              Todos os usuarios já foram exibidos
            </Text>
          </Box>
        )}
      </Paper>
    </Box>
  );
}
