import React, { useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import { Text } from "~/styles";
import Favorito from "./Favorito";
import { useNavigate } from "react-router-dom";
import { selectAppState } from "~/store/App.selectors";
import { useSelector } from "react-redux";
import { makeFavoritosFixedOnScroll } from "~/helpers";
import useMovie from "~/hooks/useMovie";

export default function Favoritos() {
  const navigate = useNavigate();
  const usuario = useSelector(selectAppState("usuario"));
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const { getMoviesFavoritos, eliminarMovieDeMoviesFavoritos } = useMovie();
  useEffect(makeFavoritosFixedOnScroll, []);
  useEffect(buscarMovies, []);

  function buscarMovies() {
    getMoviesFavoritos({ setLoading, setMovies });
  }

  function removerMovie(movie, callback) {
    eliminarMovieDeMoviesFavoritos(movie, buscarMovies, callback);
  }

  return (
    <List mt={3} className="favoritos">
      <Box
        mb={2}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text variant="h6">FAVORITOS</Text>
      </Box>
      <Box>
        {movies.map((movie, key) => (
          <Favorito key={movie.id} movie={movie} removerMovie={removerMovie} />
        ))}
      </Box>
      {movies.length === 0 && (
        <Box mt="30vh" display="flex" justifyContent="center">
          <Text color="textSecondary" align="center" variant="subtitle2">
            Sem favoritos. <br /> Veja os Filmes e séries que você favoritou
            aqui.
          </Text>
        </Box>
      )}
      {movies.length >= 6 && (
        <Box mt={1} display="flex" justifyContent="center">
          <Button
            color="primary"
            onClick={() => navigate("/movies-favoritos/" + usuario.id)}
          >
            Visualizar todos
          </Button>
        </Box>
      )}
    </List>
  );
}
