import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";

import { Text } from "../styles";

import { FaUsers } from "react-icons/fa";
import { FaTv } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import SerieIcon from "@material-ui/icons/OndemandVideo";
import FilmeIcon from "@material-ui/icons/Videocam";
import MoreHoriz from "@material-ui/icons/MoreHoriz";
import useTheme from "@material-ui/core/styles/useTheme";

import atividades from "../mock/atividades.json";

export default function MenuLeft() {
  const theme = useTheme();
  return (
    <div className="menu-left">
      <List>
        <ListItem
          button
          style={{ background: theme.palette.primary.main, color: "white" }}
          className="item-usuario"
        >
          <ListItemAvatar>
            <img
              src="./img/user.jpg"
              alt="foto usuario"
              className="item-foto-usuario"
            />
          </ListItemAvatar>
          <ListItemText primary="Nome do usuario" />
        </ListItem>
        <ListItem button>
          <ListItemAvatar>
            <Avatar>
              <SerieIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Series" />
        </ListItem>
        <ListItem button>
          <ListItemAvatar>
            <Avatar>
              <FilmeIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Filmes" />
        </ListItem>
        <ListItem button>
          <ListItemAvatar>
            <Avatar>
              <FaUsers />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Amigos" />
        </ListItem>
        <ListItem button>
          <ListItemAvatar>
            <Avatar>
              <FaTv />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Videos" />
        </ListItem>
        <ListItem button>
          <ListItemAvatar>
            <Avatar>
              <FaChevronDown />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Ver mais" />
        </ListItem>
        <br />
        <Divider />
      </List>

      <List className="lista-atividades">
        <Box px={2} display="flex" alignItems="center">
          <Text variant="body1">ATIVIDADES RECENTES</Text>
          <Box flexGrow={1} />
          <IconButton>
            <MoreHoriz />
          </IconButton>
        </Box>
        {atividades.map((item, key) => (
          <ListItem button key={key}>
            <ListItemAvatar>
              <Avatar className="atvidade-icon">
                <img src={`./img/${item.icon}`} alt={item.icon} />
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
      </List>
    </div>
  );
}
