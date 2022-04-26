import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import VerERemover from "./VerERemover";
import { primeiroEUltimoNome, mostrarXCharOntText } from "~/helpers";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { SubHeader } from "../Post";
import { useDispatch, useSelector } from "react-redux";
import { selectAppState } from "~/store/App.selectors";
import usePost from "~/hooks/usePost";
import API from "~/API";
import { SET_STATE } from "~/store/App.actions";

export default function Publicacao({ post }) {
  const usuario = useSelector(selectAppState("usuario"));
  const posts_guardados = useSelector(selectAppState("meus_guardados"));
  const o_post_eh_meu = post?.id_usuario === usuario.id;
  const { irParaPerfil } = usePost();
  const Dispatch = useDispatch();
  const [removido, setRemovido] = useState(false);
  const children = (
    <>
      <SubHeader post={post} />
      <Box mt={1}>{mostrarXCharOntText(post.conteudo, 80)}</Box>
    </>
  );
  async function remover(post) {
    await API.toggleSalvarPost(post.id_post);
    let novos_posts = posts_guardados.data.filter(
      (_post) => _post.id_post !== post.id_post
    );
    console.log(post.id_post, novos_posts);
    Dispatch(
      SET_STATE("meus_guardados", { ...posts_guardados, data: novos_posts })
    );
  }
  return (
    <>
      <ListItem
        style={{
          alignItems: "flex-start",
          opacity: removido ? 0.5 : 1,
          pointerEvents: removido ? "none" : "initial",
        }}
        className="post-guardado"
      >
        <Box display="flex">
          <ListItemAvatar onClick={() => irParaPerfil(o_post_eh_meu, post)}>
            <img
              style={{
                borderRadius: "50%",
                cursor: "pointer",
                width: 50,
                height: 50,
              }}
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
                className="post-subheader"
              >
                {primeiroEUltimoNome(post.usuario)}
              </div>
            }
            secondary={children}
          />
        </Box>
      </ListItem>
      <Box
        style={{
          opacity: removido ? 0.5 : 1,
          pointerEvents: removido ? "none" : "initial",
        }}
        width="100%"
        display="flex"
        justifyContent="flex-end"
      >
        <VerERemover
          post={post}
          remover={remover}
          setRemovido={setRemovido}
          removido={removido}
        />
      </Box>
    </>
  );
}
