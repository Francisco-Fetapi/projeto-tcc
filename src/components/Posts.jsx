import React from "react";
import Post from "./Post";

export default function Posts() {
  const user = {
    nome: "Nome do usuario",
    foto: "user.jpg",
  };
  return (
    <div>
      <Post
        user={user}
        reacoes={3}
        comentarios={12}
        tempo="ha 1 hora"
        publico="amigos"
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
        veritatis excepturi rerum sapiente nostrum, odit maiores delectus,
        molestias corporis dolorem sed temporibus aut nam explicabo quisquam
        minus, nemo reprehenderit aliquid.
      </Post>
      <Post
        user={user}
        reacoes={3}
        tempo="ha 1 hora"
        publico="publico"
        img="matrix.jpg"
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
        veritatis excepturi rerum sapiente nostrum, odit maiores delectus,
        molestias corporis dolorem sed temporibus aut nam explicabo quisquam
        minus, nemo reprehenderit aliquid.
      </Post>
      <Post
        user={user}
        reacoes={29}
        tempo="ha 11 horas"
        publico="amigos"
        img="spider-man.jpg"
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
        veritatis excepturi rerum sapiente nostrum, odit maiores delectus,
        molestias corporis dolorem sed temporibus aut nam explicabo quisquam
        minus, nemo reprehenderit aliquid.
      </Post>
      <Post
        user={user}
        reacoes={29}
        tempo="ha 2 horas"
        publico="publico"
        comentarios={23}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
        veritatis excepturi rerum sapiente nostrum, odit maiores delectus,
        molestias corporis dolorem sed temporibus aut nam explicabo quisquam
        minus, nemo reprehenderit aliquid.
      </Post>
    </div>
  );
}
