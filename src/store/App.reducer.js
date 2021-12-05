const initialState = {
  logado: true,
  modalSignUp: false,
  modalEsqueciAPasse: false,
  linearProgress: false,
};

export default function AppReducer(state = initialState, { payload, type }) {
  switch (type) {
    case "SET_STATE":
      return { ...state, [payload.nome]: payload.value };
    default:
      return state;
  }
}
