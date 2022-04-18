import React, { useEffect, useState } from "react";
import Post from "./Post";
import useUsuario from "~/hooks/useUsuario";
import usePost from "~/hooks/usePost";
import { useSelector } from "react-redux";
import { selectAppState } from "~/store/App.selectors";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Posts({ target, ...props }) {
  const { getPosts } = usePost();
  const options1 = {
    todos: "posts",
    meus: "meus_posts",
    meusGuardados: "meus_guardados",
  };
  const posts = useSelector(selectAppState(options1[target]));
  const { logado } = useUsuario();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (logado) {
      getPosts({ setLoading }, 1, target);
    }
  }, []);

  function carregarMais() {
    getPosts({ setLoading }, posts.current_page + 1, target);
  }

  return (
    <div {...props}>
      {posts.data.map((post, item) => (
        <Post key={post.id} post={post} posts={posts}>
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
    </div>
  );
}
