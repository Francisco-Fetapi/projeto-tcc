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
import { IMG_USER_PADRAO } from "../API";
import { useSelector } from "react-redux";
import { selectAll } from "../store/App.selectors";

import Skeleton from "@material-ui/lab/Skeleton";

function ListItemWithSkeleton({ a_carregar, className, icon, label }) {
  return (
    <ListItem button>
      <ListItemAvatar>
        <Avatar className={!a_carregar ? className : "skeleton"}>
          {!a_carregar && icon}
          {a_carregar && <Skeleton variant="circle" width={40} height={40} />}
        </Avatar>
      </ListItemAvatar>
      <ListItemText>
        {a_carregar && <Skeleton variant="rect" width="100%" height={20} />}
        {!a_carregar && label}
      </ListItemText>
    </ListItem>
  );
}

export default function MenuLeft() {
  const { logado } = useUsuario();
  const { usuario } = useSelector(selectAll);
  const a_carregar = logado && !usuario.id;
  const fotoPerfil = usuario.foto_perfil;

  return (
    <>
      <div />
      <div className="menu-left">
        <List>
          <ListItem button className="item-usuario">
            <ListItemAvatar>
              <>
                {a_carregar && (
                  <Skeleton
                    variant="circle"
                    width={64}
                    height={64}
                    style={{ marginRight: 10 }}
                  />
                )}
                {!a_carregar && (
                  <img src={fotoPerfil} alt="imagem do usuario" />
                )}
              </>
            </ListItemAvatar>
            <ListItemText
              primary={a_carregar ? <Skeleton variant="text" /> : usuario.nome}
            />
          </ListItem>
          <ListItemWithSkeleton
            a_carregar={a_carregar}
            label="Series"
            className="avatar_series"
            icon={<SerieIcon />}
          />
          <ListItemWithSkeleton
            a_carregar={a_carregar}
            label="Filmes"
            className="avatar_filmes"
            icon={<FilmeIcon />}
          />
          <ListItemWithSkeleton
            a_carregar={a_carregar}
            label="Amigos"
            className="avatar_amigos"
            icon={<FaUsers />}
          />
          <ListItemWithSkeleton
            a_carregar={a_carregar}
            label="Videos"
            className="avatar_videos"
            icon={<FaTv />}
          />
          {!a_carregar && (
            <ListItem button>
              <ListItemAvatar>
                <Avatar>
                  <FaChevronDown />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Ver mais" />
            </ListItem>
          )}
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
