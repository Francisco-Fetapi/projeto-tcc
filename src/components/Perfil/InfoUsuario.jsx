import React, { useRef, useState, useEffect, useContext } from "react";
import { Text, Link } from "~/styles";
import { Perfil } from "~/styles/pages/Perfil";
import Box from "@material-ui/core/Box";
import { FaCamera, FaEnvelope } from "react-icons/fa";
import ButtonMui from "@material-ui/core/Button";

import Divider from "@material-ui/core/Divider";
import Tooltip from "@material-ui/core/Tooltip";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import Home from "@material-ui/icons/Home";
import Close from "@material-ui/icons/Close";
import ThumbDown from "@material-ui/icons/ThumbDown";
import ThumbUp from "@material-ui/icons/ThumbUp";

import {
  FaPencilAlt,
  FaPlus,
  FaUsers,
  FaTv,
  FaList,
  FaSave,
} from "react-icons/fa";
import useUsuario from "~/hooks/useUsuario";
import Clear from "@material-ui/icons/Clear";
import Done from "@material-ui/icons/Done";
import AccountCircle from "@material-ui/icons/AccountCircle";

import ModalEditarBiografia from "../Modals/ModalEditarBiografia";
import ModalEditarPerfil from "../Modals/ModalEditarPerfil";
import ModalVerPerfil from "../Modals/ModalVerPerfil";
import ModalAlterarEmail from "../Modals/ModalAlterarEmail";
import { useSelector } from "react-redux";
import { selectAppState } from "~/store/App.selectors";

import Skeleton from "@material-ui/lab/Skeleton";
import useModal from "~/hooks/useModal";

import LinearProgress from "../Progress/Linear.jsx";
import useLinearProgress from "~/hooks/useLinearProgress";
import { PerfilContext } from "~/pages/Perfil";
import { useLocation, useParams } from "react-router-dom";
import API from "~/API";
import Confirmar from "../Modals/ModalConfirmar";
import { primeiroEUltimoNome } from "~/helpers";

function LinkPerfil({ to, icon, children }) {
  return (
    <Link to={to}>
      <Box mr={1} display="flex" alignItems="center">
        {icon}
      </Box>{" "}
      {children}
    </Link>
  );
}
function Button(props) {
  return <ButtonMui {...props} style={{ zoom: 0.85, margin: 4 }} />;
}

function ListItemWithSkeleton({ a_carregar, className, Icon, children }) {
  if (a_carregar) {
    return (
      <ListItem>
        <Skeleton variant="rect" width="100%" height={38} />
      </ListItem>
    );
  }
  return (
    <ListItem>
      <ListItemIcon>
        <Icon className={className} />
      </ListItemIcon>
      <ListItemText>{children}</ListItemText>
    </ListItem>
  );
}

export default function InfoUsuario() {
  const { exibirFotoASerAlterada, alterarFotoDePerfil, Amigo } = useUsuario();

  const [modal1, abrirModal1, , setModal1] = useModal();
  const [modal2, abrirModal2, , setModal2] = useModal();
  const [modal3, abrirModal3, , setModal3] = useModal();
  const [modal4, abrirModal4, , setModal4] = useModal();

  const Perfil_Context = useContext(PerfilContext);
  const perfil_alheio = Perfil_Context.alheio;

  const usuario_logado = useSelector(selectAppState("usuario"));
  const [usuario, setUsuario] = useState({});
  const { pathname } = useLocation();
  const [confirm, setConfirm] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    if (Perfil_Context.alheio) {
      setUsuario(Perfil_Context.usuario);
    } else {
      setUsuario(usuario_logado);
    }
    // eslint-disable-next-line
  }, [Perfil_Context.usuario, usuario_logado, pathname]);

  const fotoPerfilInicial = usuario.foto_perfil || "";
  const a_carregar =
    !usuario.id || (Perfil_Context.alheio && Perfil_Context.loadingUsuario);
  const inputFile = useRef();
  const [fotoDePerfil, setFotoDePerfil] = useState("");
  const LoadingLinear = useLinearProgress();

  useEffect(() => {
    setFotoDePerfil(fotoPerfilInicial);
  }, [fotoPerfilInicial]);

  function cancelar() {
    setFotoDePerfil(fotoPerfilInicial);
    limparInputFile();
  }
  function limparInputFile() {
    inputFile.current.value = "";
  }
  function removerAmizade() {
    Amigo.rejeitar({ LoadingLinear, setUsuario, setConfirm }, usuario.id);
  }

  return (
    <Box mb={5}>
      <LinearProgress aberto={LoadingLinear.loading} />
      {perfil_alheio && usuario.nome && (
        <Confirmar
          open={confirm}
          onClose={() => setConfirm(false)}
          onSim={removerAmizade}
        >
          <Text>
            Você está prestes a remover amizade com &nbsp;
            <b>{primeiroEUltimoNome(usuario)}</b>
          </Text>
        </Confirmar>
      )}
      <Perfil.Info>
        <Box className="foto-nome-bio">
          <Box component="figure">
            {a_carregar && (
              <Box>
                <Skeleton variant="circle" width={90} height={90} />
              </Box>
            )}
            {!a_carregar && <img src={fotoDePerfil} alt="imagem do usuario" />}
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={(e) => exibirFotoASerAlterada(e, null, setFotoDePerfil)}
              id="foto_perfil"
              ref={inputFile}
            />
            {!a_carregar && !perfil_alheio && (
              <Box component="figcaption">
                {!fotoDePerfil.includes("base64") && (
                  <Tooltip title="Alterar foto de perfil">
                    <label onClick={() => inputFile.current.click()}>
                      <FaCamera />
                    </label>
                  </Tooltip>
                )}
              </Box>
            )}

            {fotoDePerfil.includes("base64") && !perfil_alheio && (
              <>
                <Tooltip title="Cancelar">
                  <div className="left" onClick={cancelar}>
                    <label>
                      <Clear />
                    </label>
                  </div>
                </Tooltip>
                <Tooltip title="Concluir">
                  <div
                    className="right"
                    onClick={() =>
                      alterarFotoDePerfil(
                        inputFile,
                        limparInputFile,
                        LoadingLinear
                      )
                    }
                  >
                    <label>
                      <Done />
                    </label>
                  </div>
                </Tooltip>
              </>
            )}
          </Box>
          <Box mt={2} display="flex" flexDirection="column">
            <Text
              variant="h6"
              style={{ color: "#393939" }}
              className="nome_usuario"
            >
              {a_carregar ? (
                <Skeleton variant="rect" width="70%" height={32} />
              ) : (
                usuario.nome
              )}
            </Text>

            <Text variant="subtitle2" color="textSecondary">
              <Box className="alterar-email-box">
                {a_carregar ? (
                  <Skeleton
                    variant="rect"
                    width="100%"
                    height={12}
                    style={{ marginTop: 8 }}
                  />
                ) : (
                  usuario.email
                )}
                {!a_carregar && !perfil_alheio && (
                  <Box
                    ml={2}
                    className="alterar_email"
                    display="flex"
                    alignItems="center"
                    onClick={abrirModal4}
                  >
                    <Box mr={0.5}>Alterar</Box>
                    <FaPencilAlt style={{ fontSize: 12 }} />
                  </Box>
                )}
              </Box>
              {perfil_alheio && !a_carregar && (
                <>
                  <Box>
                    <Text color="textSecondary" style={{ fontSize: 12 }}>
                      Se cadastrou no sistema <b>{usuario.tempo_no_sistema}</b>
                    </Text>
                  </Box>
                  {usuario.status_amizade === 1 && (
                    <Box>
                      <Text color="textSecondary" style={{ fontSize: 12 }}>
                        Vocês são amigos <b>{usuario.tempo_amizade}</b>
                      </Text>
                    </Box>
                  )}
                  {usuario.status_amizade === 0 && (
                    <Box>
                      <Text color="textSecondary" style={{ fontSize: 12 }}>
                        O pedido foi enviado <b>{usuario.tempo_amizade}</b>
                      </Text>
                    </Box>
                  )}
                </>
              )}
            </Text>
            <Box mt={1.3} className="perfil-biografia">
              <Text color="textSecondary" variant="subtitle2">
                {a_carregar ? (
                  <Skeleton variant="rect" width="100%" height={72} />
                ) : (
                  usuario.mini_biografia
                )}
              </Text>
            </Box>

            <div style={{ flexGrow: 1 }} />

            <Box mt={3} display="flex" justifyContent="center">
              {!a_carregar && !perfil_alheio && (
                <Button
                  color="default"
                  startIcon={<FaPencilAlt />}
                  variant="outlined"
                  onClick={abrirModal1}
                >
                  Editar biografia
                </Button>
              )}
              {!a_carregar &&
                perfil_alheio &&
                usuario.status_amizade === undefined && (
                  <Box>
                    <Button
                      color="default"
                      startIcon={<FaPlus />}
                      variant="outlined"
                      onClick={() =>
                        Amigo.adicionar(
                          { LoadingLinear, setUsuario },
                          usuario.id
                        )
                      }
                    >
                      Adicionar amigo
                    </Button>
                  </Box>
                )}
              {!a_carregar && perfil_alheio && usuario.status_amizade === 1 && (
                <Box>
                  <Button
                    color="default"
                    startIcon={<Close />}
                    variant="outlined"
                    onClick={() => setConfirm(true)}
                  >
                    Remover amizade
                  </Button>
                  <Button
                    color="default"
                    startIcon={<FaEnvelope />}
                    variant="outlined"
                    onClick={() => Amigo.mensagens(usuario.id)}
                  >
                    Mensagens
                  </Button>
                </Box>
              )}
              {!a_carregar &&
                perfil_alheio &&
                usuario.status_amizade === 0 &&
                !usuario.eu_enviei && (
                  <Box>
                    <Button
                      color="default"
                      startIcon={<Close />}
                      variant="outlined"
                      onClick={() =>
                        Amigo.aceitar({ LoadingLinear, setUsuario }, usuario.id)
                      }
                    >
                      Aceitar pedido
                    </Button>
                    <Button
                      color="default"
                      startIcon={<Done />}
                      variant="outlined"
                      onClick={() =>
                        Amigo.rejeitar(
                          { LoadingLinear, setUsuario },
                          usuario.id
                        )
                      }
                    >
                      Rejeitar pedido
                    </Button>
                  </Box>
                )}
              {!a_carregar &&
                perfil_alheio &&
                usuario.status_amizade === 0 &&
                usuario.eu_enviei && (
                  <Box>
                    <Button
                      color="default"
                      startIcon={<Close />}
                      variant="outlined"
                      onClick={() =>
                        Amigo.cancelarPedido(
                          { LoadingLinear, setUsuario },
                          usuario.id
                        )
                      }
                    >
                      Cancelar pedido
                    </Button>
                  </Box>
                )}
              {a_carregar && (
                <Skeleton variant="rect" width={183} height={36} />
              )}
            </Box>
          </Box>
        </Box>
        <Box className="mais_info_perfil">
          <List style={{ zoom: 0.9 }}>
            <ListItemWithSkeleton
              a_carregar={a_carregar}
              Icon={Home}
              className="home"
            >
              <span>
                <b>Localidade:</b> {usuario.cidade}, {usuario.estado} ,
                {usuario.pais}
              </span>
            </ListItemWithSkeleton>
            <ListItemWithSkeleton
              a_carregar={a_carregar}
              Icon={ThumbUp}
              className="thumbUp"
            >
              <span>
                <b>Género Favorito:</b> {usuario.genero_favorito}
              </span>
            </ListItemWithSkeleton>
            <ListItemWithSkeleton
              a_carregar={a_carregar}
              Icon={ThumbDown}
              className="thumbDown"
            >
              <span>
                <b>Pior Género:</b> {usuario.genero_n_favorito}
              </span>
            </ListItemWithSkeleton>
          </List>
          {!perfil_alheio && (
            <Box mt={3} display="flex" justifyContent="center">
              {!a_carregar && (
                <>
                  <Button
                    color="default"
                    startIcon={<AccountCircle />}
                    variant="outlined"
                    style={{ marginRight: 10 }}
                    onClick={abrirModal2}
                  >
                    Editar perfil
                  </Button>
                  <Button
                    color="default"
                    onClick={abrirModal3}
                    startIcon={<FaPlus />}
                    variant="outlined"
                  >
                    Ver mais
                  </Button>
                </>
              )}
              {a_carregar && (
                <>
                  <Box mr={2.2} width={183}>
                    <Skeleton variant="rect" width={183} height={36} />
                  </Box>
                  <Skeleton variant="rect" width={183} height={36} />
                </>
              )}
            </Box>
          )}
          {perfil_alheio && (
            <Box mt={3} display="flex" justifyContent="center">
              {!a_carregar && (
                <Button
                  color="default"
                  onClick={abrirModal3}
                  startIcon={<FaPlus />}
                  variant="outlined"
                >
                  Ver mais
                </Button>
              )}
              {a_carregar && (
                <>
                  <Skeleton variant="rect" width={183} height={36} />
                </>
              )}
            </Box>
          )}
        </Box>
      </Perfil.Info>
      {!a_carregar && (
        <Box
          className="links_perfil"
          my={2}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {!perfil_alheio && (
            <LinkPerfil to="/registo-de-atividade" icon={<FaList />}>
              Registo de atividade
            </LinkPerfil>
          )}

          <LinkPerfil to={id ? `/amigos/${id}` : "/amigos"} icon={<FaUsers />}>
            Amigos
          </LinkPerfil>
          <LinkPerfil
            to={id ? `/movies-favoritos/${id}` : "/movies-favoritos"}
            icon={<FaTv />}
          >
            Favoritos
          </LinkPerfil>
          <LinkPerfil
            to={id ? `/publicacoes-guardadas/${id}` : "/publicacoes-guardadas"}
            icon={<FaSave />}
          >
            Publicações guardadas
          </LinkPerfil>
        </Box>
      )}
      <Divider />
      <ModalEditarBiografia open={modal1} setModal={setModal1} />
      <ModalEditarPerfil open={modal2} setModal={setModal2} />
      <ModalVerPerfil usuario={usuario} open={modal3} setModal={setModal3} />
      <ModalAlterarEmail open={modal4} setModal={setModal4} />
    </Box>
  );
}
