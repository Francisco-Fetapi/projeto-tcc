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
import { mostrarXCharOntText } from "~/helpers";
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
  const { getMovieInfo } = useMovie();
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState({
    favoritei: 0,
    quantos_favoritaram: 0,
    guardei: 0,
    quantos_guardaram: 0,
  });

  useEffect(() => {
    getMovieInfo({ setInfo, setLoading }, movie.id, movie.media_type);
  }, []);

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
      <CardActions disableSpacing>
        <IconButton aria-label="Adicionar aos favoritos">
          <FavoriteIcon style={{ color: info.favoritei ? "#e41e3f" : null }} />
        </IconButton>
        <IconButton aria-label="Guardar">
          <FormatListBulleted
            style={{ color: info.guardei ? "#2196f3" : null }}
          />
        </IconButton>
      </CardActions>
    </Card>
  );
}
