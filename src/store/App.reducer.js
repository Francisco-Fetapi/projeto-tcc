const initialState = {
  logado: false,
  modalSignUp: false,
  modalEsqueciAPasse: false,
  linearProgress: false,
  alert: true,
  alert_msg: "Ola Mundi",
  alert_status: "",
  alert_tempo: 30,
};

export default function AppReducer(state = initialState, { payload, type }) {
  switch (type) {
    case "SET_STATE":
      return { ...state, [payload.nome]: payload.value };
    default:
      return state;
  }
}
