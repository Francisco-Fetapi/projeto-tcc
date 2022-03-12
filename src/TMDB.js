import axios from "axios";
import movies from "~/mock/series.json";
const on_internet = navigator.onLine;
// const on_production = true;

export const BASE_URL = on_internet
  ? "https://api.themoviedb.org/3"
  : "http://localhost:8000/api";

const api = axios.create({
  baseURL: BASE_URL,
});
const images_uri = "http://image.tmdb.org/t/p/";
function rand(min, max) {
  return Math.floor(Math.random() * max + 1) - min;
}
function path_local(movie) {
  let indice_rand = rand(1, movies.length);
  let url = movies[indice_rand]["img"];
  movie.backdrop_path = `/img/${url}`;
  movie.poster_path = `/img/${url}`;
  return movie;
}

function path_tmdb(movie) {
  movie.backdrop_path = images_uri + "original" + movie.backdrop_path;
  movie.poster_path = images_uri + "w300" + movie.poster_path;
  return movie;
}
api.interceptors.request.use(
  function (config) {
    config.params.api_key = "fd9aab7cf8e6e54164eb4b91420fe091";
    config.params.language = "pt-PT";
    return config;
  },
  function (error) {
    console.log(error);
  }
);
api.interceptors.response.use(
  function (response) {
    const new_data = response.data.results.map((movie) => {
      if (on_internet) {
        return path_tmdb(movie);
      }
      return path_local(movie);
    });
    response.data.results = new_data;
    console.log(response.data);
    return response;
  },
  function (error) {
    console.log(error);
  }
);

const TMDB = {
  async getTrending(media_type, time = "day", page = 1) {
    //media_type -> movie/tv/all
    //time (day,week)
    let { data } = await api.get(`/trending/${media_type}/${time}`, {
      params: {
        page: Math.max(1, page),
      },
    });

    return data;
  },
  async getDiscover(media_type, page = 1) {
    //media_type -> movie/tv/all
    let { data } = await api.get(`/discover/${media_type}`, {
      params: {
        page: Math.max(1, page),
      },
    });

    return data;
  },
};

export default TMDB;
