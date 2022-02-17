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
import { Text } from "~/styles";

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

  return (
    <Card>
      <CardMedia
        className={classes.media}
        image={`/img/${movie.img}`}
        title={movie.title}
      />
      <CardContent>
        <Text variant="body2">{movie.title}</Text>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
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
