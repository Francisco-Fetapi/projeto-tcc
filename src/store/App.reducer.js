const initialState = {
  usuario: {},
  discover_series: {
    page: 1,
    total_results: 1,
    total_pages: 0,
    results: [],
  },
  discover_filmes: {
    page: 1,
    total_results: 1,
    total_pages: 0,
    results: [],
  },
  trending_filmes: {
    page: 1,
    total_results: 1,
    total_pages: 0,
    results: [],
  },
  trending_series: {
    page: 1,
    total_results: 1,
    total_pages: 0,
    results: [],
  },
  posts: [],
  dark: JSON.parse(localStorage.getItem("dark")) || false,
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
