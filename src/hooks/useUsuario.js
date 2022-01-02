import { useNavigate } from "react-router-dom";
import API from "../API";
import {
  parsearCampo,
  parsearErros,
  showFirstError,
} from "../helpers/LoginAndSignUp";
import useLoading from "./useLinearProgress";
import { useDispatch, useSelector } from "react-redux";
import { SET_STATE } from "../store/SignUp.actions";
import { selectAll } from "../store/SignUp.selectors";

export default function useUsuario() {
  const navigate = useNavigate();
  const { mostrar, ocultar } = useLoading();
  const Disparar = useDispatch();
  const dados_form_criar_conta = useSelector(selectAll);

  const funcoes = {
    logar(values) {
      console.log(values);
      navigate("/");
    },
    async enviarDadosDaConta(values, actions) {
      console.log(values);
      // const foto = document.querySelector("#foto").files[0];
      mostrar();
      let res = await API.enviarDadosCriarConta(values);
      console.log(res);
      ocultar();
      if (res.status === "error") {
        let erros = parsearErros(res.erros);
        let primeiro_erro = showFirstError(erros);
        actions.setErrors(primeiro_erro);
        console.log(primeiro_erro);
      } else {
        Object.keys(values).forEach((campo) => {
          const campo_parseado = parsearCampo(campo);
          Disparar(SET_STATE(campo_parseado, values[campo]));
        });
        console.log(res.codigo);
        navigate("/confirmar-email");
      }
    },
    async verificarEmail(values) {
      console.log(values);
      const dados = {
        codigo: values.cod_confirmacao,
        email: dados_form_criar_conta.email,
      };
      mostrar();
      let res = await API.validarCodigo(dados);
      ocultar();
      console.log(res);
      // navigate("/mais-sobre-voce");
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
