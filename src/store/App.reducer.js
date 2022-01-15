const initialState = {
  usuario: {},
  series: [],
  filmes: [],
  posts: [],
  dark: true,
};

export default function AppReducer(state = initialState, { payload, type }) {
  switch (type) {
    case "SET_STATE":
      return { ...state, [payload.nome]: payload.value };
    case "SET_STATE_USER":
      return {
        ...state,
        usuario: { ...state.usuario, [payload.nome]: payload.value },
      };
    default:
      return state;
  }
}
