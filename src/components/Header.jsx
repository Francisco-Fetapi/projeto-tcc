import React, { useEffect, useState, useCallback } from "react";
import { HeaderContainer } from "../styles";
import Menu from "./Menu.jsx";
import Box from "@material-ui/core/Box";
import MenuSecondary from "./MenuSecondary.jsx";
import FormSearch from "./Forms/FormSearch";

import Fab from "@material-ui/core/Fab";
import RefreshIcon from "@material-ui/icons/Refresh";

import useUsuario from "../hooks/useUsuario";

import LinearProgress from "./Progress/Linear.jsx";
import useLinearProgress from "../hooks/useLinearProgress";

import useTheme from "@material-ui/core/styles/useTheme";

export default function Header() {
  const [header, setHeader] = useState({});
  const { getInfoHeader } = useUsuario();
  const LoadingLinear = useLinearProgress();
  const theme = useTheme();
  useEffect(() => {
    console.log(header);
    getInfoHeader(setHeader);
  }, []);
  const refresh = useCallback(
    () => getInfoHeader(setHeader, LoadingLinear),
    []
  );
  return (
    <>
      <LinearProgress aberto={LoadingLinear.loading} />
      <HeaderContainer>
        <Box display="flex" alignItems="center">
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
              font-size="16"
              font-family="ScriptMTBold, Script MT"
            >
              <tspan x="0" y="0">
                SMS
              </tspan>
            </text>
          </svg>
          {/* <img src="./img/logo3.svg" alt="logo" style={{ zoom: "1.2" }} /> */}
          <FormSearch />
        </Box>
        <Box
          flexGrow={1}
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Menu info={header} />
        </Box>
        <Box>
          <MenuSecondary info={header} />
        </Box>
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
