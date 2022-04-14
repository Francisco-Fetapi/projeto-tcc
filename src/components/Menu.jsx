import React from "react";
import { MenuContainer } from "../styles";
import MenuItem from "./MenuItem.jsx";

import Home from "@material-ui/icons/Home";
import { FaUser } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaTv } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaBell, FaChevronDown } from "react-icons/fa";
import { MdGroup } from "react-icons/md";

import { useLocation } from "react-router-dom";

export default function Menu({ info }) {
  const { pathname } = useLocation();
  return (
    <MenuContainer>
      <MenuItem
        rota="/"
        active={"/" === pathname}
        icon={<Home style={{ fontSize: 36 }} />}
      />
      <MenuItem
        rota="/perfil"
        active={"/perfil" === pathname}
        icon={<FaUser style={{ fontSize: 28 }} />}
      />
      <MenuItem
        rota="/mensagens"
        active={"/mensagens" === pathname}
        icon={<FaEnvelope style={{ fontSize: 28 }} />}
        style={{ display: "none" }}
        badge={info.mensagens}
        badgeMax={9}
      />
      <MenuItem
        rota="/notificacoes"
        active={"/notificacoes" === pathname}
        icon={<FaBell style={{ fontSize: 28 }} />}
        style={{ display: "none" }}
        badge={info.notificacoes}
        badgeMax={99}
      />
      <MenuItem
        rota="/amigos"
        active={"/amigos" === pathname}
        badge={info.pedidos_de_amizade}
        badgeMax={9}
        icon={<FaUsers />}
        className="menuItem-hide-on-mobile"
      />
      <MenuItem
        rota="/videos"
        active={"/videos" === pathname}
        icon={<FaTv />}
        className="menuItem-hide-on-mobile"
      />
      <MenuItem
        rota="/atores"
        active={"/atores" === pathname}
        icon={<MdGroup />}
        className="menuItem-hide-on-mobile menuItem-hide-on-tablet"
      />
      <MenuItem
        rota="/mais"
        onClick={() => false}
        active={"/main" === pathname}
        icon={<FaChevronDown />}
        className="menuItem-hide-on-mobile menuItem-show-on-tablet"
      />
    </MenuContainer>
  );
}
