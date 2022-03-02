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

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import { Text } from "../styles";

import { FaClock, FaGlobe, FaUsers } from "react-icons/fa";
import { selectAppState } from "../store/App.selectors";
import { useSelector } from "react-redux";

import Skeleton from "@material-ui/lab/Skeleton";

export function SubHeader({ tempo, publico }) {
  return (
    <Box display="flex" alignItems="center">
      <Box display="flex" alignItems="center">
        <FaClock />
        <Text variant="subtitle2" style={{ paddingLeft: 5 }}>
          {tempo}
        </Text>
      </Box>
      <Box ml={3} display="flex" alignItems="center">
        {publico === "amigos" ? <FaUsers /> : <FaGlobe />}
        <Text variant="subtitle2" style={{ paddingLeft: 5 }}>
          {publico}
        </Text>
      </Box>
    </Box>
  );
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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const posts = useSelector(selectAppState("posts"));
  const a_carregar = !posts.length;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box my={2}>
      <Card className="post">
        <CardHeader
          avatar={
            !a_carregar ? (
              <img
                className="foto-user"
                src={user.foto}
                alt="foto do usuario"
              />
            ) : (
              <Skeleton variant="circle" width={45} height={45} />
            )
          }
          action={
            !a_carregar ? (
              <IconButton onClick={handleClick}>
                <MoreVertIcon />
              </IconButton>
            ) : null
          }
          title={
            !a_carregar ? (
              <Text>{user.nome}</Text>
            ) : (
              <Skeleton variant="text" width="40%" />
            )
          }
          subheader={
            !a_carregar ? (
              <SubHeader tempo={tempo} publico={publico} />
            ) : (
              <Skeleton variant="text" width="20%" />
            )
          }
        />
        <CardContent>
          {!a_carregar ? (
            <Typography variant="body2" color="textSecondary" component="p">
              {children}
            </Typography>
          ) : (
            <Skeleton variant="rect" width="90%" height="95px" />
          )}
          {img && !a_carregar && (
            <Box mt={3} className="imagem-post">
              <img src={`/img/${img}`} alt="imagem" />
            </Box>
          )}
        </CardContent>
        <Box className="post-acoes">
          <Box ml={2} mt={2} display="flex" justifyContent="space-between">
            {reacoes > 0 && !a_carregar && (
              <Box display="flex" alignItems="center">
                <Box>
                  <img
                    src="/img/like.png"
                    alt="like"
                    style={{ filter: "hue-rotate(-45deg)" }}
                  />
                  <img
                    src="/img/love.png"
                    alt="love"
                    style={{ filter: "hue-rotate(35deg)" }}
                  />
                </Box>
                <Box ml={0.5}>
                  <Text>{reacoes}</Text>
                </Box>
              </Box>
            )}
            {comentarios > 0 && !a_carregar && (
              <Box mr={2}>
                <Text color="textSecondary" variant="subtitle2">
                  {comentarios} comentarios
                </Text>
              </Box>
            )}
          </Box>

          {!a_carregar && <Divider />}
          {!a_carregar ? (
            <ButtonGroup size="small" fullWidth>
              <Button startIcon={<ThumbUpIcon />}>Gostar</Button>

              <Button startIcon={<ModeCommentIcon />}>Comentar</Button>

              <Button startIcon={<SaveAltIcon />}>Guardar</Button>
            </ButtonGroup>
          ) : (
            <Box display="flex" height="40px" alignItems="center">
              {[1, 2, 3].map((item) => (
                <Box
                  key={item}
                  width="33.3%"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Skeleton variant="text" width="80px" />
                </Box>
              ))}
            </Box>
          )}
        </Box>
      </Card>

      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Editar</MenuItem>
        <MenuItem onClick={handleClose}>Eliminar</MenuItem>
      </Menu>
    </Box>
  );
}
