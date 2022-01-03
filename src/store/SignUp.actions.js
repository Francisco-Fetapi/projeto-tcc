export function SET_STATE(nome, value) {
  return {
    payload: { nome, value },
    type: "SET_STATE",
  };
}
export function RESET_ALL() {
  return {
    payload: null,
    type: "RESET_ALL",
  };
}
