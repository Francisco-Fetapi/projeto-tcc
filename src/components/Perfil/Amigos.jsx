import React, { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { Text } from "~/styles";

import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import EyeIcon from "@material-ui/icons/RemoveRedEye";

import Pagination from "@material-ui/lab/Pagination";
import { useNavigate } from "react-router-dom";
import useUsuario from "~/hooks/useUsuario";
import CircularProgress from "@material-ui/core/CircularProgress";
import Amigo from "./Amigo";

import { useParams } from "react-router-dom";

export default function Amigos() {
  const [paginate, setPaginate] = useState({
    current_page: 1,
    last_page: 1,
    total: 0,
    data: [],
  });
  const [amigos, setAmigos] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { getAmigos } = useUsuario();
  const { id } = useParams();
  const handleChange = (event, value) => {
    setPaginate({ ...paginate, current_page: value });
  };
  useEffect(() => {
    getAmigos({ setPaginate, setLoading, id }, paginate.current_page);
  }, [paginate.current_page]);

  useEffect(() => {
    setAmigos(paginate.data);
  }, [paginate.data]);

  return (
    <Paper className="amigos">
      {loading && (
        <Box className="progress">
          <CircularProgress />
        </Box>
      )}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Text variant="h6">Amigos</Text>
          <Text variant="subtitle2" color="textSecondary">
            {paginate.total === 0 && loading && "Carregando...."}
            {paginate.total === 0 && !loading && "Sem amigos"}
            {paginate.total === 1 && " 1 amigo"}
            {paginate.total > 1 && `${paginate.total} amigos`}
          </Text>
        </Box>
        <Tooltip title="Ver amigos" arrow>
          <IconButton
            onClick={() => navigate(id ? `/amigos/${id}` : "/amigos")}
          >
            <EyeIcon />
          </IconButton>
        </Tooltip>
      </Box>

      {!loading && (
        <Box mt={2} className="fotos-grid">
          {amigos.map((amigo) => (
            <Amigo user={amigo} key={amigo.id} />
          ))}
        </Box>
      )}
      {paginate.total > 8 && (
        <Box
          mt={2.3}
          className="paginate"
          display="flex"
          justifyContent="center"
        >
          <Pagination
            count={paginate.last_page}
            page={paginate.current_page}
            onChange={handleChange}
            variant="outlined"
            shape="rounded"
          />
        </Box>
      )}
      {paginate.total === 0 && !loading && (
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
              src="/img/info_amigos_add.png"
              alt="Logo a dizer pra se conectar com amigos"
            />
            {!id ? (
              <Text variant="subtitle2" color="textSecondary" align="center">
                Conecte-se com as pessoas nessa jornada incrivel. Quanto mais
                amigos tiver mais atualizado você fica sobre as suas atividades.
              </Text>
            ) : (
              <Text variant="subtitle2" color="textSecondary" align="center">
                Ao se conectar com as pessoas a jornada fica melhor. Quanto mais
                amigos se tiver mais atualizado se fica sobre as suas
                atividades.
              </Text>
            )}
          </Box>
          {!id && (
            <Box mt={1}>
              <Button
                variant="text"
                color="secondary"
                onClick={() => navigate("/amigos")}
              >
                Adicionar amigos
              </Button>
            </Box>
          )}
        </Box>
      )}
      {!loading && paginate.total > 0 && paginate.total < 8 && (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          mt={2}
          className="paginate"
          px={1}
        >
          {!id ? (
            <Text variant="subtitle2" color="textSecondary" align="center">
              Quanto mais amigos tiver mais atualizado você fica sobre as suas
              atividades.
            </Text>
          ) : (
            <Text variant="subtitle2" color="textSecondary" align="center">
              Quanto mais amigos se tiver mais atualizado se fica sobre as suas
              atividades.
            </Text>
          )}

          {!id && (
            <Button
              variant="text"
              color="secondary"
              onClick={() => navigate("/amigos")}
            >
              Adicionar amigos
            </Button>
          )}
        </Box>
      )}
    </Paper>
  );
}
