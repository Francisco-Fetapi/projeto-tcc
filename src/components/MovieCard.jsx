import React from "react";
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
import { useNavigate } from "react-router-dom";

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

  return (
    <Card>
      <CardMedia
        className={classes.media}
        image={`/img/${movie.img}`}
        title={movie.title}
      />
      <CardActionArea onClick={() => navigate(`/movie/${movie.id}`)}>
        <CardContent>
          <abbr title={movie.nome}>
            <Text variant="h6">{mostrarXCharOntText(movie.nome, 20)}</Text>
          </abbr>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        <IconButton aria-label="Adicionar aos favoritos">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Guardar">
          <FormatListBulleted />
        </IconButton>
      </CardActions>
    </Card>
  );
}
