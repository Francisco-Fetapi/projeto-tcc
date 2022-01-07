import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { Text } from "../../styles";

import Pagination from "@material-ui/lab/Pagination";
import { useNavigate } from "react-router-dom";

export default function Amigos() {
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const navigate = useNavigate();
  // const amigos = [1, 5, 3, 6, 4, 2];
  const amigos = [];
  return (
    <Paper className="amigos">
      <Text variant="h6">Amigos</Text>
      <Text variant="subtitle2" color="textSecondary">
        {amigos.length === 0 && "Sem amigos"}
        {amigos.length === 1 && "Você tem 1 amigo"}
        {amigos.length > 1 && `Você tem ${amigos.length} amigos`}
      </Text>
      <Box mt={2} className="fotos-grid">
        {amigos.map((amigo, key) => (
          <Box component="figure" key={key}>
            <img src={`./img/user${amigo}.svg`} alt="user" />
            <Box component="figcaption">
              <Text align="center" variant="body2" color="textSecondary">
                Nome do usuario
              </Text>
            </Box>
          </Box>
        ))}
      </Box>
      {amigos.length > 6 && (
        <Box mt={2.3} display="flex" justifyContent="center">
          <Pagination
            count={5}
            page={page}
            onChange={handleChange}
            variant="outlined"
            shape="rounded"
          />
        </Box>
      )}
      {amigos.length === 0 && (
        <Box
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          mt={-7}
          className="msg-sem-amigos"
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <img
              src="./img/info_amigos_add.png"
              alt="Logo a dizer pra se conectar com amigos"
            />
            <Text variant="subtitle2" color="textSecondary" align="center">
              Conecte-se com as pessoas nessa jornada incrivel. Quanto mais
              amigos tiver mais atualizado você fica sobre as suas atividades.
            </Text>
          </Box>
          <Box mt={1}>
            <Button
              variant="text"
              color="secondary"
              onClick={() => navigate("/amigos")}
            >
              Adicionar amigos
            </Button>
          </Box>
        </Box>
      )}
      {amigos.length < 6 && <Box mt={2.3} />}
    </Paper>
  );
}
