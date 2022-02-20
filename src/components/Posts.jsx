import React, { useEffect } from "react";
import { IMG_USER_PADRAO } from "~/API";
import Post from "./Post";
import usePosts from "../hooks/usePosts";
import useUsuario from "~/hooks/useUsuario";

export default function Posts(props) {
  const { carregar } = usePosts();
  const { logado } = useUsuario();
  useEffect(() => {
    if (logado) {
      carregar();
    }
  }, []);
  const user = {
    nome: "Nome do usuario",
    foto: IMG_USER_PADRAO,
  };
  const movie = ["invasion", "TWD", "spider-man", "matrix", "Lucifer"];

  return (
    <div {...props}>
      {[1, 2, 0, 3, 4].map((item) => (
        <Post
          key={item}
          user={user}
          reacoes={item * 2}
          comentarios={item + item * 3}
          tempo={`há ${item + 1} hora(s)`}
          publico={item % 2 ? "publico" : "amigos"}
          img={item % 2 ? movie[item] + ".jpg" : null}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
          veritatis excepturi rerum sapiente nostrum, odit maiores delectus,
          molestias corporis dolorem sed temporibus aut nam explicabo quisquam
          minus, nemo reprehenderit aliquid.
        </Post>
      ))}
    </div>
  );
}
