import React from "react";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";

import { useLocation } from "react-router-dom";

import MenuIcon from "@material-ui/icons/Menu";
import MenuItemMobile from "./MenuItemMobile";

import Home from "@material-ui/icons/Home";
import { FaUser } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaTv } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { MdGroup } from "react-icons/md";
import { selectAppState } from "~/store/App.selectors";
import { useSelector } from "react-redux";

import MenuHeaderMain from "./MenuHeaderMain";
import MenuHeaderInfo from "./MenuHeaderInfo";

export default function MenuMobile({ info }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((state) => !state);
  };
  const { pathname } = useLocation();
  const usuario = useSelector(selectAppState("usuario"));

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
          <MenuHeaderInfo usuario={usuario} />
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

        <Box pb={2}>
          <MenuHeaderMain />
        </Box>
      </Drawer>
    </div>
  );
}
