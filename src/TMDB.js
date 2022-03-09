import axios from "axios";

const on_internet = navigator.onLine;
// const on_production = true;

export const BASE_URL = on_internet
  ? "https://api.themoviedb.org/3"
  : "http://localhost:8000/api";

const api = axios.create({
  baseURL: BASE_URL,
});

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
    console.log(response);
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
};

export default TMDB;
