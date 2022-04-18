import React from "react";
import Box from "@material-ui/core/Box";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import VerERemover from "./VerERemover";
import { primeiroEUltimoNome, mostrarXCharOntText } from "~/helpers";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { SubHeader } from "../Post";

export default function Publicacao({ post }) {
  const children = (
    <>
      <SubHeader post={post} />
      <Box mt={1}>{mostrarXCharOntText(post.conteudo, 80)}</Box>
    </>
  );
  return (
    <>
      <ListItem style={{ alignItems: "flex-start" }}>
        <Box display="flex">
          <ListItemAvatar>
            <img
              style={{ borderRadius: "50%" }}
              src={post.usuario.foto_perfil}
              alt={post.usuario.foto_perfil}
            />
          </ListItemAvatar>
          <ListItemText
            style={{ marginLeft: 10 }}
            primary={primeiroEUltimoNome(post.usuario)}
            secondary={children}
          />
        </Box>
      </ListItem>
      <Box width="100%" display="flex" justifyContent="flex-end">
        <VerERemover
          post={post}
          remover={null}
          setRemovido={() => null}
          removido={false}
        />
      </Box>
    </>
  );
}
