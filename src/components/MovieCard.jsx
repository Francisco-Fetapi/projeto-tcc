import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FormatListBulleted from "@material-ui/icons/FormatListBulleted";
import CardActionArea from "@material-ui/core/CardActionArea";
import { Text } from "~/styles";
import { mostrarXCharOntText, normalizarMediaType } from "~/helpers";
import { useNavigate, useLocation } from "react-router-dom";
import useMovie from "~/hooks/useMovie";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 250,
    // paddingTop: "56.25%",
  },
}));

export default function MovieCard({ movie }) {
  const classes = useStyles();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { toggleFavoritarMovie, toggleGuardarMovie } = useMovie();
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState({
    favoritei: movie.favoritei,
    quantos_favoritaram: 0,
    guardei: movie.guardei,
    quantos_guardaram: 0,
  });

  function guardar() {
    toggleGuardarMovie({ setInfo, setLoading }, movie.id, movie.media_type);
  }
  function favoritar() {
    normalizarMediaType(movie);
    console.log(movie.id, movie.media_type);
    toggleFavoritarMovie({ setInfo, setLoading }, movie.id, movie.media_type);
  }

  useEffect(() => {
    console.log(info);
  }, [info]);

  return (
    <Card>
      <CardMedia
        className={classes.media}
        image={movie.poster_path}
        title={movie.name || movie.title}
        style={{
          backgroundPosition: "top",
        }}
      />
      <CardActionArea onClick={() => navigate(`${pathname}/${movie.id}`)}>
        <CardContent className="card_movie_content">
          <abbr title={movie.name || movie.title}>
            <Text variant="h6">
              {mostrarXCharOntText(movie.name || movie.title, 20)}
            </Text>
          </abbr>
          <Typography variant="body2" color="textSecondary" component="p">
            {mostrarXCharOntText(movie.overview, 120) ||
              `Sinopse não disponivel`}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        disableSpacing
        style={{
          opacity: loading ? 0.7 : 1,
          pointerEvents: loading ? "none" : "initial",
        }}
      >
        <IconButton onClick={favoritar} aria-label="Adicionar aos favoritos">
          <FavoriteIcon style={{ color: info.favoritei ? "#e41e3f" : null }} />
        </IconButton>
        <IconButton onClick={guardar} aria-label="Guardar">
          <FormatListBulleted
            style={{ color: info.guardei ? "#435fec" : null }}
          />
        </IconButton>
      </CardActions>
    </Card>
  );
}
