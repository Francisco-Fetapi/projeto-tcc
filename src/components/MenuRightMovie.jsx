import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { mostrarXCharOntText } from "~/helpers";

export default function MenuRightMovie({ movie }) {
  return (
    <ListItem button>
      <ListItemAvatar>
        <img src={movie.poster_path} alt={movie.title || movie.name} />
      </ListItemAvatar>
      <ListItemText
        primary={mostrarXCharOntText(movie.title || movie.name, 16)}
        secondary={new Date(
          movie.release_date || movie.first_air_date
        ).toLocaleDateString()}
        style={{ marginTop: -15, zoom: 0.95 }}
      />
    </ListItem>
  );
}
