const initialState = {
  logado: false,
  modalSignUp: false,
  modalEsqueciAPasse: false,
  linearProgress: false,
  alert: false,
  alert_msg: "",
  alert_status: "",
  alert_tempo: 3,
};

export default function AppReducer(state = initialState, { payload, type }) {
  switch (type) {
    case "SET_STATE":
      return { ...state, [payload.nome]: payload.value };
    default:
      return state;
  }
}
