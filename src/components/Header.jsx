import React from "react";
import { HeaderContainer } from "../styles";
import TextField1 from "./TextField1.jsx";
import Menu from "./Menu.jsx";
import Box from "@material-ui/core/Box";
import Search from "@material-ui/icons/Search";
import MenuSecondary from "./MenuSecondary.jsx";

export default function Header() {
  return (
    <>
      <HeaderContainer>
        <Box display="flex" alignItems="center">
          <img src="./img/logo3.svg" alt="logo" style={{ zoom: "1.2" }} />
          <Box ml={5}>
            <TextField1
              icon={<Search />}
              placeholder="procurar filmes,series e pessoas"
              id="search"
              className="field-pesquisar"
            />
          </Box>
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
    </>
  );
}
