import React from "react";
import { IMG_USER_PADRAO } from "../API";
import Post from "./Post";

export default function Posts() {
  const user = {
    nome: "Nome do usuario",
    foto: IMG_USER_PADRAO,
  };

  return (
    <div>
      {[1, 2, 0, 3, 4].map((item) => (
        <Post
          key={item}
          user={user}
          reacoes={item * 2}
          comentarios={item + item * 3}
          tempo={`há ${item + 1} hora(s)`}
          publico={item % 2 ? "publico" : "amigos"}
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
