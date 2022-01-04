import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";

import { Text } from "../styles";

import { FaUsers } from "react-icons/fa";
import { FaTv } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import SerieIcon from "@material-ui/icons/OndemandVideo";
import FilmeIcon from "@material-ui/icons/Videocam";
import MoreHoriz from "@material-ui/icons/MoreHoriz";

import atividades from "../mock/atividades.json";
import useUsuario from "../hooks/useUsuario";
import { BASE_URL, IMG_USER_PADRAO } from "../API";
import { useSelector } from "react-redux";
import { selectAll } from "../store/App.selectors";

export default function MenuLeft() {
  const { logado } = useUsuario();
  const { usuario } = useSelector(selectAll);
  const a_carregar = logado && !usuario.id;

  return (
    <>
      <div />
      <div className="menu-left">
        <List>
          <ListItem button className="item-usuario">
            <ListItemAvatar>
              <>
                {a_carregar && (
                  <img src={IMG_USER_PADRAO} alt="imagem do usuario" />
                )}
                {!a_carregar && (
                  <img
                    src={
                      usuario.foto_perfil === "null" || usuario.foto_perfil
                        ? IMG_USER_PADRAO
                        : `${BASE_URL}/${usuario.foto_perfil}`
                    }
                    alt="imagem do usuario"
                  />
                )}
              </>
            </ListItemAvatar>
            <ListItemText
              primary={a_carregar ? "carregando..." : usuario.nome}
            />
          </ListItem>
          <ListItem button>
            <ListItemAvatar>
              <Avatar className="avatar_series">
                <SerieIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Series" />
          </ListItem>
          <ListItem button>
            <ListItemAvatar>
              <Avatar className="avatar_filmes">
                <FilmeIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Filmes" />
          </ListItem>
          <ListItem button>
            <ListItemAvatar>
              <Avatar className="avatar_amigos">
                <FaUsers />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Amigos" />
          </ListItem>
          <ListItem button>
            <ListItemAvatar>
              <Avatar className="avatar_videos">
                <FaTv />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Videos" />
          </ListItem>
          <ListItem button>
            <ListItemAvatar>
              <Avatar>
                <FaChevronDown />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Ver mais" />
          </ListItem>
          <br />
          <Divider />
        </List>

        <List className="lista-atividades">
          <Box px={2} display="flex" alignItems="center">
            <Text variant="body1">ATIVIDADES RECENTES</Text>
            <Box flexGrow={1} />
            <IconButton>
              <MoreHoriz />
            </IconButton>
          </Box>
          {atividades.map((item, key) => (
            <ListItem button key={key}>
              <ListItemAvatar>
                <Avatar className="atvidade-icon">
                  <img src={`./img/${item.icon}`} alt={item.icon} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                className="atividade-texto"
                primary={item.texto}
                secondary={item.tempo}
              />
            </ListItem>
          ))}
          <ListItem button className="ver_mais_atividades">
            <ListItemAvatar>
              <Avatar>
                <FaChevronDown />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Ver mais" />
          </ListItem>
        </List>
      </div>
    </>
  );
}
