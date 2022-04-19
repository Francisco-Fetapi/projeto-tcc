import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Avatar from "@material-ui/core/Avatar";

import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import { mostrarXCharOntText } from "~/helpers";
import { SubHeader } from "../Post";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function CardDiscussao({ usuario, post }) {
  const classes = useStyles();

  return (
    <Card>
      <CardActionArea>
        <CardHeader
          avatar={
            <Avatar src={usuario.img} className={classes.avatar}>
              R
            </Avatar>
          }
          title={usuario.nome}
          subheader={<SubHeader post={post} />}
        />
      </CardActionArea>
      <CardActionArea>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {mostrarXCharOntText(post.content, 90)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
