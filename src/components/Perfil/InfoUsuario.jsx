import React, { useRef, useState, useEffect, useCallback } from "react";
import { Text } from "../../styles";
import { Perfil } from "../../styles/pages/Perfil";
import Box from "@material-ui/core/Box";
import { FaCamera } from "react-icons/fa";
import Button from "@material-ui/core/Button";

import Divider from "@material-ui/core/Divider";
import Tooltip from "@material-ui/core/Tooltip";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import Home from "@material-ui/icons/Home";
import ThumbDown from "@material-ui/icons/ThumbDown";
import ThumbUp from "@material-ui/icons/ThumbUp";

import { FaPencilAlt, FaPlus } from "react-icons/fa";
import useUsuario from "../../hooks/useUsuario";
import Done from "@material-ui/icons/Done";
import Clear from "@material-ui/icons/Clear";
import AccountCircle from "@material-ui/icons/AccountCircle";

import ModalEditarBiografia from "../Modals/ModalEditarBiografia";
import ModalEditarPerfil from "../Modals/ModalEditarPerfil";
import ModalVerPerfil from "../Modals/ModalVerPerfil";
import ModalAlterarEmail from "../Modals/ModalAlterarEmail";
import { useSelector } from "react-redux";
import { selectAll } from "../../store/App.selectors";

import Skeleton from "@material-ui/lab/Skeleton";
import useModal from "../../hooks/useModal";

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
  const { exibirFotoASerAlterada, alterarFotoDePerfil } = useUsuario();

  const [modal1, abrirModal1, , setModal1] = useModal();
  const [modal2, abrirModal2, , setModal2] = useModal();
  const [modal3, abrirModal3, , setModal3] = useModal();
  const [modal4, abrirModal4, , setModal4] = useModal();

  const { usuario } = useSelector(selectAll);

  const fotoPerfilInicial = usuario.foto_perfil || "";
  const a_carregar = !usuario.id;
  const inputFile = useRef();
  const [fotoDePerfil, setFotoDePerfil] = useState("");

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

  return (
    <Box mb={5}>
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
            {!a_carregar && (
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

            {fotoDePerfil.includes("base64") && (
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
                      alterarFotoDePerfil(inputFile, limparInputFile)
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
            <Text variant="h6" style={{ color: "#393939" }}>
              {a_carregar ? (
                <Skeleton variant="rect" width="70%" height={32} />
              ) : (
                usuario.nome
              )}
            </Text>

            <Text variant="subtitle2" color="textSecondary">
              <Box display="flex" alignItems="center">
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
                {!a_carregar && (
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
            </Text>
            <Box mt={1.3}>
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
              {!a_carregar && (
                <Button
                  color="primary"
                  startIcon={<FaPencilAlt />}
                  variant="outlined"
                  onClick={abrirModal1}
                >
                  Editar biografia
                </Button>
              )}
              {a_carregar && (
                <Skeleton variant="rect" width={183} height={36} />
              )}
            </Box>
          </Box>
        </Box>
        <Box className="mais_info_perfil">
          <List>
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
          <Box mt={3} display="flex" justifyContent="center">
            {!a_carregar && (
              <>
                <Button
                  color="primary"
                  startIcon={<AccountCircle />}
                  variant="outlined"
                  style={{ marginRight: 10 }}
                  onClick={abrirModal2}
                >
                  Editar perfil
                </Button>
                <Button
                  color="primary"
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
        </Box>
      </Perfil.Info>
      <Divider />
      <ModalEditarBiografia open={modal1} setModal={setModal1} />
      <ModalEditarPerfil open={modal2} setModal={setModal2} />
      <ModalVerPerfil open={modal3} setModal={setModal3} />
      <ModalAlterarEmail open={modal4} setModal={setModal4} />
    </Box>
  );
}
