import React from "react";
import { Text } from "../../styles";
import { Perfil } from "../../styles/pages/Perfil";
import Box from "@material-ui/core/Box";
import { FaCamera } from "react-icons/fa";
import Button from "@material-ui/core/Button";

import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import Home from "@material-ui/icons/Home";
import ThumbDown from "@material-ui/icons/ThumbDown";
import ThumbUp from "@material-ui/icons/ThumbUp";

import { FaPencilAlt, FaPlus } from "react-icons/fa";
import useUsuario from "../../hooks/useUsuario";
import { IMG_USER_PADRAO, BASE_URL } from "../../API";

export default function InfoUsuario() {
  const { logado, usuario } = useUsuario();
  const a_carregar = logado && !usuario.id;

  return (
    <Box mb={5}>
      <Perfil.Info>
        <Box className="foto-nome-bio">
          <Box component="figure">
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
            <Box component="figcaption">
              <div>
                <FaCamera />
              </div>
            </Box>
          </Box>
          <Box mt={2} display="flex" flexDirection="column">
            <Text variant="h6" style={{ color: "#393939" }}>
              {a_carregar ? "Carregando..." : usuario.nome}
            </Text>
            <Box mt={1.3}>
              <Text color="textSecondary" variant="subtitle2">
                {a_carregar ? "Carregando..." : usuario.mini_biografia}
              </Text>
            </Box>
            <div style={{ flexGrow: 1 }} />
            <Box mt={3} display="flex" justifyContent="center">
              <Button
                color="primary"
                startIcon={<FaPencilAlt />}
                variant="outlined"
              >
                Editar biografia
              </Button>
            </Box>
          </Box>
        </Box>
        <Box className="mais_info_perfil">
          <List>
            <ListItem>
              <ListItemIcon>
                <Home className="home" />
              </ListItemIcon>
              <ListItemText>
                {a_carregar ? (
                  "Carregando..."
                ) : (
                  <span>
                    Vive em <b>{usuario.cidade}</b>, <b>{usuario.estado}</b> ,
                    <b>{usuario.pais}</b>
                  </span>
                )}
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ThumbUp className="thumbUp" />
              </ListItemIcon>
              <ListItemText>
                {a_carregar ? (
                  "Carregando..."
                ) : (
                  <span>
                    <b>{usuario.genero_favorito}</b> é o seu género favorito
                  </span>
                )}
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ThumbDown className="thumbDown" />
              </ListItemIcon>
              <ListItemText>
                {a_carregar ? (
                  "Carregando..."
                ) : (
                  <span>
                    <b>{usuario.genero_n_favorito}</b> é o género de que menos
                    gostas
                  </span>
                )}
              </ListItemText>
            </ListItem>
          </List>
          <Box mt={3} display="flex" justifyContent="center">
            <Button
              color="primary"
              startIcon={<FaPencilAlt />}
              variant="outlined"
              style={{ marginRight: 10 }}
            >
              Editar perfil
            </Button>
            <Button color="primary" startIcon={<FaPlus />} variant="outlined">
              Ver mais
            </Button>
          </Box>
        </Box>
      </Perfil.Info>
      <Divider />
    </Box>
  );
}
