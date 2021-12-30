import React from "react";
import { Text } from "../../styles";
import Box from "@material-ui/core/Box";
import Movie from "./Movie";
import movies from "../../mock/series.json";

import Slider from "react-slick";

export default function MarcadosParaMaisTarde() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Box>
      <Text variant="h6">MARCADOS PARA MAIS TARDE</Text>
      <Box className="movies" mt={2}>
        <Slider {...settings}>
          <Box className="lista-movies">
            {movies.slice(0, 3).map((movie) => (
              <Movie nome={movie.nome} img={movie.img} />
            ))}
          </Box>
          <Box className="lista-movies">
            {movies.slice(2, 5).map((movie) => (
              <Movie nome={movie.nome} img={movie.img} />
            ))}
          </Box>
          <Box className="lista-movies">
            {movies.slice(1, 4).map((movie) => (
              <Movie nome={movie.nome} img={movie.img} />
            ))}
          </Box>
          <Box className="lista-movies">
            {movies.slice(2, 5).map((movie) => (
              <Movie nome={movie.nome} img={movie.img} />
            ))}
          </Box>
        </Slider>
      </Box>
    </Box>
  );
}
