import axios from "axios";
import movies from "~/mock/series.json";
const on_internet = navigator.onLine;
// const on_production = true;

export const BASE_URL = on_internet
  ? "https://api.themoviedb.org/3"
  : "http://localhost:8000/api";

console.log(BASE_URL);
const api = axios.create({
  baseURL: BASE_URL,
  params: {
    language: null,
    api_key: null,
  },
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
function path_local_2(person) {
  let indice_rand = rand(1, 8);
  let url = "ator" + indice_rand + ".jpg";
  person.profile_path = `/img/${url}`;
  return person;
}

function path_tmdb(movie) {
  movie.backdrop_path = images_uri + "original" + movie.backdrop_path;
  movie.poster_path = images_uri + "w300" + movie.poster_path;
  return movie;
}
function path_tmdb_2(person) {
  person.profile_path = images_uri + "original" + person.profile_path;
  return person;
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
    if (response.data.results) {
      const new_data = response.data.results.map((movie) => {
        if (on_internet) {
          return path_tmdb(movie);
        }
        return path_local(movie);
      });
      response.data.results = new_data;
    } else if (response.data.cast) {
      let new_data = {};
      new_data.cast = response.data.cast.filter((person) => {
        return person.known_for_department === "Acting";
      });
      new_data.crew = response.data.crew.filter((person) => {
        return ["Production", "Writing", "Directing"].includes(
          person.known_for_department
        );
      });

      new_data.cast = new_data.cast.map((movie) => {
        if (on_internet) {
          return path_tmdb_2(movie);
        }
        return path_local_2(movie);
      });
      new_data.crew = new_data.crew.map((movie) => {
        if (on_internet) {
          return path_tmdb_2(movie);
        }
        return path_local_2(movie);
      });
      response.data = new_data;
    } else {
      let new_data = {};
      if (on_internet) {
        new_data = path_tmdb(response.data);
        response.data = new_data;
      }
    }
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
  async getMovie(id_movie) {
    let { data } = await api.get(`/movie/${id_movie}`);
    return data;
  },
  async getTv(id_movie) {
    let { data } = await api.get(`/tv/${id_movie}`);

    return data;
  },
  async getCreditsMovie(id_movie) {
    let { data } = await api.get(`/movie/${id_movie}/credits`);

    return data;
  },
  async getCreditsTv(id_movie) {
    let { data } = await api.get(`/tv/${id_movie}/credits`);

    return data;
  },
};

export default TMDB;
