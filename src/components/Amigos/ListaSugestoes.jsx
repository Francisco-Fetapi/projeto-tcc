import React, { useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Text } from "~/styles";
import Sugestao from "./Sugestao";

import Button from "@material-ui/core/Button";
import useUsuario from "~/hooks/useUsuario";
import { selectAppState } from "~/store/App.selectors";
import { primeiroNome } from "~/helpers";
import { useSelector } from "react-redux";

export default function ListaSugestoes() {
  const { getSugestoes } = useUsuario();
  const usuario = useSelector(selectAppState("usuario"));
  const [paginate, setPaginate] = useState({
    current_page: 1,
    last_page: 1,
    total: 0,
    data: [],
  });
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);

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
  return (
    <Paper elevation={2} className="lista-sugestoes">
      <Box
        className="desc"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        {usuario.id && (
          <Text align="center" variant="h6">
            {primeiroNome(usuario)}, deseja receber ainda mais atualizações?
          </Text>
        )}
        {!usuario.id && (
          <Text align="center" variant="h6">
            Desejas receber ainda mais atualizações?
          </Text>
        )}

        <Box mt={2}>
          <Text align="center" variant="subtitle2" color="textSecondary">
            Adicione essas pessoas que talvez você conheça a sua lista de amigos
            para ver mais atualizações
          </Text>
        </Box>
      </Box>
      <Box className="sugestoes">
        {usuarios.map((usuario, key) => (
          <Sugestao
            usuario={usuario}
            setUsuarios={setUsuarios}
            key={usuario.id}
          />
        ))}
      </Box>
      {loading && (
        <Box display="flex" my={2} justifyContent="center">
          <CircularProgress color="secondary" />
        </Box>
      )}
      {paginate.current_page < paginate.last_page && (
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
      {paginate.current_page === paginate.last_page && paginate.total !== 0 && (
        <Box mt={2}>
          <Text color="textSecondary" align="center" variant="subtitle2">
            Todos os usuarios já foram exibidos
          </Text>
        </Box>
      )}
    </Paper>
  );
}
