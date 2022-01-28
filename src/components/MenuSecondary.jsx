import React, { useCallback } from "react";
import { MenuSecondary, Text } from "../styles";
import Box from "@material-ui/core/Box";
import MuiBadge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import useTheme from "@material-ui/core/styles/useTheme";

import { FaEnvelope } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

import { useSelector } from "react-redux";
import { selectAll } from "../store/App.selectors";

import { useDispatch } from "react-redux";
import { SET_STATE } from "../store/App.actions";
import MenuDesktop from "./MenuDesktop";

function Badge({ children, ...props }) {
  if (props.badgeContent === 0) {
    return children;
  }
  return <MuiBadge {...props}>{children}</MuiBadge>;
}

export default function MenuSecondary_({ info }) {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { usuario, dark } = useSelector(selectAll);
  const Disparar = useDispatch();

  const handleClick = useCallback((event) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const mudarTema = useCallback(() => {
    if (!dark) {
      localStorage.setItem("dark", true);
    } else {
      localStorage.removeItem("dark");
    }
    Disparar(SET_STATE("dark", !dark));
  }, [dark]);

  return (
    <MenuSecondary>
      <Box
        display="flex"
        alignItems="center"
        style={{
          zoom: ".8",
        }}
      >
        <IconButton
          style={{
            margin: "0px 4px",
            background: theme.palette.primary.main,
          }}
        >
          <Badge max={9} badgeContent={info.mensagens}>
            <FaEnvelope color="white" />
          </Badge>
        </IconButton>

        <IconButton
          style={{
            margin: "0px 4px",
            background: theme.palette.primary.main,
          }}
        >
          <Badge max={99} badgeContent={info.notificacoes}>
            <FaBell color="white" />
          </Badge>
        </IconButton>
        <IconButton
          style={{ margin: "0px 4px", background: theme.palette.primary.main }}
          onClick={handleClick}
        >
          <FaChevronDown color="white" />
        </IconButton>
      </Box>

      <MenuDesktop
        anchorEl={anchorEl}
        handleClose={handleClose}
        usuario={usuario}
        dark={dark}
        mudarTema={mudarTema}
      />
    </MenuSecondary>
  );
}
