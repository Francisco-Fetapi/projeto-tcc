import React, { useContext } from "react";
import { Movie } from "~/styles/pages/Movie";
import Box from "@material-ui/core/Box";
import InfoGerais from "./InfoGerais";

import { MovieContext } from "./MainContent";

export default function Banner() {
  const { movie } = useContext(MovieContext);
  const on_internet = navigator.onLine;
  return (
    <Movie.Banner
      imagem={on_internet ? movie.backdrop_path : "/img/" + movie.backdrop_path}
    >
      <div className="fundo-preto"></div>
      <div className="info">
        <Box component="figure">
          <img
            src={on_internet ? movie.poster_path : "/img/" + movie.poster_path}
            alt={movie.title || movie.name}
          />
        </Box>
        <Box alignSelf="flex-start">
          <InfoGerais />
        </Box>
      </div>
    </Movie.Banner>
  );
}
