import React from "react";
import { Text } from "../../styles";
import { Perfil } from "../../styles/pages/Perfil";
import Box from "@material-ui/core/Box";
import { FaCamera } from "react-icons/fa";
import Button from "@material-ui/core/Button";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import Home from "@material-ui/icons/Home";
import ThumbDown from "@material-ui/icons/ThumbDown";
import ThumbUp from "@material-ui/icons/ThumbUp";

import { FaPencilAlt, FaPlus } from "react-icons/fa";

export default function InfoUsuario() {
  return (
    <Perfil.Info>
      <Box className="foto-nome-bio">
        <Box component="figure">
          <img src="./img/user.jpg" alt="imagem do usuario" />
          <Box component="figcaption">
            <div>
              <FaCamera />
            </div>
          </Box>
        </Box>
        <Box mt={2} display="flex" flexDirection="column">
          <Text variant="h6" style={{ color: "#393939" }}>
            Nome do Usuario
          </Text>
          <Box mt={1.3}>
            <Text color="textSecondary" variant="subtitle2">
              Aqui irá aparecer uma mini biografia do usuario, palavras ou
              frases que o descrevam.Aqui irá aparecer uma mini biografia do
              usuario, palavras ou frases que o descrevam.
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
            <ListItemText>Vive no Lobito, Benguela, Angola</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ThumbUp className="thumbUp" />
            </ListItemIcon>
            <ListItemText>Romance é o seu género favorito</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ThumbDown className="thumbDown" />
            </ListItemIcon>
            <ListItemText>Terror é o género de que menos gostas</ListItemText>
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
  );
}
