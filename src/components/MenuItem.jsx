import React from "react";
import { MenuItemContainer } from "../styles";
import useTheme from "@material-ui/core/styles/useTheme";
import Badge from "@material-ui/core/Badge";

import { useNavigate, useLocation } from "react-router-dom";

export default function MenuItem({
  rota,
  icon,
  badge,
  badgeMax,
  to,
  ...props
}) {
  const theme = useTheme();
  const navigate = useNavigate();

  function goTo() {
    navigate(rota);
  }
  return (
    <MenuItemContainer
      onClick={goTo}
      color={theme.palette.primary.main}
      {...props}
    >
      {badge && (
        <Badge max={badgeMax} badgeContent={badge}>
          {icon}
        </Badge>
      )}
      {!badge && icon}
    </MenuItemContainer>
  );
}
