import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import ListSubheader from "@material-ui/core/ListSubheader";

import { Text } from "../styles";

import { FaUsers } from "react-icons/fa";
import { FaTv } from "react-icons/fa";
import { MdGroup } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import SerieIcon from "@material-ui/icons/OndemandVideo";
import FilmeIcon from "@material-ui/icons/Videocam";

export default function MenuLeft() {
  const grupos = [1, 2, 3, 4];
  return (
    <div className="menu-left">
      <List>
        <ListItem button>
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
        {/* <ListItem button>
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
            <MdGroup />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Grupos" />
      </ListItem> */}
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

      <List>
        <ListSubheader>
          <Text variant="body1">SEUS GRUPOS</Text>
        </ListSubheader>
        {grupos.map((item) => (
          <ListItem button key={item}>
            <ListItemAvatar>
              <Avatar>
                <MdGroup />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={`Grupo ${item}`} />
          </ListItem>
        ))}
        <ListItem button>
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
