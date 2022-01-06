import React, { useRef, useState, useEffect } from "react";
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
import { IMG_USER_PADRAO } from "../../API";
import Done from "@material-ui/icons/Done";
import Clear from "@material-ui/icons/Clear";
import AccountCircle from "@material-ui/icons/AccountCircle";
import useModal from "../../hooks/useModal";

import ModalEditarBiografia from "../Modals/ModalEditarBiografia";
import ModalEditarPerfil from "../Modals/ModalEditarPerfil";
import ModalVerPerfil from "../Modals/ModalVerPerfil";
import ModalAlterarEmail from "../Modals/ModalAlterarEmail";
import { useSelector } from "react-redux";
import { selectAll } from "../../store/App.selectors";

export default function InfoUsuario() {
  const { logado, exibirFotoASerAlterada, alterarFotoDePerfil } = useUsuario();
  const [, abrirModal1] = useModal("modalEditarBiografia");
  const [, abrirModal2] = useModal("modalEditarPerfil");
  const [, abrirModal3] = useModal("modalVerPerfil");
  const [, abrirModal4] = useModal("modalAlterarEmail");
  const { usuario } = useSelector(selectAll);

  const fotoPerfilInicial = usuario.foto_perfil || "";
  const a_carregar = logado && !usuario.id;
  const inputFile = useRef();
  const [fotoDePerfil, setFotoDePerfil] = useState("");

  useEffect(() => {
    setFotoDePerfil(fotoPerfilInicial);
  }, [fotoPerfilInicial]);

  function cancelar() {
    setFotoDePerfil(fotoPerfilInicial);
    inputFile.current.value = "";
  }

  return (
    <Box mb={5}>
      <Perfil.Info>
        <Box className="foto-nome-bio">
          <Box component="figure">
            {a_carregar && (
              <img src={IMG_USER_PADRAO} alt="imagem do usuario" />
            )}
            {!a_carregar && <img src={fotoDePerfil} alt="imagem do usuario" />}
            <input
              type="file"
              hidden
              onChange={(e) => exibirFotoASerAlterada(e, null, setFotoDePerfil)}
              id="foto_perfil"
              ref={inputFile}
            />
            <Box component="figcaption">
              {!fotoDePerfil.includes("base64") && (
                <Tooltip title="Alterar foto de perfil">
                  <label onClick={() => inputFile.current.click()}>
                    <FaCamera />
                  </label>
                </Tooltip>
              )}
            </Box>
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
                    onClick={() => alterarFotoDePerfil(inputFile)}
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
              {a_carregar ? "Carregando..." : usuario.nome}
            </Text>

            <Text variant="subtitle2" color="textSecondary">
              <Box display="flex" alignItems="center">
                {a_carregar ? "Carregando..." : usuario.email}
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
                {a_carregar ? "Carregando..." : usuario.mini_biografia}
              </Text>
            </Box>
            <div style={{ flexGrow: 1 }} />
            <Box mt={3} display="flex" justifyContent="center">
              <Button
                color="primary"
                startIcon={<FaPencilAlt />}
                variant="outlined"
                onClick={abrirModal1}
              >
                Editar biografia
              </Button>
            </Box>
          </Box>
        </Box>
        <Box className="mais_info_perfil">
          <List>
            <ListItem>
              <ListItemIcon>
                <Home className="home" />
              </ListItemIcon>
              <ListItemText>
                {a_carregar ? (
                  "Carregando..."
                ) : (
                  <span>
                    Vive em <b>{usuario.cidade}</b>, <b>{usuario.estado}</b> ,
                    <b>{usuario.pais}</b>
                  </span>
                )}
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ThumbUp className="thumbUp" />
              </ListItemIcon>
              <ListItemText>
                {a_carregar ? (
                  "Carregando..."
                ) : (
                  <span>
                    <b>{usuario.genero_favorito}</b> é o seu género favorito
                  </span>
                )}
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ThumbDown className="thumbDown" />
              </ListItemIcon>
              <ListItemText>
                {a_carregar ? (
                  "Carregando..."
                ) : (
                  <span>
                    <b>{usuario.genero_n_favorito}</b> é o género de que menos
                    gostas
                  </span>
                )}
              </ListItemText>
            </ListItem>
          </List>
          <Box mt={3} display="flex" justifyContent="center">
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
          </Box>
        </Box>
      </Perfil.Info>
      <Divider />
      <ModalEditarBiografia />
      <ModalEditarPerfil />
      <ModalVerPerfil />
      <ModalAlterarEmail />
    </Box>
  );
}
