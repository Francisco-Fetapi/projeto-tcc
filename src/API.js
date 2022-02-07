import axios from "axios";

const on_production = process.env.NODE_ENV === "production";
// const on_production = true;

export const BASE_URL = on_production
  ? "https://socialmoviesspace.herokuapp.com"
  : "http://localhost:8000";
console.log(process.env.NODE_ENV, BASE_URL);

export const IMG_USER_PADRAO = `${BASE_URL}/img/user.jpg`;
export const IMG_CAPA_PADRAO = `${BASE_URL}/img/fundo-perfil.png`;

const api = axios.create({
  baseURL: `${BASE_URL}/api`,
  params: {
    token: null,
  },
  timeout: 99999999,
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
  async logout() {
    let { data } = await api.get("/usuario/logout");
    api.defaults.params.token = null;
    localStorage.removeItem("token");
    return data;
  },
  async getDadosUsuarioByToken(token) {
    let { data } = await api.get("/usuario/dados", { token });
    return data;
  },
  async getInfoHeader() {
    let { data } = await api.get("/usuario/info-header");
    return data;
  },
  async alterarFotoDeCapa(foto) {
    const formData = new FormData();
    formData.append("foto_de_capa", foto);
    let { data } = await api.post("/usuario/alterar/foto-de-capa", formData);
    return data;
  },
  async alterarFotoDePerfil(foto) {
    const formData = new FormData();
    formData.append("foto_de_perfil", foto);
    let { data } = await api.post("/usuario/alterar/foto-de-perfil", formData);
    return data;
  },
  async alterarBiografia(dados) {
    let { data } = await api.post("/usuario/alterar/biografia", dados);
    return data;
  },
  async alterarPerfil(dados) {
    let { data } = await api.post("/usuario/alterar/perfil", dados);
    return data;
  },
  async alterarEmail(dados) {
    let { data } = await api.post("/usuario/alterar/email", dados);
    return data;
  },
  async alterarSenha(dados) {
    let { data } = await api.post("/alterar-senha", dados);
    return data;
  },
  async getSugestoes(page = 0) {
    let { data } = await api.get("/usuario/sugestoes-de-amizade", {
      params: { page },
    });
    return data;
  },
  async addFotoNaGaleria(foto) {
    const formData = new FormData();
    formData.append("foto", foto);
    const { data } = await api.post("/usuario/galeria/add", formData);
    return data;
  },
  async getFotosDaGaleria(page = 0) {
    const { data } = await api.get("/usuario/galeria", {
      params: { page },
    });
    return data;
  },
  async eliminarFotoGaleria(id_foto) {
    const { data } = await api.post("/usuario/galeria/eliminar", { id_foto });
    return data;
  },
  async getAmigos(page = 0, termo) {
    const { data } = await api.get("/usuario/amigos", {
      params: { page, termo },
    });
    console.log(termo);
    return data;
  },
  async getPedidosDeAmizade() {
    const { data } = await api.get("/usuario/pedidos-de-amizade");
    return data;
  },
  async aceitarPedidoDeAmizade(id_amigo) {
    const { data } = await api.post("/usuario/aceitar-pedido", { id_amigo });
    return data;
  },
  async rejeitarPedidoDeAmizade(id_amigo) {
    const { data } = await api.post("/usuario/rejeitar-pedido", { id_amigo });
    return data;
  },
  async enviarPedidoDeAmizade(id_amigo) {
    const { data } = await api.post("/usuario/enviar-pedido", { id_amigo });
    return data;
  },
};

export default API;
