import { useNavigate } from "react-router-dom";

export default function useUsuario() {
  const navigate = useNavigate();

  const funcoes = {
    logar(values) {
      console.log(values);
      navigate("/");
    },
    criarConta(values, actions) {
      console.log(values);
      const foto = document.querySelector("#foto").files[0];
      console.log(foto);
      navigate("/confirmar-email");
    },
    verificarEmail(values) {
      console.log(values);
      navigate("/mais-sobre-voce");
    },
    reenviarCodigo() {
      console.log("Codigo reenviado");
    },
    setMaisSobreMim(values) {
      console.log(values);
      navigate("/");
    },
    exibirFotoASerAlterada(e, img) {
      if (e.target.files.length) {
        const fr = new FileReader();
        fr.readAsDataURL(e.target.files[0]);
        fr.onload = function (e) {
          img.current.src = e.target.result;
        };
      }
    },
  };

  return funcoes;
}
