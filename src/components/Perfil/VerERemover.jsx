import React, { useEffect } from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";

import Eye from "@material-ui/icons/RemoveRedEye";
import Delete from "@material-ui/icons/Delete";
import { useNavigate } from "react-router-dom";

export default function VerERemover({ movie, remover, setRemovido, removido }) {
  const navigate = useNavigate();

  let url_final = null;
  if (movie) {
    const link = {
      movie: "filmes",
      tv: "series",
    };
    url_final = `/${link[movie?.media_type]}/${movie.id}`;
  }

  function ver() {
    if (url_final) navigate(url_final);
  }
  function remover_() {
    if (movie) {
      if (removido === true) {
        // o 2o param eh uma funcao que sera executada
        // depois do item ter sido eliminado
        remover(movie, () => {});
      }
    }
  }
  useEffect(remover_, [removido]);
  return (
    <ButtonGroup size="small" className="ver_e_remover" variant="text">
      <Button onClick={ver} className="ver" startIcon={<Eye />}>
        Ver
      </Button>
      <Button
        className="remover"
        onClick={() => setRemovido(true)}
        startIcon={<Delete />}
      >
        Remover
      </Button>
    </ButtonGroup>
  );
}
