import { useNavigate } from "react-router-dom";
import API from "../API";
import {
  parsearCampo,
  parsearErros,
  showFirstError,
} from "../helpers/LoginAndSignUp";
import { useDispatch, useSelector } from "react-redux";
import { RESET_ALL, SET_STATE, SET_STATES } from "../store/SignUp.actions";
import { SET_STATE_USER } from "../store/App.actions";
import { selectAll } from "../store/SignUp.selectors";

export default function useUsuario() {
  const navigate = useNavigate();
  const Disparar = useDispatch();
  const dados_form_criar_conta = useSelector(selectAll);

  let info = {};

  info = {
    async logar(values, actions, LoadingLinear, alertar) {
      if (info.logado) {
        info.logout(); //na conta anterior;
      }
      LoadingLinear.mostrar();
      let res = await API.logar(values);
      LoadingLinear.ocultar();

      if (res.status === "success") {
        info.getDadosUsuarioByToken();
        navigate("/");
      } else {
        alertar(res.msg, res.status, 3);
      }
    },
    logado: localStorage.getItem("token") ? true : false,
    token: localStorage.getItem("token"),
    criar_conta_dados: dados_form_criar_conta,
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
      if (res.status === "success") {
        Disparar(SET_STATE("usuario", res.data));
      } else {
        info.logout();
        navigate("/login");
      }
      console.log(res);
    },
    async getInfoHeader(setState, LoadingLinear) {
      LoadingLinear?.mostrar();
      let res = await API.getInfoHeader();
      LoadingLinear?.ocultar();
      setState(res);
    },
    async logout(gotologin) {
      Disparar(SET_STATE("usuario", {}));
      console.log("deslogado");
      if (gotologin) navigate("/login");
      await API.logout();
    },
    async enviarDadosDaConta(values, actions, LoadingLinear) {
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
    async verificarEmail(values, actions, LoadingLinear, alertar) {
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
      
    },
    async reenviarCodigo(LoadingLinear, alertar) {
      LoadingLinear.mostrar();
      let res = await API.reenviarCodigo(dados_form_criar_conta.email);
      LoadingLinear.ocultar();
      alertar(res.msg, res.status, 5);
      console.log("Codigo reenviado", res.codigo);
    },
    alterarSenha: {
      async inserirEmail(values, actions, setForm2, setAllData, LoadingLinear) {
        console.log(values);
        LoadingLinear.mostrar();
        let res = await API.alterarSenha(values);
        LoadingLinear.ocultar();
        if (res.status === "success") {
          setForm2(true);
          setAllData(values);
        } else {
          actions.setErrors(res.erros);
        }
        console.log(res);
      },
      async inserirCodigo(
        values,
        actions,
        setForm2,
        setForm3,
        allData,
        setAllData,
        LoadingLinear
      ) {
        const allValues = { ...allData, ...values };
        console.log(allValues);
        LoadingLinear.mostrar();
        let res = await API.alterarSenha(allValues);
        LoadingLinear.ocultar();
        if (res.status === "success") {
          setForm2(false);
          setForm3(true);
          setAllData(allValues);
        } else {
          actions.setErrors(res.erros);
        }
        console.log(res);
      },
      async concluir(values, actions, LoadingLinear) {
        console.log(values);
        LoadingLinear.mostrar();
        let res = await API.alterarSenha(values);
        LoadingLinear.ocultar();
        if (res.status === "success") {
          navigate("/");
        } else {
          let erros = parsearErros(res.erros);
          let primeiro_erro = showFirstError(erros);
          actions.setErrors(primeiro_erro);
        }
        console.log(res);
      },
    },
    alterarEmail: {
      async inserirNovoEmailESenha(
        values,
        actions,
        setForm2,
        setDataForm1,
        LoadingLinear
      ) {
        console.log(values);
        LoadingLinear.mostrar();
        let res = await API.alterarEmail(values);
        LoadingLinear.ocultar();
        if (res.status === "success") {
          console.log(res.codigo);
          setForm2(true);
          setDataForm1(values);
        } else {
          actions.setErrors(res.erros);
        }
      },
      async inserirCodigo(values, actions, { setModal, LoadingLinear }) {
        console.log(values);
        LoadingLinear.mostrar();
        let res = await API.alterarEmail(values);
        LoadingLinear.ocultar();
        if (res.status === "success") {
          console.log(res);
          info.getDadosUsuarioByToken();
          setModal(false);
        } else {
          actions.setErrors(res.erros);
        }
      },
    },
    async criarConta(values, actions, LoadingLinear, alertar) {
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
          alertar(res.msg, res.status, 4);
        }
      }
    },
    apagarDadosCriarConta() {
      Disparar(RESET_ALL());
    },
    exibirFotoASerAlterada(e, img, setX) {
      if (e.target.files.length) {
        const fr = new FileReader();
        fr.readAsDataURL(e.target.files[0]);
        fr.onload = function (e) {
          if (setX) {
            setX(e.target.result);
            console.log("renderizou");
          } else {
            img.current.src = e.target.result;
          }
        };
      }
    },
    exibirFoto2ASerAlterada(e, setFoto) {
      if (e.target.files.length) {
        const fr = new FileReader();
        fr.readAsDataURL(e.target.files[0]);
        fr.onload = function (e) {
          setFoto(e.target.result);
        };
      }
    },
    async alterarFotoDeCapa(foto, concluir, LoadingLinear) {
      LoadingLinear.mostrar();
      let res = await API.alterarFotoDeCapa(foto);
      LoadingLinear.ocultar();
      if (res.status === "success") {
        console.log(res);
        Disparar(SET_STATE_USER("foto_capa", res.foto_capa));
        concluir();
      }
    },
    async alterarFotoDePerfil(inputFile, cleanInput, LoadingLinear) {
      const foto = inputFile.current.files[0];
      LoadingLinear.mostrar();
      let res = await API.alterarFotoDePerfil(foto);
      LoadingLinear.ocultar();
      if (res.status === "success") {
        Disparar(SET_STATE_USER("foto_perfil", res.foto_perfil));
        cleanInput(); //value = ""
      }
      console.log(res);
    },
    async alterarBiografia(values, actions, { setModal, LoadingLinear }) {
      if (!values.mini_biografia) {
        actions.setErrors({
          mini_biografia: "Este campo não pode estar vazio",
        });
        return;
      }
      LoadingLinear.mostrar();
      let res = await API.alterarBiografia(values);
      if (res.status === "success") {
        Disparar(SET_STATE_USER("mini_biografia", res.mini_biografia));
      }
      LoadingLinear.ocultar();
      setModal(false);
    },
    async updatePerfil(values, actions, { setModal, LoadingLinear, alertar }) {
      LoadingLinear.mostrar();
      let res = await API.alterarPerfil(values);

      if (res.status === "success") {
        LoadingLinear.ocultar();
        info.getDadosUsuarioByToken();
        setModal(false);
        return;
      } else {
        LoadingLinear.ocultar();
        if (res.erros) {
          let primeiro_erro = showFirstError(res.erros);
          actions.setErrors(primeiro_erro);
        } else {
          alertar(res.msg, res.status, 3);
        }
      }
    },
    Galeria: {
      async guardar(file, { setPaginate, setLoading, setPreview }) {
        setLoading(true);
        const res = await API.addFotoNaGaleria(file);
        this.get({ setPaginate, setLoading }, 0);
        setLoading(false);
        setPreview("");
        console.log(res);
      },
      async get({ setPaginate, setLoading }, page) {
        setLoading(true);
        let res = await API.getFotosDaGaleria(page);
        setLoading(false);

        setPaginate(res);
      },
      async eliminar({ setPaginate, setLoading, setConfirm, paginate }, id) {
        setConfirm(false);
        setLoading(true);
        let res = await API.eliminarFotoGaleria(id);
        console.log(res);
        if (res.status === "success") {
          const page_atual =
            paginate.current_page < paginate.last_page
              ? paginate.current_page
              : 0;
          this.get({ setPaginate, setLoading }, page_atual);
        }
      },
    },
    async getSugestoes({ setPaginate, setLoading }, page) {
      setLoading(true);
      let res = await API.getSugestoes(page);
      setLoading(false);
      setPaginate(res);
    },
    async getAmigos({ setPaginate, setLoading }, page) {
      setLoading(true);
      let res = await API.getAmigos(page);
      setLoading(false);
      console.log(res);
      setPaginate(res);
    },
    async getPedidosDeAmizade({ setLoading, setPedidos }) {
      setLoading(true);
      let res = await API.getPedidosDeAmizade();
      setLoading(false);
      setPedidos(res);
      // setPaginate(res);
    },
    PedidoDeAmizade: {
      async aceitar({ setLoading, setPedidos }, id) {
        setLoading(true);

        const res = await API.aceitarPedidoDeAmizade(id);
        if (res.status === "success") {
          setPedidos((pedidos) => {
            let novos_pedidos = pedidos.filter((pedido) => pedido.id !== id);
            return novos_pedidos;
          });
        }
        setLoading(false);
      },
      async rejeitar({ setLoading, setPedidos }, id) {
        setLoading(true);
        const res = await API.rejeitarPedidoDeAmizade(id);
        if (res.status === "success") {
          setPedidos((pedidos) => {
            let novos_pedidos = pedidos.filter((pedido) => pedido.id !== id);
            return novos_pedidos;
          });
        }
        setLoading(false);
      },
      async enviar({ setLoading, setUsuarios }, id) {
        setLoading(true);

        const res = await API.enviarPedidoDeAmizade(id);
        if (res.status === "success") {
          setUsuarios((usuarios) => {
            let novos_usuarios = usuarios.filter((user) => user.id !== id);
            return novos_usuarios;
          });
        }
        setLoading(false);
      },
    },
  };

  return info;
}
