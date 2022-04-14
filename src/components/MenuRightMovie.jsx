import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { formatarData, mostrarXCharOntText } from "~/helpers";
import { useNavigate } from "react-router-dom";
import { Link } from "~/styles";

export default function MenuRightMovie({ movie }) {
  const navigate = useNavigate();
  const eh_filme = movie.title !== undefined;
  // const url = eh_filme ? `/filmes/${movie.id}` : `/series/${movie.id}`;
  return (
    <Link
      nostyle="true"
      to={eh_filme ? `/filmes/${movie.id}` : `/series/${movie.id}`}
    >
      <ListItem button style={{ paddingLeft: "0" }}>
        <ListItemAvatar>
          <img src={movie.poster_path} alt={movie.title || movie.name} />
        </ListItemAvatar>
        <ListItemText
          primary={mostrarXCharOntText(movie.title || movie.name, 16)}
          secondary={formatarData(movie.release_date || movie.first_air_date)}
          style={{ marginTop: -15, zoom: 0.95 }}
        />
      </ListItem>
    </Link>
  );
}
