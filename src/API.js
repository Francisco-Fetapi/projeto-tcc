import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api",
});

const API = {
  async enviarDadosCriarConta(values) {
    let { data } = await api.post("/signup/validar/form1", values);
    return data;
  },
};

export default API;
