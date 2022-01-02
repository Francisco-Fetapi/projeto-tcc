import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api",
});

const API = {
  async teste() {
    let { data } = await api.get("/teste");
    console.log(data);
    return data;
  },
};

export default API;
