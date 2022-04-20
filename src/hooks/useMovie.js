import API from "~/API";
import { normalizarMediaType } from "~/helpers";
import { useDispatch } from "react-redux";
import { SET_STATE } from "~/store/App.actions";
import { useParams } from "react-router-dom";

export default function useMovie() {
  const Dispatch = useDispatch();
  const params = useParams();
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
    async eliminarMovieDeMoviesFavoritos(movie, callback1, callback2) {
      await API.toggleFavoritarMovie(movie.id, movie.media_type, movie);
      callback1();
      callback2();
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
      let id = undefined;
      let esta_no_perfil_alheio = window.location.href.includes("usuario");
      if (esta_no_perfil_alheio) {
        id = params.id;
      }
      setLoading(true);
      let res = await API.getMoviesGuardados(null, id);
      setMovies(res);

      setLoading(false);
    },
    async getMoviesFavoritos(
      { setLoading, setMovies },
      id_movies,
      paginar,
      page
    ) {
      setLoading(true);
      let id = undefined;
      let esta_no_perfil_alheio = window.location.href.includes("usuario");
      let esta_em_movies_favoritos =
        window.location.href.includes("movies-favoritos");
      if (esta_no_perfil_alheio || esta_em_movies_favoritos) {
        id = params.id || params.id_usuario;
      }
      let res = await API.getMoviesFavoritos(id_movies, paginar, page, id);
      if (page > 1) {
        setMovies((prev) => {
          return { ...res, data: [...prev.data, ...res.data] };
        });
      } else {
        // if (esta_no_perfil_alheio) {
        //   setMovies(res.data);
        // } else {

        // }
        setMovies(res);
      }
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
