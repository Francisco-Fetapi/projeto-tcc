import React from "react";
import Box from "@material-ui/core/Box";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import VerERemover from "./VerERemover";
import { primeiroEUltimoNome, mostrarXCharOntText } from "~/helpers";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { SubHeader } from "../Post";
import { useSelector } from "react-redux";
import { selectAppState } from "~/store/App.selectors";
import usePost from "~/hooks/usePost";

export default function Publicacao({ post }) {
  const usuario = useSelector(selectAppState("usuario"));
  const o_post_eh_meu = post?.id_usuario === usuario.id;
  const { irParaPerfil } = usePost();
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
          <ListItemAvatar onClick={() => irParaPerfil(o_post_eh_meu, post)}>
            <img
              style={{ borderRadius: "50%", cursor: "pointer" }}
              src={post.usuario.foto_perfil}
              alt={post.usuario.nome}
            />
          </ListItemAvatar>
          <ListItemText
            style={{ marginLeft: 10 }}
            primary={
              <div
                style={{ cursor: "pointer" }}
                onClick={() => irParaPerfil(o_post_eh_meu, post)}
              >
                {primeiroEUltimoNome(post.usuario)}
              </div>
            }
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
