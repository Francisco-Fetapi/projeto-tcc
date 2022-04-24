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
  searches_to_post: {
    page: 0,
    total_results: 1,
    total_pages: 0,
    results: [],
  },
  posts: {
    current_page: 1,
    last_page: 1,
    per_page: 8,
    next_page_url: null,
    total: 0,
    data: [],
  },
  meus_posts: {
    current_page: 1,
    last_page: 1,
    per_page: 8,
    next_page_url: null,
    total: 0,
    data: [],
  },
  meus_guardados: {
    current_page: 1,
    last_page: 1,
    per_page: 8,
    next_page_url: null,
    total: 0,
    data: [],
  },
  posts_movie: {
    current_page: 1,
    last_page: 1,
    per_page: 8,
    next_page_url: null,
    total: 0,
    data: [],
  },
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
