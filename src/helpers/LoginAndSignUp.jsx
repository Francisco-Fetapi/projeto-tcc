export function alterarLarguraDoModal(setPropsModal, largura) {
  console.log("largura alterada", window.innerWidth);
  if (window.innerWidth <= largura) setPropsModal({ fullScreen: true });
  else {
    setPropsModal({});
  }
}
