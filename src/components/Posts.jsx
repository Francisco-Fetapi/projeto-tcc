import React, { useEffect } from "react";
import Post from "./Post";
import useUsuario from "~/hooks/useUsuario";
import usePost from "~/hooks/usePost";
import { useSelector } from "react-redux";
import { selectAppState } from "~/store/App.selectors";
import Box from "@material-ui/core/Box";

export default function Posts(props) {
  const { getPosts } = usePost();
  const posts = useSelector(selectAppState("posts"));
  const { logado } = useUsuario();
  useEffect(() => {
    if (logado) {
      getPosts(1);
    }
  }, []);

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
        [1, 2, 3, 4].map((item) => (
          <Post key={item} posts={{ data: [] }}>
            Carregando...
          </Post>
        ))}
    </div>
  );
}
