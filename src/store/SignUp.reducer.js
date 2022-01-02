const initialState = {
  nome: "",
  email: "",
  senha: "",
  slug: "",
  data_nascimento: "",
  genero: "",
  pais: "",
  estado: "",
  cidade: "",
  genero_favorito: "",
  genero_favorito_porque: "",
  genero_n_favorito: "",
  assisto_para: "",
  mini_biografia: "",
  foto_perfil: "",
};

export default function AppReducer(state = initialState, { payload, type }) {
  switch (type) {
    case "SET_STATE":
      return { ...state, [payload.nome]: payload.value };
    default:
      return state;
  }
}