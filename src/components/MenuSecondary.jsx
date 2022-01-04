import React from "react";
import { MenuSecondary, Text } from "../styles";
import Box from "@material-ui/core/Box";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import useTheme from "@material-ui/core/styles/useTheme";

import { FaEnvelope } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
// import useUsuario from "../hooks/useUsuario";

// import { useSelector } from "react-redux";
// import { selectAll } from "../store/App.selectors";

// import { BASE_URL, IMG_USER_PADRAO } from "../API";

export default function MenuSecondary_() {
  // const { logado } = useUsuario();

  // const { usuario } = useSelector(selectAll);
  // const fotoPerfil = `${BASE_URL}/${usuario.foto_perfil}`;

  // const a_carregar = logado && !usuario.id;
  const theme = useTheme();
  return (
    <MenuSecondary>
      {/* <Box display="flex" alignItems="center" className="foto-user-nome">
        {a_carregar && <img src={IMG_USER_PADRAO} alt="imagem do usuario" />}
        {!a_carregar && <img src={fotoPerfil} alt="imagem do usuario" />}
        <Text>{a_carregar ? "Carregando..." : usuario.nome}</Text>
      </Box> */}
      <Box
        display="flex"
        alignItems="center"
        style={{
          zoom: ".8",
        }}
      >
        <IconButton
          style={{
            margin: "0px 4px",
            background: theme.palette.primary.main,
          }}
        >
          <Badge max={9} badgeContent={1}>
            <FaEnvelope color="white" />
          </Badge>
        </IconButton>

        <IconButton
          style={{
            margin: "0px 4px",
            background: theme.palette.primary.main,
          }}
        >
          <Badge max={99} badgeContent={18}>
            <FaBell color="white" />
          </Badge>
        </IconButton>
        <IconButton
          style={{ margin: "0px 4px", background: theme.palette.primary.main }}
        >
          <FaChevronDown color="white" />
        </IconButton>
      </Box>
    </MenuSecondary>
  );
}
