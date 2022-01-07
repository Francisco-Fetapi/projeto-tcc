import React, { useEffect } from "react";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Text } from "../../styles";
import Sugestao from "./Sugestao";

import Button from "@material-ui/core/Button";
import useUsuario from "../../hooks/useUsuario";
import { useState } from "react";

export default function ListaSugestoes() {
  const { getOutrosUsuarios } = useUsuario();
  const [paginate, setPaginate] = useState({
    current_page: 1,
    last_page: 1,
    total: 0,
    data: [],
  });
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    getOutrosUsuarios(setPaginate);
  }, []);
  useEffect(() => {
    console.log(paginate);
    if (paginate.total > usuarios.length) {
      setUsuarios([...usuarios, ...paginate.data]);
    }
  }, [paginate]);
  function carregarMais() {
    getOutrosUsuarios(setPaginate, paginate.current_page + 1);
  }
  return (
    <Paper elevation={2} className="lista-sugestoes">
      <Box
        className="desc"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Text align="center" variant="h6">
          $Usuario, deseja receber ainda mais atualizações?
        </Text>
        <Box mt={2}>
          <Text align="center" variant="subtitle2" color="textSecondary">
            Adicione essas pessoas que talvez você conheça a sua lista de amigos
            para ver mais atualizações
          </Text>
        </Box>
      </Box>
      <Box className="sugestoes">
        {usuarios.map((usuario) => (
          <Sugestao usuario={usuario} key={usuario.id} />
        ))}
      </Box>
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
