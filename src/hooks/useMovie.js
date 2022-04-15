import API from "~/API";

export default function useMovie() {
  return {
    async getMovieInfo({ setInfo, setLoading }, id, media_type) {
      setLoading(true);
      let res = await API.getMovieInfo(id, media_type);
      setInfo(res.data);
      setLoading(false);
    },
    async toggleFavoritarMovie({ setInfo, setLoading }, id, media_type) {
      setLoading(true);
      let res = await API.toggleFavoritarMovie(id, media_type);
      setInfo((info) => ({ ...info, ...res.data }));
      setLoading(false);
    },
    async toggleGuardarMovie({ setInfo, setLoading }, id, media_type) {
      setLoading(true);
      let res = await API.toggleGuardarMovie(id, media_type);
      setInfo((info) => ({ ...info, ...res.data }));
      setLoading(false);
    },
  };
}

export const setFavoritosEGuardadosOnMovie = async (movies) => {
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
