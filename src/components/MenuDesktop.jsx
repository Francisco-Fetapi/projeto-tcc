import React, { useCallback } from "react";

import { Text } from "../styles";
import Box from "@material-ui/core/Box";
import Menu from "@material-ui/core/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Switch from "@material-ui/core/Switch";

import FeedbackIcon from "@material-ui/icons/Feedback";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PaletteIcon from "@material-ui/icons/Palette";
import useUsuario from "../hooks/useUsuario";
import { useDispatch, useSelector } from "react-redux";
import { SET_STATE } from "~/store/App.actions";
import { selectAll } from "~/store/App.selectors";

export function MenuHeaderInfo({ usuario }) {
  return (
    <Grid container spacing={1}>
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

export function MenuHeaderMain() {
  const Disparar = useDispatch();
  const { dark } = useSelector(selectAll);
  const { logout } = useUsuario();
  const mudarTema = useCallback(() => {
    if (!dark) {
      localStorage.setItem("dark", true);
    } else {
      localStorage.removeItem("dark");
    }
    Disparar(SET_STATE("dark", !dark));
  }, [dark]);
  return (
    <List style={{ userSelect: "none", cursor: "pointer" }}>
      <Divider />
      <ListItem>
        <ListItemAvatar>
          <FeedbackIcon />
        </ListItemAvatar>
        <ListItemText secondary="Ajude-nos a melhorar o SMS">
          Dá-nos o seu feedback
        </ListItemText>
      </ListItem>
      <Divider />
      <ListItem style={{ paddingTop: 15 }} onClick={mudarTema}>
        <ListItemAvatar>
          <PaletteIcon />
        </ListItemAvatar>
        <ListItemText>Modo escuro</ListItemText>
        <ListItemSecondaryAction>
          <Switch color="primary" checked={dark} />
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
      <ListItem style={{ paddingTop: 15 }} onClick={() => logout(true)}>
        <ListItemAvatar>
          <ExitToAppIcon />
        </ListItemAvatar>
        <ListItemText>Terminar sessão</ListItemText>
      </ListItem>
    </List>
  );
}

export default function MenuDesktop({ anchorEl, handleClose, usuario }) {
  return (
    <Menu
      id="menu-header"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
      elevation={2}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
    >
      <Box p={2}>
        <MenuHeaderInfo usuario={usuario} />
        <Box>
          <MenuHeaderMain />
        </Box>
        <Box>
          <Text align="center" color="textSecondary" variant="subtitle2">
            Social Movies Space © {new Date().getFullYear()}
          </Text>
        </Box>
      </Box>
    </Menu>
  );
}
