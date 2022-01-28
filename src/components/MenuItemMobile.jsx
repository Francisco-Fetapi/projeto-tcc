import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Badge from "@material-ui/core/Badge";
import { MenuItemMobileStyled } from "~/styles";
import { useNavigate } from "react-router-dom";

import useTheme from "@material-ui/core/styles/useTheme";

export default function MenuItemMobile({
  text,
  rota,
  icon,
  badge,
  active,
  badgeMax,
}) {
  const navigate = useNavigate();
  const theme = useTheme();

  function goTo() {
    navigate(rota);
  }
  return (
    <MenuItemMobileStyled active={active} color={theme.palette.primary.main}>
      <ListItem button key={text} onClick={goTo}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
        {badge && badge > 0 && (
          <ListItemSecondaryAction>
            <Badge badgeContent={badge} max={badgeMax}>
              <div style={{ marginRight: 20 }} />
            </Badge>
          </ListItemSecondaryAction>
        )}
      </ListItem>
    </MenuItemMobileStyled>
  );
}
