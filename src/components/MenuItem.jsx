import React from "react";
import { MenuItemContainer } from "../styles";
import useTheme from "@material-ui/core/styles/useTheme";
import Badge from "@material-ui/core/Badge";

export default function MenuItem({ icon, badge, badgeMax, to, ...props }) {
  const theme = useTheme();
  return (
    <MenuItemContainer color={theme.palette.primary.main} {...props}>
      {badge && (
        <Badge max={badgeMax} badgeContent={badge}>
          {icon}
        </Badge>
      )}
      {!badge && icon}
    </MenuItemContainer>
  );
}
