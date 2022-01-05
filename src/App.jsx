import React, { useEffect } from "react";
import Theme from "./core/Theme";
import Routes from "./routes";
import { GlobalStyles } from "./styles/GlobalStyles";
import LinearProgress from "./components/Progress/Linear.jsx";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Alerta from "./components/Alerta";
import useUsuario from "./hooks/useUsuario";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAll } from "./store/App.selectors";

function App() {
  const { getDadosUsuarioByToken, token, logado } = useUsuario();
  const { usuario } = useSelector(selectAll);
  const { pathname } = useLocation();
  useEffect(() => {
    if (logado && !usuario.id) {
      getDadosUsuarioByToken();
    }
  }, [token]);

  useEffect(() => {
    console.log(pathname);
    window.scrollTo(0, 0);
  }, [pathname]);

  console.log("App Renderizou");

  return (
    <Theme>
      <GlobalStyles />
      <Routes />
      <LinearProgress />
      <Alerta />
    </Theme>
  );
}

export default App;
