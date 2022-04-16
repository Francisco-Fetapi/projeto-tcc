import React, { useEffect, useState } from "react";
import { Text } from "~/styles";
import Box from "@material-ui/core/Box";
import Movie from "./Movie";
// import movies from "~/mock/series.json";

import Slider from "react-slick";
import useMovie from "~/hooks/useMovie";

export default function MarcadosParaMaisTarde() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const { getMoviesGuardados } = useMovie();
  useEffect(() => {
    getMoviesGuardados({ setLoading, setMovies });
  }, []);
  const movies_por_slide = 3;

  if (movies.length === 0) {
    return <div style={{ marginBottom: -64 }} />;
  }

  return (
    <Box className="marcados_pra_mais_tarde_box">
      <Text variant="h6">MARCADOS PARA MAIS TARDE</Text>
      <Box className="movies" mt={2}>
        <Slider {...settings}>
          {movies.map((movie, key) => {
            if (key % movies_por_slide === 0) {
              return (
                <Box
                  className="lista-movies"
                  style={{ cursor: movies.length < 6 ? "default" : "grabbing" }}
                >
                  {movies.slice(key, key + movies_por_slide).map((movie) => (
                    <Movie key={movie.id_movie} movie={movie} />
                  ))}
                </Box>
              );
            }
            return false;
          })}
          {/* <Box
            className="lista-movies"
            style={{ cursor: movies.length < 6 ? "default" : "grabbing" }}
          >
            {movies.map((movie) => (
              <Movie key={movie.id_movie} movie={movie} />
            ))}
          </Box> */}
        </Slider>
      </Box>
    </Box>
  );
}
