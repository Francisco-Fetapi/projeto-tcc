import { useNavigate } from "react-router-dom";
import API from "../API";
import {
  parsearCampo,
  parsearErros,
  showFirstError,
} from "../helpers/LoginAndSignUp";
import useLoading from "./useLinearProgress";
import useLoadingCircular from "./useLoadingCircular";
import useAlert from "./useAlert";
import { useDispatch, useSelector } from "react-redux";
import { RESET_ALL, SET_STATE, SET_STATES } from "../store/SignUp.actions";
import { selectAll } from "../store/SignUp.selectors";

export default function useUsuario() {
  const navigate = useNavigate();
  const LoadingLinear = useLoading();
  const LoadingCircular = useLoadingCircular();
  const { alertar } = useAlert();
  const Disparar = useDispatch();
  const dados_form_criar_conta = useSelector(selectAll);
  const store = useSelector(selectAll);

  const info = {
    async logar(values) {
      if (info.logado) {
        info.logout(); //na conta anterior;
      }
      LoadingLinear.mostrar();
      let res = await API.logar(values);
      LoadingLinear.ocultar();
      alertar(res.msg, res.status, 3);
      if (res.status === "success") {
        Disparar(SET_STATE("usuario", res.user[0]));
        navigate("/");
      }
    },
    logado: localStorage.getItem("token") ? true : false,
    token: localStorage.getItem("token"),
    criar_conta_dados: dados_form_criar_conta,
    usuario: store.usuario || {},
    seNaoLogadoIrParaLogin() {
      if (!info.logado) {
        navigate("/login");
      }
    },
    seNaoTemEmailIrParaCriarConta() {
      if (!info.criar_conta_dados.email && !info.logado) {
        navigate("/criar-conta");
      }
    },
    seLogadoIrParaHome() {
      if (info.logado) {
        navigate("/");
      }
    },
    async getDadosUsuarioByToken() {
      const token = localStorage.getItem("token");
      let res = await API.getDadosUsuarioByToken(token);
      Disparar(SET_STATE("usuario", res));
      console.log(res);
    },
    logout() {
      Disparar(SET_STATE("usuario", {}));
      API.logout();
      console.log("deslogado");
    },
    async enviarDadosDaConta(values, actions) {
      if (info.logado) {
        info.logout(); //na conta anterior;
      }
      const foto = document.querySelector("#foto").files[0];
      LoadingLinear.mostrar();
      let res = await API.enviarDadosCriarConta(values);
      console.log(res);
      LoadingLinear.ocultar();
      if (res.status === "error") {
        let erros = parsearErros(res.erros);
        let primeiro_erro = showFirstError(erros);
        actions.setErrors(primeiro_erro);
      } else {
        const dados = {};
        Object.keys(values).forEach((campo) => {
          const campo_parseado = parsearCampo(campo);
          dados[campo_parseado] = values[campo];
        });
        if (foto) {
          dados["foto_perfil"] = foto;
        }
        Disparar(SET_STATES(dados));
        console.log(res.codigo);
        navigate("/confirmar-email");
      }
    },
    async verificarEmail(values) {
      const dados = {
        codigo: values.cod_confirmacao,
        email: dados_form_criar_conta.email,
      };
      LoadingLinear.mostrar();
      let res = await API.validarCodigo(dados);
      LoadingLinear.ocultar();
      alertar(res.msg, res.status, 3);
      if (res.status === "success") {
        setTimeout(() => {
          navigate("/mais-sobre-voce");
        }, 3000);
      }
      console.log(store);
    },
    async reenviarCodigo() {
      LoadingLinear.mostrar();
      let res = await API.reenviarCodigo(dados_form_criar_conta.email);
      LoadingLinear.ocultar();
      alertar(res.msg, res.status, 5);
      console.log("Codigo reenviado", res.codigo);
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
    async criarConta(values, actions) {
      LoadingLinear.mostrar();
      let res = await API.criarConta(values);
      console.log(res);
      if (res.status === "error") {
        let erros = parsearErros(res.erros);
        let primeiro_erro = showFirstError(erros);
        actions.setErrors(primeiro_erro);
        console.log(values);
        console.log(primeiro_erro);
        LoadingLinear.ocultar();
      } else {
        const dados = {
          ...dados_form_criar_conta,
          pais: values.pais,
          estado: values.estado,
          cidade: values.cidade,
          genero_favorito: values.genero_favorito,
          genero_favorito_porque: values.genero_favorito_porque || null,
          genero_n_favorito: values.pior_genero,
          assisto_para: values.pra_que_assistir,
          mini_biografia: values.biografia,
          foto_perfil_: dados_form_criar_conta.foto_perfil,
        };
        let res = await API.cadastrarUsuario(dados);
        console.log(res);
        LoadingLinear.ocultar();
        if (res.status === "success") {
          navigate("/");
          info.apagarDadosCriarConta();
        } else {
          console.log(res.erro);
          alertar(res.msg, res.status, 4);
        }
      }
    },
    apagarDadosCriarConta() {
      Disparar(RESET_ALL());
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

  return info;
}
