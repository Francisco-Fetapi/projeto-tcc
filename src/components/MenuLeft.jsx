import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";

import AtividadesRecentes from "./AtividadesRecentes";

import { FaUsers } from "react-icons/fa";
import { FaTv } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import SerieIcon from "@material-ui/icons/OndemandVideo";
import FilmeIcon from "@material-ui/icons/Videocam";

import { useSelector } from "react-redux";
import { selectAll } from "../store/App.selectors";

import Skeleton from "@material-ui/lab/Skeleton";
import { primeiroEUltimoNome } from "../helpers";

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
  const { usuario } = useSelector(selectAll);
  const a_carregar = !usuario.id;
  const fotoPerfil = usuario.foto_perfil;

  return (
    <>
      <div />
      <div className="menu-left">
        <List>
          <ListItem button className={a_carregar ? "" : "item-usuario"}>
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
              primary={
                a_carregar ? (
                  <Skeleton variant="text" />
                ) : (
                  primeiroEUltimoNome(usuario)
                )
              }
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

        <AtividadesRecentes />
      </div>
    </>
  );
}
