import axios from "axios";

export const BASE_URL = "http://localhost:8000";
export const IMG_USER_PADRAO = `${BASE_URL}/img/user.jpg`;
export const IMG_CAPA_PADRAO = `${BASE_URL}/img/user.jpg`;

const api = axios.create({
  baseURL: `${BASE_URL}/api`,
  params: {
    token: null,
  },
});

api.interceptors.request.use(
  function (config) {
    config.params.token = localStorage.getItem("token") || null;
    return config;
  },
  function (error) {
    console.log(error);
  }
);
api.interceptors.response.use(
  function (response) {
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
    }
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log(error);
  }
);

const API = {
  async enviarDadosCriarConta(values) {
    let { data } = await api.post("/signup/validar/form1", values);
    return data;
  },
  async validarCodigo(values) {
    let { data } = await api.post("/signup/validar/codigo", values);
    return data;
  },
  async reenviarCodigo(email) {
    let { data } = await api.post("/signup/codigo/refresh", { email });
    return data;
  },
  async criarConta(values) {
    let { data } = await api.post("/signup/concluir", values);
    return data;
  },
  async cadastrarUsuario(values) {
    const form = new FormData();
    for (let campo in values) {
      form.append(campo, values[campo]);
    }
    let { data } = await api.post("/registrar", form);
    return data;
  },
  async logar(values) {
    let { data } = await api.post("/login", values);
    return data;
  },
  logout() {
    api.defaults.params.token = null;
    localStorage.clear();
  },
  async getDadosUsuarioByToken(token) {
    let { data } = await api.get("/usuario/dados", { token });
    return data;
  },
};

export default API;
