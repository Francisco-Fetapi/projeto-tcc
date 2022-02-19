import React from "react";
import { Movie } from "~/styles/pages/Movie";
import Box from "@material-ui/core/Box";
import InfoGerais from "./InfoGerais";

export default function Banner() {
  return (
    <Movie.Banner>
      <div className="fundo-preto"></div>
      <div className="info">
        <Box component="figure">
          <img src="/img/spider-man.jpg" alt="Homem aranha" />
        </Box>
        <Box alignSelf="flex-start">
          <InfoGerais />
        </Box>
      </div>
    </Movie.Banner>
  );
}
