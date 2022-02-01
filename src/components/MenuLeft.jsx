import React, { useEffect, useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";

import AtividadesRecentes from "./AtividadesRecentes";

import { FaClock, FaUsers } from "react-icons/fa";
import { FaTv } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import SerieIcon from "@material-ui/icons/OndemandVideo";
import FilmeIcon from "@material-ui/icons/Videocam";

import { useSelector } from "react-redux";
import { selectAll } from "../store/App.selectors";

import Skeleton from "@material-ui/lab/Skeleton";
import { primeiroEUltimoNome } from "../helpers";
import { MdGroup } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import useTheme from "@material-ui/core/styles/useTheme";

function ListItemWithSkeleton({ a_carregar, className, icon, label, rota }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <ListItem
      button
      style={
        pathname === rota && !a_carregar
          ? {
              background: theme.palette.primary.main,
              pointerEvents: "none",
              color: "white",
            }
          : {}
      }
      onClick={() => navigate(rota)}
    >
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
  const [maisItens, setMaisItens] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const rotas_de_baixo = ["/atores", "/minha-linha-do-tempo"];
    if (rotas_de_baixo.includes(pathname)) {
      setMaisItens(true);
    }
  }, []);

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
            rota="/series"
          />
          <ListItemWithSkeleton
            a_carregar={a_carregar}
            label="Filmes"
            className="avatar_filmes"
            icon={<FilmeIcon />}
            rota="/filmes"
          />
          <ListItemWithSkeleton
            a_carregar={a_carregar}
            label="Amigos"
            className="avatar_amigos"
            icon={<FaUsers />}
            rota="/amigos"
          />
          <ListItemWithSkeleton
            a_carregar={a_carregar}
            label="Videos"
            className="avatar_videos"
            icon={<FaTv />}
            rota="/videos"
          />
          {maisItens && (
            <>
              <ListItemWithSkeleton
                a_carregar={a_carregar}
                label="Atores"
                className="avatar_atores"
                icon={<MdGroup />}
                rota="/atores"
              />
              <ListItemWithSkeleton
                a_carregar={a_carregar}
                label="Linha do tempo"
                className="avatar_tempo"
                icon={<FaClock />}
                rota="/minha-linha-do-tempo"
              />
            </>
          )}
          {!a_carregar && (
            <ListItem button onClick={() => setMaisItens((state) => !state)}>
              <ListItemAvatar>
                <Avatar>
                  <FaChevronDown
                    style={{
                      transition: "all 1s ease-in-out",
                      transform: `rotate(${!maisItens ? "0" : "-180deg"})`,
                    }}
                  />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={maisItens ? "Ver menos" : "Ver mais"} />
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
