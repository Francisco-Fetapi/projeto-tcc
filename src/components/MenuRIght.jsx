import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

import { Text } from "../styles";

import { FaChevronDown } from "react-icons/fa";

import series from "../mock/series.json";

export default function MenuLeft() {
  return (
    <>
      <div />
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
        </List>
        <Box my={1} display="flex" justifyContent="center">
          <Button color="primary">Ver mais séries</Button>
        </Box>
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
        </List>
        <Box my={1} display="flex" justifyContent="center">
          <Button color="primary">Ver mais filmes</Button>
        </Box>
      </div>
    </>
  );
}
