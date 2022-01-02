import { useNavigate } from "react-router-dom";
import API from "../API";
import useLoading from "./useLinearProgress";

export default function useUsuario() {
  const navigate = useNavigate();
  const { mostrar, ocultar } = useLoading();

  const funcoes = {
    logar(values) {
      console.log(values);
      navigate("/");
    },
    async enviarDadosDaConta(values, actions) {
      console.log(values);
      // const foto = document.querySelector("#foto").files[0];
      mostrar();
      await API.teste();
      ocultar();
      // console.log(foto);
      // navigate("/confirmar-email");
    },
    verificarEmail(values) {
      console.log(values);
      navigate("/mais-sobre-voce");
    },
    reenviarCodigo() {
      console.log("Codigo reenviado");
    },
    alterarSenha: {
      inserirEmail(values) {
        console.log(values);
      },
      inserirCodigo(values) {
        console.log(values);
      },
      concluir(values) {
        console.log(values);
        navigate("/");
      },
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
