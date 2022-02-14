import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";

import { Text } from "../styles";

import MoreHoriz from "@material-ui/icons/MoreHoriz";
import { FaChevronDown } from "react-icons/fa";

import atividades from "../mock/atividades.json";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export default function AtividadesRecentes() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <List className="lista-atividades">
      <Box px={2} display="flex" alignItems="center">
        <Text variant="body1">ATIVIDADES RECENTES</Text>
        <Box flexGrow={1} />
        <IconButton onClick={handleClick}>
          <MoreHoriz />
        </IconButton>
      </Box>
      {atividades.map((item, key) => (
        <ListItem
          divider
          button
          key={key}
          className={key <= 1 ? "nao-lida" : ""}
        >
          <ListItemAvatar>
            <Avatar className="atvidade-icon">
              <img src={`/img/${item.icon}`} alt={item.icon} />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            className="atividade-texto"
            primary={item.texto}
            secondary={item.tempo}
          />
        </ListItem>
      ))}
      <ListItem button className="ver_mais_atividades">
        <ListItemAvatar>
          <Avatar>
            <FaChevronDown />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Ver mais" />
      </ListItem>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem onClick={handleClose}>Marcar todas como lidas</MenuItem>
        <MenuItem onClick={handleClose}>Eliminar todas</MenuItem>
        <MenuItem onClick={handleClose}>Mais</MenuItem>
      </Menu>
    </List>
  );
}
