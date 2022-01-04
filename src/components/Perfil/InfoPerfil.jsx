import React from "react";
import Box from "@material-ui/core/Box";
import { Text } from "../../styles";
import { Perfil } from "../../styles/pages/Perfil";
import useUsuario from "../../hooks/useUsuario";
import { formatarData } from "../../helpers";

export default function InfoPerfil() {
  const { usuario } = useUsuario();

  return (
    <Perfil.InfoPerfil>
      <Box className="dado-grid-2">
        <Text>Nome</Text>
        <Text align="right">{usuario.nome}</Text>
      </Box>
      <Box className="dado-grid-2">
        <Text>Email</Text>
        <Text align="right">{usuario.email}</Text>
      </Box>
      <Box className="dado-grid-2">
        <Text>Data de Nascimento</Text>
        <Text align="right">{formatarData(usuario.data_nascimento)}</Text>
      </Box>
      <Box className="dado-grid-2">
        <Text>Genero</Text>
        <Text align="right">
          {usuario.genero === "m" ? "Masculino" : "Feminino"}
        </Text>
      </Box>
      <Box className="dado-grid-2">
        <Text>Localidade</Text>
        <Text align="right">
          {`${usuario.pais}, ${usuario.estado}, ${usuario.cidade}`}
        </Text>
      </Box>
      <Box className="dado-grid-2">
        <Text>Genero Favorito</Text>
        <Text align="right">{usuario.genero_favorito}</Text>
      </Box>
      {usuario.genero_favorito_porque && (
        <Box className="dado-grid-1">
          <Text>
            Gosto de <i>{usuario.genero_favorito}</i> porque
          </Text>
          <Text>{usuario.genero_favorito_porque}</Text>
        </Box>
      )}
      <Box className="dado-grid-2">
        <Text>Pior Genero</Text>
        <Text align="right">{usuario.genero_n_favorito}</Text>
      </Box>
      <Box className="dado-grid-2">
        <Text>Assisto para</Text>
        <Text align="right">{usuario.assisto_para}</Text>
      </Box>
      <Box className="dado-grid-1">
        <Text>Biografia</Text>
        <Text>{usuario.mini_biografia}</Text>
      </Box>
    </Perfil.InfoPerfil>
  );
}
