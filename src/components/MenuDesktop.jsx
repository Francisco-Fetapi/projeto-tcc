import React from "react";

import { Text } from "../styles";
import Box from "@material-ui/core/Box";
import Menu from "@material-ui/core/Menu";

import MenuHeaderInfo from "./MenuHeaderInfo";
import MenuHeaderMain from "./MenuHeaderMain";

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
