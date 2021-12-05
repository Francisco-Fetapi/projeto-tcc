import React from "react";
import { MenuSecondary, Text } from "../styles";
import Box from "@material-ui/core/Box";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import useTheme from "@material-ui/core/styles/useTheme";

import { FaEnvelope } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

export default function MenuSecondary_() {
  const theme = useTheme();
  return (
    <MenuSecondary>
      <Box display="flex" alignItems="center" className="foto-user-nome">
        <img src="./img/user.jpg" alt="Foto usuario" />
        <Text>NomeUsuario</Text>
      </Box>
      <Box display="flex" alignItems="center">
        <IconButton
          style={{
            margin: "0px 4px",
            background: theme.palette.primary.main,
          }}
        >
          <Badge max={9} badgeContent={1}>
            <FaEnvelope color="white" />
          </Badge>
        </IconButton>

        <IconButton
          style={{
            margin: "0px 4px",
            background: theme.palette.primary.main,
          }}
        >
          <Badge max={99} badgeContent={18}>
            <FaBell color="white" />
          </Badge>
        </IconButton>
        <IconButton
          style={{ margin: "0px 4px", background: theme.palette.primary.main }}
        >
          <FaChevronDown color="white" />
        </IconButton>
      </Box>
    </MenuSecondary>
  );
}
