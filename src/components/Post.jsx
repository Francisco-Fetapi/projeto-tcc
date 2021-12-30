import React from "react";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import ModeCommentIcon from "@material-ui/icons/ModeComment";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import { Text } from "../styles";

import { FaClock, FaGlobe } from "react-icons/fa";

function SubHeader({ tempo, publico }) {
  return (
    <Box display="flex" alignItems="center">
      <Box display="flex" alignItems="center">
        <FaClock />
        <Text variant="subtitle2" style={{ paddingLeft: 5 }}>
          {tempo}
        </Text>
      </Box>
      <Box ml={3} display="flex" alignItems="center">
        <FaGlobe />
        <Text variant="subtitle2" style={{ paddingLeft: 5 }}>
          {publico}
        </Text>
      </Box>
    </Box>
  );
}
function NumeroComentarios({ comentarios }) {
  if (!comentarios) return <span />;
  return <b>({comentarios})</b>;
}

export default function Post({
  user,
  reacoes,
  comentarios,
  tempo,
  publico,
  children,
  img,
}) {
  return (
    <Box my={2}>
      <Card className="post">
        <CardHeader
          avatar={
            <img
              className="foto-user"
              src={`./img/${user.foto}`}
              alt="foto do usuario"
            />
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={<Text>{user.nome}</Text>}
          subheader={<SubHeader tempo={tempo} publico={publico} />}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {children}
          </Typography>
          {img && (
            <Box mt={3} className="imagem-post">
              <img src={`./img/${img}`} alt="imagem" />
            </Box>
          )}
        </CardContent>
        <Box className="post-acoes">
          {reacoes && (
            <Box ml={2} mt={2} display="flex" justifyContent="flex-start">
              <Box>
                <img src="./img/like.png" alt="like" />
                <img src="./img/love.png" alt="love" />
              </Box>
              <Box ml={0.5}>
                <Text>{reacoes}</Text>
              </Box>
            </Box>
          )}
          <Divider />
          <ButtonGroup size="small" fullWidth>
            <Button startIcon={<ThumbUpIcon />}>Gostar</Button>

            <Button startIcon={<ModeCommentIcon />}>
              Comentar &nbsp;
              <NumeroComentarios comentarios={comentarios} />
            </Button>

            <Button startIcon={<SaveAltIcon />}>Guardar</Button>
          </ButtonGroup>
        </Box>
      </Card>
    </Box>
  );
}
