import React from "react";
import { Text } from "~/styles";
import Box from "@material-ui/core/Box";
import Movie from "./Movie";
import movies from "~/mock/series.json";

import Slider from "react-slick";

export default function MarcadosParaMaisTarde() {
  const showN = 3;
  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <Box className="marcados_pra_mais_tarde_box">
      <Text variant="h6" style={{ zoom: ".85" }}>
        MARCADOS PARA MAIS TARDE
      </Text>
      <Box className="movies" mt={2}>
        <Slider {...settings}>
          {[-1, 0, 1, 2].map((lista) => {
            const de = lista + 1;
            const ate = de + showN;

            return (
              <Box className="lista-movies" key={lista}>
                {movies.slice(de, ate).map((movie) => (
                  <Movie key={movie.nome} nome={movie.nome} img={movie.img} />
                ))}
              </Box>
            );
          })}
        </Slider>
      </Box>
    </Box>
  );
}
