const initialState = {
  logado: false,
  modalSignUp: false,
  modalEsqueciAPasse: false,
  modalEditarBiografia: false,
  modalEditarPerfil: false,
  modalVerPerfil: false,
  linearProgress: false,
  circularProgress: false,
  alert: false,
  alert_msg: "",
  alert_status: "",
  alert_tempo: 3,
  usuario: {},
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
