import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:8000/api",
});

const API = {
  async teste() {
    let { data } = await api.get("/teste");
    console.log(data);
  },
};

export default API;
