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

export default function Header() {
  const [header, setHeader] = useState({});
  const { getInfoHeader } = useUsuario();
  const LoadingLinear = useLinearProgress();
  useEffect(() => {
    getInfoHeader(setHeader, LoadingLinear);
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
          <img src="./img/logo3.svg" alt="logo" style={{ zoom: "1.2" }} />
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
