import React, { useCallback } from "react";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

import { useLocation } from "react-router-dom";

import MenuIcon from "@material-ui/icons/Menu";
import MenuItemMobile from "./MenuItemMobile";

import Home from "@material-ui/icons/Home";
import FeedbackIcon from "@material-ui/icons/Feedback";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PaletteIcon from "@material-ui/icons/Palette";
import { FaUser } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaTv } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { MdGroup } from "react-icons/md";
import useUsuario from "~/hooks/useUsuario";
import { selectAll } from "~/store/App.selectors";
import { useSelector } from "react-redux";
import Switch from "@material-ui/core/Switch";

import { useDispatch } from "react-redux";
import { SET_STATE } from "~/store/App.actions";
import { Text } from "~/styles";

export default function MenuMobile({ info }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const { pathname } = useLocation();
  const { logout } = useUsuario();
  const { dark, usuario } = useSelector(selectAll);
  const Disparar = useDispatch();

  const mudarTema = useCallback(() => {
    if (!dark) {
      localStorage.setItem("dark", true);
    } else {
      localStorage.removeItem("dark");
    }
    Disparar(SET_STATE("dark", !dark));
  }, [dark]);

  return (
    <div className="menu-mobile" style={{ display: "none" }}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        className="menu-button-mobile"
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        // container={container}
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        classes={{
          paper: "paper-drawer",
        }}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <Box p={2}>
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
        </Box>
        <Divider />
        <List>
          <MenuItemMobile
            rota="/"
            active={"/" === pathname}
            icon={<Home />}
            text="Página inicial"
          />
          <MenuItemMobile
            rota="/perfil"
            active={"/perfil" === pathname}
            icon={<FaUser />}
            text="Perfil"
          />
          <MenuItemMobile
            rota="/mensagens"
            active={"/mensagens" === pathname}
            icon={<FaEnvelope />}
            badge={info.mensagens}
            badgeMax={9}
            text="Mensagens"
          />
          <MenuItemMobile
            rota="/notificacoes"
            active={"/notificacoes" === pathname}
            icon={<FaBell />}
            badge={info.notificacoes}
            badgeMax={99}
            text="Notificações"
          />
          <MenuItemMobile
            rota="/amigos"
            active={"/amigos" === pathname}
            badge={info.pedidos_de_amizade}
            badgeMax={9}
            icon={<FaUsers />}
            text="Amigos"
          />
          <MenuItemMobile
            rota="/videos"
            active={"/videos" === pathname}
            icon={<FaTv />}
            text="Videos"
          />
          <MenuItemMobile
            rota="/atores"
            active={"/atores" === pathname}
            icon={<MdGroup />}
            text="Atores"
          />
        </List>

        <Box style={{ userSelect: "none", cursor: "pointer" }}>
          <List>
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
        </Box>
        <Box mb={2}>
          <Text align="center" color="textSecondary" variant="subtitle2">
            Social Movies Space © {new Date().getFullYear()}
          </Text>
        </Box>
      </Drawer>
    </div>
  );
}
