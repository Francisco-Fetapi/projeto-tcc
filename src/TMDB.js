import axios from "axios";
import movies from "~/mock/series.json";
import {
  setFavoritosEGuardadosOnMovies,
  setFavoritosEGuardadosOnMovie,
} from "./hooks/useMovie";
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
  movie.profile_path = path_local_2(movie).profile_path;
  return movie;
}
function path_local_2(person) {
  let indice_rand = Math.max(1, rand(2, 8));
  let url = "ator" + indice_rand + ".jpg";
  person.profile_path = `/img/${url}`;
  return person;
}
function path_local_3(image) {
  let indice_rand = Math.max(1, rand(2, 8));
  let url = "galeria" + indice_rand + ".jpg";
  image.file_path = `/img/${url}`;
  return image;
}

function path_tmdb(movie) {
  movie.backdrop_path = images_uri + "original" + movie.backdrop_path;
  movie.poster_path = images_uri + "w300" + movie.poster_path;
  movie.profile_path = images_uri + "w300" + movie.profile_path;
  return movie;
}
function path_tmdb_2(person) {
  if (person.profile_path) {
    person.profile_path = images_uri + "w300" + person.profile_path;
  } else {
    person.profile_path = "/img/no-photo.png";
  }

  return person;
}
function path_tmdb_3(image) {
  image.file_path = images_uri + "w300" + image.file_path;
  return image;
}
api.interceptors.request.use(
  function (config) {
    config.params.api_key = "fd9aab7cf8e6e54164eb4b91420fe091";
    if (!config.url.includes("images")) {
      config.params.language = "pt-PT";
    }
    console.log(config.url);
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
    } else if (response.data.backdrops || response.data.posters) {
      let new_data = {};
      const path = on_internet ? path_tmdb_3 : path_local_3;
      new_data.backdrops = response.data.backdrops.map((image) => {
        return path(image);
      });
      new_data.posters = response.data.posters.map((image) => {
        return path(image);
      });
      response.data = new_data;
    } else {
      let new_data = {};
      if (on_internet) {
        new_data = path_tmdb(response.data);
        response.data = new_data;
      } else {
        if (window.location.href.includes("/series")) return response;
        if (window.location.href.includes("/filmes")) return response;
        new_data = path_local(response.data);
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
    const new_data = await setFavoritosEGuardadosOnMovies(data.results);
    data.results = new_data;

    console.log(data.results);

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
    const res = await setFavoritosEGuardadosOnMovie(data);
    console.log(res);
    return res;
  },
  async getTv(id_movie) {
    let { data } = await api.get(`/tv/${id_movie}`);
    const res = await setFavoritosEGuardadosOnMovie(data);

    return res;
  },
  async getCreditsMovie(id_movie) {
    let { data } = await api.get(`/movie/${id_movie}/credits`);

    return data;
  },
  async getCreditsTv(id_movie) {
    let { data } = await api.get(`/tv/${id_movie}/credits`);

    return data;
  },
  async getKeywordsMovie(id_movie) {
    let { data } = await api.get(`/movie/${id_movie}/keywords`);

    return data;
  },
  async getKeywordsTv(id_movie) {
    let { data } = await api.get(`/tv/${id_movie}/keywords`);

    return data;
  },
  async getImagesMovie(id_movie) {
    let { data } = await api.get(`/movie/${id_movie}/images`);

    return data;
  },
  async getImagesTv(id_movie) {
    let { data } = await api.get(`/tv/${id_movie}/images`);

    return data;
  },
  async getMovieRecomendations(id_movie, page = 0) {
    let { data } = await api.get(`/movie/${id_movie}/recommendations`, {
      page: Math.max(1, page),
    });

    return data;
  },
  async getMovieSimilar(id_movie, page = 0) {
    let { data } = await api.get(`/movie/${id_movie}/similar`, {
      page: Math.max(1, page),
    });

    return data;
  },
  async getTvRecomendations(id_movie, page = 0) {
    let { data } = await api.get(`/tv/${id_movie}/recommendations`, {
      page: Math.max(1, page),
    });

    return data;
  },
  async getTvSimilar(id_movie, page = 0) {
    let { data } = await api.get(`/tv/${id_movie}/similar`, {
      page: Math.max(1, page),
    });

    return data;
  },
  async getMovieBySearch(query, page = 0) {
    let { data } = await api.get(`/search/movie`, {
      params: {
        query,
        page: Math.max(1, page),
      },
    });
    const new_data = await setFavoritosEGuardadosOnMovies(data.results);
    data.results = new_data;

    return data;
  },
  async getTvBySearch(query, page = 0) {
    let { data } = await api.get(`/search/tv`, {
      params: {
        query,
        page: Math.max(1, page),
      },
    });
    const new_data = await setFavoritosEGuardadosOnMovies(data.results);
    data.results = new_data;

    return data;
  },
  async getAtores(query, page = 0) {
    let { data } = await api.get(`/search/person`, {
      params: {
        page: Math.max(1, page),
        query,
      },
    });

    return data;
  },
  async getAtor(id_person) {
    let { data } = await api.get(`/person/${id_person}`);

    return data;
  },
  async searchAll(query, page) {
    let { data } = await api.get(`/search/multi`, {
      params: {
        query,
        page: Math.max(1, page),
      },
    });

    return data;
  },
};

export default TMDB;
