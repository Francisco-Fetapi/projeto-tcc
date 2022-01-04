export function alterarLarguraDoModal(setPropsModal, largura) {
  console.log("largura alterada", window.innerWidth);
  if (window.innerWidth <= largura) setPropsModal({ fullScreen: true });
  else {
    setPropsModal({});
  }
}
export function parsearErros(erros) {
  Object.keys(erros).forEach((campo) => {
    erros[campo] = erros[campo][0];
  });
  return erros;
}
export function showFirstError(erros) {
  let keys = Object.keys(erros);
  return { [keys[0]]: erros[keys[0]] };
}
export function parsearCampo(campo) {
  const campo_parseado = campo.replace(/^(_)/, "");
  return campo_parseado;
}
