import axios from "axios";
import { parsearAllMoviesInfo, stringificarMovie } from "./helpers";

const on_production = process.env.NODE_ENV === "production";
// const on_production = true;

export const BASE_URL = on_production
  ? "https://socialmoviesspace.herokuapp.com"
  : "http://localhost:8000";

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
    stringificarMovie(config);

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
    parsearAllMoviesInfo(response);
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
  async getSugestoes(page = 0, search) {
    let { data } = await api.get("/usuario/sugestoes-de-amizade", {
      params: { page, search },
    });
    return data;
  },
  async addFotoNaGaleria(foto) {
    const formData = new FormData();
    formData.append("foto", foto);
    const { data } = await api.post("/usuario/galeria/add", formData);
    return data;
  },
  async getFotosDaGaleria(page = 0, id_usuario) {
    const { data } = await api.get("/usuario/galeria", {
      params: { page, id_usuario },
    });
    return data;
  },
  async eliminarFotoGaleria(id_foto) {
    const { data } = await api.post("/usuario/galeria/eliminar", { id_foto });
    return data;
  },
  async getAmigos(page = 0, search, id_usuario) {
    const { data } = await api.get("/usuario/amigos", {
      params: { page, search, id_usuario },
    });
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
  async cancelarPedidoDeAmizade(id_amigo) {
    const { data } = await api.post("/usuario/cancelar-pedido", { id_amigo });
    return data;
  },
  async enviarPedidoDeAmizade(id_amigo) {
    const { data } = await api.post("/usuario/enviar-pedido", { id_amigo });
    return data;
  },
  async getUsuarioById(id) {
    const { data } = await api.get(`/usuario/${id}`);
    return data;
  },
  async getMovieInfo(id, media_type) {
    const { data } = await api.get(`/filme/${id}`, {
      params: {
        media_type,
      },
    });
    return data;
  },
  async getMoviesFavoritos(id_movies, paginar, page, id_usuario) {
    console.log("na request favoritos", id_usuario);
    const { data } = await api.get(`/usuario/movies_favoritos`, {
      params: {
        id_movies,
        paginar: id_usuario ? true : paginar,
        page,
        id_usuario,
      },
    });

    return data;
  },
  async getMoviesGuardados(id_movies, id_usuario) {
    console.log("na request guardados", id_usuario);
    const { data } = await api.get(`/usuario/movies_guardados`, {
      params: {
        id_movies,
        id_usuario,
      },
    });

    return data;
  },
  async toggleFavoritarMovie(id, media_type, movie) {
    const { data } = await api.post(`/usuario/movies_favoritos/${id}`, {
      media_type,
      dados_movie: movie,
    });
    return data;
  },
  async toggleGuardarMovie(id, media_type, movie) {
    const { data } = await api.post(`/usuario/movies_guardados/${id}`, {
      media_type,
      dados_movie: movie,
    });
    return data;
  },
  async salvarPost(values) {
    const form = new FormData();
    for (let campo in values) {
      const valor = values[campo];
      if (valor) {
        if (["dados_movie", "movie"].includes(campo)) {
          form.append(campo, JSON.stringify(valor));
        } else if (campo === "files") {
          for (let field in valor) {
            console.log(valor[field]);
            form.append("files[]", valor[field]);
          }
        } else {
          form.append(campo, valor);
        }
      }
    }
    const { data } = await api.post(`/post`, form);

    return data;
  },
  async toggleSalvarPost(id_post) {
    const { data } = await api.post(`/posts_guardados/${id_post}`);
    return data;
  },
  async getPosts(page, target, id_usuario, id_movie) {
    const funcs = {
      async meus() {
        const { data } = await api.get(`/usuario/meus-posts`, {
          params: {
            page: Math.max(1, page),
            id_usuario,
          },
        });
        return data;
      },
      async meusGuardados() {
        const { data } = await api.get(`/posts_guardados`, {
          params: {
            page: Math.max(1, page),
            id_usuario,
          },
        });
        return data;
      },
      async todos() {
        const { data } = await api.get(`/post`, {
          params: {
            page: Math.max(1, page),
          },
        });
        return data;
      },
      async movie() {
        let media_type = window.location.href.includes("series")
          ? "tv"
          : "movie";
        const { data } = await api.get(`/post/movie/${id_movie}`, {
          params: {
            page: Math.max(1, page),
            media_type,
          },
        });
        return data;
      },
    };
    return funcs[target]();
  },
  async reagir(dados) {
    // dados (id_object,type_object,tipo_reacao)
    let { data } = await api.post("/react", dados);
    return data;
  },
};

export default API;
