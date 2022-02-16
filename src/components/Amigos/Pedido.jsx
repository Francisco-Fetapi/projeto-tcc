import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import CircularProgress from "@material-ui/core/CircularProgress";
import useUsuario from "~/hooks/useUsuario";

import { Text, Link } from "~/styles";

import Done from "@material-ui/icons/Done";
import Clear from "@material-ui/icons/Clear";
import { mostrarXCharOntText, primeiroEUltimoNome } from "~/helpers";

export default function Pedido({ user, setPedidos }) {
  const [loading, setLoading] = useState(false);
  const { PedidoDeAmizade } = useUsuario();

  return (
    <Box className="pedido">
      <Paper variant="outlined" className="dados">
        <abbr title={user.nome}>
          <Link to={`/usuario/${user.id}`} nostyle>
            <Text variant="h6">
              {mostrarXCharOntText(primeiroEUltimoNome(user), 18)}
            </Text>
          </Link>
        </abbr>
        <abbr title={user.email}>
          <Text variant="subtitle2" color="textSecondary">
            {mostrarXCharOntText(user.email, 25)}
          </Text>
        </abbr>
        <Text variant="subtitle2" color="textSecondary">
          {mostrarXCharOntText(
            `${user.pais}, ${user.estado}, ${user.cidade}`,
            30
          )}
        </Text>
        <Box mt={1}>
          <Text variant="subtitle2">
            Gosta de: <b>{user.genero_favorito}</b>
          </Text>
          <Text variant="subtitle2">
            Não gosta de: <b>{user.genero_n_favorito}</b>
          </Text>
        </Box>
        <Box component="figure">
          <Link to={`/usuario/${user.id}`} nostyle>
            <img src={user.foto_perfil} alt="foto do usuario" />
          </Link>
        </Box>
        {loading && (
          <Box className="loading">
            <CircularProgress />
          </Box>
        )}
      </Paper>
      <Box flexGrow={1} />
      <Box mt={5} display="flex" justifyContent="center">
        <ButtonGroup color="primary" className="btn-acoes">
          <Button
            onClick={() =>
              PedidoDeAmizade.aceitar({ setLoading, setPedidos }, user.id)
            }
            className="aceitar"
            startIcon={<Done />}
          >
            Aceitar
          </Button>
          <Button
            onClick={() =>
              PedidoDeAmizade.rejeitar({ setLoading, setPedidos }, user.id)
            }
            className="rejeitar"
            startIcon={<Clear />}
          >
            Recusar
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
}
