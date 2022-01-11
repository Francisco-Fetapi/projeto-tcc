import React from "react";
import { HeaderContainer } from "../styles";
import Menu from "./Menu.jsx";
import Box from "@material-ui/core/Box";
import MenuSecondary from "./MenuSecondary.jsx";
import FormSearch from "./Forms/FormSearch";

import Fab from "@material-ui/core/Fab";
import RefreshIcon from "@material-ui/icons/Refresh";

export default function Header() {
  return (
    <>
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
          <Menu />
        </Box>
        <Box>
          <MenuSecondary />
        </Box>
      </HeaderContainer>
      <div
        style={{
          marginBottom: "100px",
        }}
      />
      <Fab color="primary" aria-label="add" className="fab-button">
        <RefreshIcon />
      </Fab>
    </>
  );
}
