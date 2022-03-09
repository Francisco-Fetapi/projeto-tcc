import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    token: "fd9aab7cf8e6e54164eb4b91420fe091",
    language: "pt-PT",
  },
});

api.interceptors.request.use(
  function (config) {},
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
  async getTrending(media_type, time) {
    //media_type -> movie/tv/all
    //time (day,week)
    let { data } = await api.get(`/trending/${media_type}/${time}`);
    return data;
  },
};

export default TMDB;
