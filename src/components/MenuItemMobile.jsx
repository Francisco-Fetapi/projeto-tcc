import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { MenuItemMobileStyled } from "~/styles";

export default function MenuItemMobile({ text, icon }) {
  return (
    <MenuItemMobileStyled>
      <ListItem button key={text}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    </MenuItemMobileStyled>
  );
}
