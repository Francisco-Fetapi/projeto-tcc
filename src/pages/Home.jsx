import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectAll } from "../store/App.selectors";
import { useNavigate } from "react-router-dom";
import { HomeContainer } from "../styles/pages/Home";
import Header from "../components/Header";
import HomeMain from "../components/Home/Main.jsx";
import Box from "@material-ui/core/Box";

export default function Home() {
  const { logado } = useSelector(selectAll);
  const navigate = useNavigate();

  useEffect(() => {
    if (!logado) navigate("/login");
  }, [logado]);
  return (
    logado && (
      <HomeContainer>
        <Header />
        <Box mt={3}>
          <HomeMain />
        </Box>
      </HomeContainer>
    )
  );
}
