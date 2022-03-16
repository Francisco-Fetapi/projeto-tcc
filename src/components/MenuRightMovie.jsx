import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { mostrarXCharOntText } from "~/helpers";
import { useNavigate } from "react-router-dom";

export default function MenuRightMovie({ movie }) {
  const navigate = useNavigate();
  const eh_filme = movie.title !== undefined;
  const url = eh_filme ? `/filmes/${movie.id}` : `/series/${movie.id}`;
  return (
    <ListItem button onClick={() => navigate(url)}>
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
