import React, { useEffect } from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";

import Eye from "@material-ui/icons/RemoveRedEye";
import Delete from "@material-ui/icons/Delete";
import { useNavigate } from "react-router-dom";

export default function VerERemover({
  post,
  movie,
  remover,
  setRemovido,
  removido,
}) {
  const navigate = useNavigate();
  const perfil_alheio = window.location.href.includes("usuario");

  let url_final = null;
  if (movie) {
    const link = {
      movie: "filmes",
      tv: "series",
    };
    url_final = `/${link[movie?.media_type]}/${movie.id}`;
  } else if (post) {
    url_final = `/posts/${post.id}`;
  }

  function ver() {
    if (url_final) navigate(url_final);
  }
  function remover_() {
    if (movie || post) {
      if (removido) {
        // o 2o param eh uma funcao que sera executada
        // depois do item ter sido eliminado
        if (movie) remover(movie, () => {});
        if (post) remover(post, () => {});
      }
    }
  }
  useEffect(remover_, [removido]);
  return (
    <ButtonGroup
      size="small"
      className="ver_e_remover"
      variant="text"
      style={{ zoom: 0.85 }}
    >
      <Button onClick={ver} className="ver" startIcon={<Eye />}>
        Ver
      </Button>
      {!perfil_alheio && (
        <Button
          className="remover"
          onClick={() => setRemovido(true)}
          startIcon={<Delete />}
        >
          Remover
        </Button>
      )}
    </ButtonGroup>
  );
}
