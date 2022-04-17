import React from "react";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
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

import { Text, Link } from "../styles";
import { FaClock, FaGlobe, FaUsers } from "react-icons/fa";

import Skeleton from "@material-ui/lab/Skeleton";
import { mostrarXCharOntText, primeiroEUltimoNome } from "~/helpers";

export function SubHeader({ tempo, publico }) {
  return (
    <Box display="flex" alignItems="center" style={{ zoom: 0.85 }}>
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

export default function Post({ children, post, posts }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const a_carregar = !posts.data.length;
  const tem_movie_relacionado = post?.id_movie !== 0;
  const link = {
    movie: "filmes",
    tv: "series",
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box my={2}>
      <Card className="post">
        <CardActionArea>
          <CardHeader
            // style={{ marginRight: 8 }}
            avatar={
              !a_carregar ? (
                <img
                  className="foto-user"
                  src={post?.usuario.foto_perfil}
                  alt="foto do usuario"
                />
              ) : (
                <Skeleton variant="circle" width={45} height={45} />
              )
            }
            action={
              !a_carregar ? (
                <IconButton
                  onClick={handleClick}
                  style={{ position: "relative", zIndex: 2 }}
                >
                  <MoreVertIcon />
                </IconButton>
              ) : null
            }
            title={
              !a_carregar ? (
                <Box display="flex" alignItems="center">
                  <Text variant="subtitle2">
                    {primeiroEUltimoNome(post.usuario)}
                  </Text>
                  {tem_movie_relacionado && (
                    <Text variant="subtitle2">
                      &nbsp; - &nbsp;
                      <Link
                        // nostyle
                        style={{ textDecoration: "none" }}
                        to={`${link[post.media_type]}/${post.id_movie}`}
                      >
                        {mostrarXCharOntText(post.name, 20)}
                      </Link>
                    </Text>
                  )}
                </Box>
              ) : (
                <Skeleton variant="text" width="40%" />
              )
            }
            subheader={
              !a_carregar ? (
                <SubHeader
                  tempo={post.tempo}
                  publico={post.publico ? "publico" : "amigos"}
                />
              ) : (
                <Skeleton variant="text" width="20%" />
              )
            }
          />
        </CardActionArea>
        <CardActionArea style={{ paddingTop: 10, paddingBottom: 10 }}>
          <CardContent style={{ paddingTop: 0, paddingBottom: 0 }}>
            {!a_carregar ? (
              <Typography variant="body2" color="textSecondary" component="p">
                {children}
              </Typography>
            ) : (
              <Skeleton variant="rect" width="90%" height="95px" />
            )}
            {!a_carregar && post.imagens?.length && (
              <Box mt={3} className="imagem-post">
                <img src={`/img/matrix.jpg`} alt="imagem" />
              </Box>
            )}
          </CardContent>
        </CardActionArea>

        <Box className="post-acoes">
          {/* <CardActionArea style={{ paddingTop: 4, paddingBottom: 4 }}> */}
          {/* {!a_carregar && post.num_reacoes > 0 && ( */}
          <Box
            style={{ zoom: 0.8 }}
            display="flex"
            justifyContent="space-between"
          >
            {!a_carregar && post.num_reacoes > 0 && (
              <CardActionArea style={{ paddingTop: 4, paddingBottom: 4 }}>
                <Box ml={2} display="flex" alignItems="center">
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
                  <Box ml={0.8} mt={-0.35}>
                    <Text>{post.num_reacoes}</Text>
                  </Box>
                </Box>
              </CardActionArea>
            )}

            {!a_carregar && (
              <CardActionArea style={{ paddingTop: 4, paddingBottom: 4 }}>
                <Box mr={2}>
                  {post.num_comentarios > 0 ? (
                    <Text
                      align="right"
                      color="textSecondary"
                      variant="subtitle2"
                    >
                      {post.num_comentarios} comentarios
                    </Text>
                  ) : (
                    <Text
                      align="right"
                      color="textSecondary"
                      variant="subtitle2"
                    >
                      Sem comentários
                    </Text>
                  )}
                </Box>
              </CardActionArea>
            )}
          </Box>
          {/* </CardActionArea> */}

          {!a_carregar && <Divider />}
          {!a_carregar ? (
            <ButtonGroup size="small" fullWidth>
              <Button startIcon={<ThumbUpIcon />}>Gosto</Button>

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
