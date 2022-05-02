import React, { useEffect, useState } from "react";
import Post from "./Post";
import useUsuario from "~/hooks/useUsuario";
import usePost from "~/hooks/usePost";
import { useSelector } from "react-redux";
import { selectAppState } from "~/store/App.selectors";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Text } from "~/styles";

export default function Posts({ target, id_usuario, id_movie, ...props }) {
  const { getPosts } = usePost();
  const options1 = {
    todos: "posts",
    meus: "meus_posts",
    meusGuardados: "meus_guardados",
    movie: "posts_movie",
  };

  const posts = useSelector(selectAppState(options1[target]));
  // const usuario = useSelector(selectAppState("usuario"));
  const { logado } = useUsuario();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (logado) {
      getPosts({ setLoading, id_usuario, id_movie }, 1, target);
    }
  }, [window.location.href]);

  function carregarMais() {
    getPosts({ setLoading, id_usuario }, posts.current_page + 1, target);
  }

  return (
    <div {...props}>
      {posts.data.map((post, item) => (
        <Post key={post.id_post} post={post} posts={posts} target={target}>
          {post.conteudo
            .trim()
            .split("\n")
            .map((linha) => {
              return (
                <>
                  {linha} <br />
                </>
              );
            })}
        </Post>
      ))}
      {posts.data.length === 0 &&
        loading &&
        [1, 2, 3, 4].map((item) => (
          <Post key={item} posts={{ data: [] }}>
            Carregando...
          </Post>
        ))}
      {loading && posts.next_page_url && (
        <Box display="flex" my={2} justifyContent="center">
          <CircularProgress color="inherit" />
        </Box>
      )}
      {!loading && posts.next_page_url && (
        <Box mt={2} display="flex" justifyContent="center">
          <Button color="default" variant="text" onClick={carregarMais}>
            Carregar mais
          </Button>
        </Box>
      )}
      {!loading && posts.total === 0 && (
        <Box my={4} display="flex" justifyContent="center">
          <Text color="textSecondary" variant="subtitle2">
            No momento não há nenhum post a ser demonstrado
          </Text>
        </Box>
      )}
    </div>
  );
}
