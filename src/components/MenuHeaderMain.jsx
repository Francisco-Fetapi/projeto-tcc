import React, { useCallback } from "react";
import List from "@material-ui/core/List";
import Box from "@material-ui/core/Box";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Divider from "@material-ui/core/Divider";
import Collapse from "@material-ui/core/Collapse";
import Switch from "@material-ui/core/Switch";

import FeedbackIcon from "@material-ui/icons/Feedback";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PaletteIcon from "@material-ui/icons/Palette";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import useUsuario from "../hooks/useUsuario";
import { useDispatch, useSelector } from "react-redux";
import { SET_STATE } from "~/store/App.actions";
import { selectAppState } from "~/store/App.selectors";
import { Text } from "~/styles";
import { useNavigate } from "react-router-dom";
import SerieIcon from "@material-ui/icons/OndemandVideo";
import FilmeIcon from "@material-ui/icons/Videocam";
import { FaClock } from "react-icons/fa";

export default function MenuHeaderMain() {
  const Disparar = useDispatch();
  const dark = useSelector(selectAppState("dark"));
  const { logout } = useUsuario();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const navigate = useNavigate();
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
        <ListItem
          onClick={handleExpandClick}
          className="menuItem-show-on-tablet"
        >
          <ListItemAvatar>
            <ExpandMoreIcon
              style={{ transform: `rotate(${expanded ? "180deg" : "0deg"})` }}
            />
          </ListItemAvatar>
          <ListItemText>{expanded ? "Menos itens" : "Mais itens"}</ListItemText>
        </ListItem>
        <Collapse in={expanded} timeout="auto" style={{ marginLeft: 50 }}>
          <ListItem onClick={() => navigate("/filmes")}>
            <ListItemAvatar>
              <FilmeIcon />
            </ListItemAvatar>
            <ListItemText>Filmes</ListItemText>
          </ListItem>
          <ListItem onClick={() => navigate("/series")}>
            <ListItemAvatar>
              <SerieIcon />
            </ListItemAvatar>
            <ListItemText>Series</ListItemText>
          </ListItem>
          <ListItem onClick={() => navigate("/minha-linha-do-tempo")}>
            <ListItemAvatar>
              <FaClock style={{ fontSize: 20 }} />
            </ListItemAvatar>
            <ListItemText>Linha do tempo</ListItemText>
          </ListItem>
        </Collapse>
        <Divider />
        <ListItem onClick={() => navigate("/sobre#feedback")}>
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
            <Switch color="primary" checked={dark} onClick={mudarTema} />
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
