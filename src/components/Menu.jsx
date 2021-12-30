import React from "react";
import { MenuContainer } from "../styles";
import MenuItem from "./MenuItem.jsx";

import Home from "@material-ui/icons/Home";
import { FaUser } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaTv } from "react-icons/fa";
import { MdGroup } from "react-icons/md";

import { useLocation } from "react-router-dom";

export default function Menu() {
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
        rota="/amigos"
        active={"/amigos" === pathname}
        badge={3}
        badgeMax={9}
        icon={<FaUsers />}
      />
      <MenuItem
        rota="/videos"
        active={"/videos" === pathname}
        badge={12}
        badgeMax={9}
        icon={<FaTv />}
      />
      <MenuItem rota="/" badge={1} badgeMax={15} icon={<MdGroup />} />
    </MenuContainer>
  );
}
