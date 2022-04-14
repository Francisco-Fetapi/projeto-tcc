export function formatarData(data) {
  if (!data) return "Data indisponivel";
  const date = new Date(data);
  return date.toLocaleDateString();
}

export function primeiroNome(usuario) {
  return usuario.nome?.trim().split(" ")[0];
}
export function primeiroEUltimoNome(usuario) {
  let nomes = usuario.nome?.trim().split(" ");
  let primeiro = nomes[0];
  let ultimo = nomes[nomes.length - 1];
  return `${primeiro} ${ultimo}`;
}
export function mostrarXCharOntText(texto, qtdAMostrar = 10) {
  if (texto.length <= qtdAMostrar) return texto;
  return texto.substring(0, qtdAMostrar) + "...";
}
