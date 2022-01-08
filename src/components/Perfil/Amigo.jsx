import React from "react";
import Box from "@material-ui/core/Box";
import { Text } from "../../styles";

export default function Amigo({ user }) {
  return (
    <Box component="figure">
      <img className="img-amigo" src={user.foto_perfil} alt="user" />
      <Box component="figcaption">
        <Text align="center" variant="body2" color="textSecondary">
          {user.nome}
        </Text>
      </Box>
    </Box>
  );
}
