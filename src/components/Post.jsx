import React, { useEffect, useState } from "react";
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
import Slider from "react-slick";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import { Text, Link } from "../styles";
import { FaClock, FaGlobe, FaUsers } from "react-icons/fa";

import Skeleton from "@material-ui/lab/Skeleton";
import { mostrarXCharOntText, primeiroEUltimoNome } from "~/helpers";
import { useSelector } from "react-redux";
import { selectAppState } from "~/store/App.selectors";
import usePost from "~/hooks/usePost";
import reacoes from "~/mock/reacoes.json";

export function SubHeader({ post }) {
  const { tempo, publico } = post;
  return (
    <Box display="flex" alignItems="center" style={{ zoom: 0.85 }}>
      <Box display="flex" alignItems="center">
        <FaClock />
        <Text variant="subtitle2" style={{ paddingLeft: 5 }}>
          {tempo}
        </Text>
      </Box>
      <Box ml={3} display="flex" alignItems="center">
        {publico ? <FaGlobe /> : <FaUsers />}
        <Text variant="subtitle2" style={{ paddingLeft: 5 }}>
          {publico ? "público" : "amigos"}
        </Text>
      </Box>
    </Box>
  );
}

function CardActionAreaCustom({ children, o_post_eh_meu, ...props }) {
  if (o_post_eh_meu) {
    return <Box style={{ userSelect: "none" }}>{children}</Box>;
  } else {
    return <CardActionArea {...props}>{children}</CardActionArea>;
  }
}

export default function Post({ children, post, target, posts }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const usuario = useSelector(selectAppState("usuario"));
  const a_carregar = !posts.data.length;
  const tem_movie_relacionado =
    post?.id_movie !== 0 && (post?.name || post?.title);
  const { irParaPerfil, setPostEmGuardados, reagir } = usePost();
  const [guardei, setGuardei] = useState(post?.guardei);
  const [loading, setLoading] = useState(false);
  const [grupo_reacoes, setReacoes] = useState([]);
  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  const link = {
    movie: "filmes",
    tv: "series",
  };
  const o_post_eh_meu = post?.id_usuario === usuario.id;
  const texto_reacao = {
    like: "gosto",
    love: "adoro",
    triste: "triste",
    wow: "surpreso",
    riso: "riso",
    ira: "ira",
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick2 = (event) => {
    if (event.target) {
      setAnchorEl2(event.target);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  function guardarPost() {
    setPostEmGuardados({ setLoading, post, setGuardei });
  }
  useEffect(() => {
    if (post) {
      setGuardei(post.guardei);
    }
  }, [post]);

  useEffect(() => {
    if (post?.grupo_reacoes) {
      const reacoes2 = {
        ...post.grupo_reacoes,
        length: Object.keys(post.grupo_reacoes).length,
      };
      const reacoes_array = [];
      for (let campo in reacoes2) {
        if (campo !== "length") {
          reacoes_array.push({
            size: reacoes2[campo],
            type: campo,
          });
        }
      }
      setReacoes(reacoes_array);
    }
  }, [post]);

  function showMenuReacoes(event) {
    handleClick2(event);
  }
  function reagir_(tipo_reacao) {
    handleClose2();
    const dados = {
      tipo_reacao,
      type_object: 1,
      id_object: post.id_post,
    };
    console.log("reagindo...");
    reagir({ setLoading, target }, dados);
  }
  const reagi_com = post?.reagi ? (
    <img
      src={`/img/${reacoes[post?.reagi_com]}`}
      alt="reacao"
      width={20}
      height={20}
    />
  ) : (
    "Gosto"
  );

  return (
    <Box my={2}>
      <Card className="post">
        <CardActionAreaCustom o_post_eh_meu={o_post_eh_meu}>
          <CardHeader
            // style={{ marginRight: 8 }}
            avatar={
              !a_carregar ? (
                <img
                  className="foto-user"
                  src={post?.usuario?.foto_perfil}
                  alt="foto do usuario"
                  onClick={() => irParaPerfil(o_post_eh_meu, post)}
                  style={o_post_eh_meu ? { cursor: "pointer" } : null}
                />
              ) : (
                <Skeleton variant="circle" width={45} height={45} />
              )
            }
            action={
              !a_carregar && o_post_eh_meu ? (
                <IconButton
                  onClick={handleClick}
                  style={{ position: "relative" }}
                >
                  <MoreVertIcon />
                </IconButton>
              ) : null
            }
            title={
              !a_carregar ? (
                <Box display="flex" alignItems="center">
                  <Text
                    variant="subtitle2"
                    onClick={() => irParaPerfil(o_post_eh_meu, post)}
                    style={o_post_eh_meu ? { cursor: "pointer" } : null}
                  >
                    {primeiroEUltimoNome(post?.usuario)}
                  </Text>
                  {tem_movie_relacionado && (
                    <Text variant="subtitle2">
                      &nbsp; - &nbsp;
                      <Link
                        // nostyle
                        style={{ textDecoration: "none" }}
                        to={`/${link[post?.media_type]}/${post.id_movie}`}
                      >
                        {mostrarXCharOntText(post?.name || post?.title, 20)}
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
                <SubHeader post={post} />
              ) : (
                <Skeleton variant="text" width="20%" />
              )
            }
          />
        </CardActionAreaCustom>
        <CardActionArea style={{ paddingTop: 10, paddingBottom: 10 }}>
          <CardContent style={{ paddingTop: 0, paddingBottom: 0 }}>
            {!a_carregar ? (
              <Typography variant="body2" color="textSecondary" component="p">
                {children}
              </Typography>
            ) : (
              <Skeleton variant="rect" width="90%" height="95px" />
            )}
          </CardContent>
        </CardActionArea>

        {!a_carregar && post.fotos?.length > 0 && (
          <>
            <Box mt={-2} maxWidth="650px" maxHeight="550px">
              <Box mt={3} className="imagem-post">
                <Slider {...settings}>
                  {post.fotos.map((foto) => (
                    <img
                      src={foto.foto_resized}
                      alt="Foto do post"
                      key={foto.id}
                    />
                  ))}
                </Slider>
              </Box>
            </Box>
            {post.fotos.length > 1 && <Box mt={3}></Box>}
          </>
        )}

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
                    {grupo_reacoes.slice(0, 3).map((grupo) => {
                      let img_reacao = `/img/${reacoes[grupo.type]}`;
                      return (
                        <img
                          src={img_reacao}
                          alt={reacoes[grupo.type].replace(".png", "")}
                          style={{ filter: "hue-rotate(-45deg)" }}
                          width="20px"
                          height="20px"
                          key={grupo.type}
                        />
                      );
                    })}
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
            <ButtonGroup
              size="small"
              fullWidth
              style={loading ? { opacity: 0.8, pointerEvents: "none" } : null}
            >
              <Button
                onClick={() => reagir_(post?.reagi ? post?.reagi_com : 1)}
                onContextMenu={showMenuReacoes}
                onTouchEnd={showMenuReacoes}
                color={post?.reagi ? "primary" : null}
                startIcon={post?.reagi ? null : <ThumbUpIcon />}
              >
                {reagi_com}
              </Button>

              <Button startIcon={<ModeCommentIcon />}>Comentar</Button>

              <Button
                startIcon={<SaveAltIcon />}
                onClick={guardarPost}
                color={guardei ? "primary" : null}
              >
                {guardei ? "Guardei" : "Guardar"}
              </Button>
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
      <Menu
        anchorEl={anchorEl2}
        keepMounted
        open={Boolean(anchorEl2)}
        onClose={handleClose2}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        className="not-zoom-out"
        style={{
          top: "-15%",
        }}
      >
        <Box display="flex">
          {Object.keys(reacoes).map((key) => (
            <Box
              mx={1}
              display="flex"
              flexDirection="column"
              alignItems="center"
              key={key}
              px={0.5}
              className="btn-reacao"
              width={30}
              onClick={(e) => reagir_(key, e)}
            >
              <img src={`/img/${reacoes[key]}`} alt="reacao" />
              <Box mt={0.5} style={{ zoom: 0.8, textAlign: "center" }}>
                <Text
                  color={key == post?.reagi_com ? "primary" : "textSecondary"}
                >
                  {texto_reacao[reacoes[key].replace(".png", "")]}
                </Text>
              </Box>
            </Box>
          ))}
        </Box>
      </Menu>
    </Box>
  );
}
