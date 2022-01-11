import React from "react";
import { MenuSecondary, Text } from "../styles";
import Box from "@material-ui/core/Box";
import MuiBadge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import useTheme from "@material-ui/core/styles/useTheme";

import { FaEnvelope } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

import Menu from "@material-ui/core/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import { useSelector } from "react-redux";
import { selectAll } from "../store/App.selectors";

import Switch from "@material-ui/core/Switch";

import FeedbackIcon from "@material-ui/icons/Feedback";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PaletteIcon from "@material-ui/icons/Palette";

function Badge({ children, ...props }) {
  if (props.badgeContent === 0) {
    return children;
  }
  return <MuiBadge {...props}>{children}</MuiBadge>;
}

export default function MenuSecondary_({ info }) {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { usuario } = useSelector(selectAll);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
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
          <Grid container spacing={1}>
            <Grid item>
              <img
                src={usuario.foto_perfil}
                alt="Foto do usuario"
                width={64}
                height={64}
                style={{ borderRadius: "50%" }}
              />
            </Grid>
            <Grid item>
              <Box>
                <Text>{usuario.nome}</Text>
              </Box>
              <Text color="textSecondary" variant="subtitle1">
                {usuario.email}
              </Text>
            </Grid>
          </Grid>
          <Box>
            <List>
              <Divider />
              <ListItem>
                <ListItemAvatar>
                  <FeedbackIcon />
                </ListItemAvatar>
                <ListItemText secondary="Ajude-nos a melhorar o SMS">
                  Dá-nos o seu feedback
                </ListItemText>
              </ListItem>
              <Divider />
              <ListItem style={{ paddingTop: 15 }}>
                <ListItemAvatar>
                  <PaletteIcon />
                </ListItemAvatar>
                <ListItemText>Modo escuro</ListItemText>
                <ListItemSecondaryAction>
                  <Switch color="primary" />
                </ListItemSecondaryAction>
              </ListItem>
              <Divider />
              <ListItem style={{ paddingTop: 15 }}>
                <ListItemAvatar>
                  <ExitToAppIcon />
                </ListItemAvatar>
                <ListItemText>Terminar sessão</ListItemText>
              </ListItem>
            </List>
          </Box>
          <Box>
            <Text align="center" color="textSecondary" variant="subtitle2">
              Social Movies Space © {new Date().getFullYear()}
            </Text>
          </Box>
        </Box>
      </Menu>
    </MenuSecondary>
  );
}
