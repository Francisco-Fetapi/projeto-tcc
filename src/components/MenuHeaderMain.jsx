import React, { useCallback } from "react";
import List from "@material-ui/core/List";
import Box from "@material-ui/core/Box";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Divider from "@material-ui/core/Divider";
import Switch from "@material-ui/core/Switch";

import FeedbackIcon from "@material-ui/icons/Feedback";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PaletteIcon from "@material-ui/icons/Palette";
import useUsuario from "../hooks/useUsuario";
import { useDispatch, useSelector } from "react-redux";
import { SET_STATE } from "~/store/App.actions";
import { selectAll } from "~/store/App.selectors";
import { Text } from "~/styles";

export default function MenuHeaderMain() {
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
    <>
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
      <Box>
        <Text align="center" color="textSecondary" variant="subtitle2">
          Social Movies Space © {new Date().getFullYear()}
        </Text>
      </Box>
    </>
  );
}
