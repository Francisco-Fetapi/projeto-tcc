import API from "~/API";
import { normalizarMediaType } from "~/helpers";
import { useDispatch } from "react-redux";
import { SET_STATE } from "~/store/App.actions";

export default function useMovie() {
  const Dispatch = useDispatch();
  return {
    async getMovieInfo({ setInfo, setLoading }, id, media_type) {
      setLoading(true);
      let res = await API.getMovieInfo(id, media_type);
      setInfo(res.data);
      setLoading(false);
    },
    async toggleFavoritarMovie({ setInfo, setLoading, movie }, id, media_type) {
      setLoading(true);
      let res = await API.toggleFavoritarMovie(id, media_type, movie);
      setInfo((info) => ({ ...info, ...res.data }));
      setLoading(false);
    },
    async toggleGuardarMovie({ setInfo, setLoading, movie }, id, media_type) {
      setLoading(true);
      let res = await API.toggleGuardarMovie(id, media_type, movie);
      setInfo((info) => ({ ...info, ...res.data }));
      setLoading(false);
    },
    async atualizarInfo(movies, alvo) {
      const movies_ = await setFavoritosEGuardadosOnMovies(movies.results);
      Dispatch(
        SET_STATE(alvo, {
          ...movies,
          results: [...movies_],
        })
      );
    },
    async getMoviesGuardados({ setLoading, setMovies }) {
      setLoading(true);
      let res = await API.getMoviesGuardados();
      setMovies(res);

      setLoading(false);
    },
    async getMoviesFavoritos({ setLoading, setMovies }) {
      setLoading(true);
      let res = await API.getMoviesFavoritos();
      setMovies(res);

      setLoading(false);
    },
  };
}

export const setFavoritosEGuardadosOnMovies = async (movies) => {
  const id_movies = movies.map((movie) => movie.id);
  let id_favoritados = await API.getMoviesFavoritos(id_movies);
  let id_guardados = await API.getMoviesGuardados(id_movies);
  id_favoritados = id_favoritados.data.map((movie2) => movie2.id_movie);
  id_guardados = id_guardados.data.map((movie2) => movie2.id_movie);

  let new_data = movies.map((movie) => {
    let favoritei = id_favoritados.includes(movie.id);
    let guardei = id_guardados.includes(movie.id);
    return { ...movie, favoritei, guardei };
  });
  return new_data;
};

export const setFavoritosEGuardadosOnMovie = async (movie) => {
  normalizarMediaType(movie);
  let res = await API.getMovieInfo(movie.id, movie.media_type);
  return { ...movie, ...res.data };
};
