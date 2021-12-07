import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";

import { Text } from "../styles";

import { MdGroup } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";

import series from "../mock/series.json";

export default function MenuLeft() {
  return (
    <div className="menu-right">
      <List>
        <Text variant="body1" color="textSecondary">
          SERIES POPULARES
        </Text>
        {series.slice(0, 3).map((item) => (
          <ListItem button key={item.nome}>
            <ListItemAvatar>
              <img src={`./img/${item.img}`} alt={item.nome} />
            </ListItemAvatar>
            <ListItemText primary={item.nome} secondary={item.data} />
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
      <br />
      <Divider />
      <br />
      <List>
        <Text variant="body1" color="textSecondary">
          FILMES POPULARES
        </Text>
        {series
          .slice(2, 5)
          .reverse()
          .map((item) => (
            <ListItem button key={item.nome}>
              <ListItemAvatar>
                <img src={`./img/${item.img}`} alt={item.nome} />
              </ListItemAvatar>
              <ListItemText primary={item.nome} secondary={item.data} />
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
