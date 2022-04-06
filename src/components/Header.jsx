import React, { useEffect, useState, useCallback } from "react";
import { HeaderContainer } from "../styles";
import Menu from "./Menu.jsx";
import MenuMobile from "./MenuMobile";
import Box from "@material-ui/core/Box";
import MenuSecondary from "./MenuSecondary.jsx";
import FormSearch from "./Forms/FormSearch";

import Fab from "@material-ui/core/Fab";
import RefreshIcon from "@material-ui/icons/Refresh";

import useUsuario from "../hooks/useUsuario";

import LinearProgress from "./Progress/Linear.jsx";
import useLinearProgress from "../hooks/useLinearProgress";

import useTheme from "@material-ui/core/styles/useTheme";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [header, setHeader] = useState({});
  const { getInfoHeader } = useUsuario();
  const LoadingLinear = useLinearProgress();
  const navigate = useNavigate();
  const theme = useTheme();
  useEffect(() => {
    getInfoHeader(setHeader);
  }, []);
  const refresh = useCallback(
    () => getInfoHeader(setHeader, LoadingLinear),
    []
  );
  function procurar(values) {
    console.log(values);
    navigate(`/procurar?termo_de_pesquisa=${values.search}`);
  }
  return (
    <>
      <LinearProgress aberto={LoadingLinear.loading} />
      <HeaderContainer>
        <Box className="logo-e-form" display="flex" alignItems="center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
          >
            <rect
              width="40"
              height="40"
              rx="20"
              fill={theme.palette.primary.main}
            />
            <text
              transform="translate(2 26)"
              fill="#fff"
              fontSize="16"
              fontFamily="ScriptMTBold, Script MT"
            >
              <tspan x="0" y="0">
                SMS
              </tspan>
            </text>
          </svg>
          <Box ml={5} className="header-form-search">
            <FormSearch
              placeholder="procurar filmes,series e pessoas"
              id="search"
              procurar={procurar}
            />
          </Box>
        </Box>
        <Box
          flexGrow={1}
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          className="menu-items-header-main"
        >
          <Menu info={header} />
        </Box>
        <Box className="menu-items-header-secondary">
          <MenuSecondary info={header} />
        </Box>

        <MenuMobile info={header} />
      </HeaderContainer>
      <div
        style={{
          marginBottom: "100px",
        }}
      />
      <Fab
        onClick={refresh}
        color="primary"
        aria-label="add"
        className="fab-button"
      >
        <RefreshIcon />
      </Fab>
    </>
  );
}
