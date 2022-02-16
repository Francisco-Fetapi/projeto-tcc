import React from "react";
import Box from "@material-ui/core/Box";
import { Text } from "~/styles";
import { primeiroEUltimoNome } from "~/helpers";
import { useNavigate } from "react-router-dom";

export default function Amigo({ user }) {
  const navigate = useNavigate();
  return (
    <Box component="figure" onClick={() => navigate(`/usuario/${user.id}`)}>
      <img className="img-amigo" src={user.foto_perfil} alt="user" />
      <Box component="figcaption">
        <Text align="center" variant="body2" color="textSecondary">
          {primeiroEUltimoNome(user)}
        </Text>
      </Box>
    </Box>
  );
}
