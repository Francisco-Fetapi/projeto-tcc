import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
// import IconButton from "@material-ui/core/IconButton";
import { Text } from "~/styles";
import { useNavigate } from "react-router-dom";
// import Close from "@material-ui/icons/Close";

export default function MenuHeaderInfo({ usuario, fechar }) {
  const navigate = useNavigate();
  return (
    <Grid
      style={{ cursor: "pointer" }}
      container
      spacing={1}
      className="menu-header-container"
      onClick={() => navigate("/perfil")}
    >
      <Grid item>
        <img
          src={usuario.foto_perfil}
          alt="Foto do usuario"
          width={64}
          height={64}
          style={{ borderRadius: "50%" }}
        />
      </Grid>
      <Grid item>
        <Box>
          <Text>{usuario.nome}</Text>
        </Box>
        <Text color="textSecondary" variant="subtitle1">
          {usuario.email}
        </Text>
      </Grid>
    </Grid>
  );
}
