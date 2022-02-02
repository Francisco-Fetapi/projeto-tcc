import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

import Add from "@material-ui/icons/AddCircle";
import { Text } from "~/styles";
import { BASE_URL } from "~/API";

import { mostrarXCharOntText, primeiroEUltimoNome } from "~/helpers";

import useUsuario from "~/hooks/useUsuario";

export default function Sugestao({ usuario, setUsuarios }) {
  const [loading, setLoading] = useState(false);
  const { PedidoDeAmizade } = useUsuario();
  return (
    <Paper variant="outlined" className="sugestao">
      <Box component="figure">
        <img src={`${BASE_URL}/${usuario.foto_perfil}`} alt="Imagem usuario" />
      </Box>
      <Box
        className="info"
        display="flex"
        flexDirection="column"
        alignItems="center"
        mt={4.5}
      >
        <Text align="center">{primeiroEUltimoNome(usuario)}</Text>
        <Box flexGrow={1} />
        <Text color="textSecondary" variant="subtitle2">
          {mostrarXCharOntText(
            `de ${usuario.pais},${usuario.estado},${usuario.cidade}`,
            24
          )}
        </Text>
        <Text
          color="textSecondary"
          variant="subtitle2"
          style={{ fontSize: 12 }}
        >
          {usuario.email}
        </Text>
        <Box mt={2} display="flex" justifyContent="center">
          {!loading && (
            <Button
              onClick={() =>
                PedidoDeAmizade.enviar({ setLoading, setUsuarios }, usuario.id)
              }
              variant="contained"
              color="secondary"
              startIcon={<Add />}
            >
              Adicionar
            </Button>
          )}

          {loading && <CircularProgress />}
        </Box>
      </Box>
    </Paper>
  );
}
