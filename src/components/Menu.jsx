import React from "react";
import { MenuContainer } from "../styles";
import MenuItem from "./MenuItem.jsx";

import Home from "@material-ui/icons/Home";
import { FaUser } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaTv } from "react-icons/fa";
import { MdGroup } from "react-icons/md";

// import Home from "@material-ui/icons/Home";
// import Home from "@material-ui/icons/Home";

export default function Menu() {
  return (
    <MenuContainer>
      <MenuItem active={true} icon={<Home style={{ fontSize: 40 }} />} />
      <MenuItem icon={<FaUser style={{ fontSize: 33 }} />} />
      <MenuItem badge={3} badgeMax={9} icon={<FaUsers />} />
      <MenuItem badge={12} badgeMax={9} icon={<FaTv />} />
      <MenuItem badge={1} badgeMax={15} icon={<MdGroup />} />
    </MenuContainer>
  );
}
