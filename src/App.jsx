import React, { useEffect } from "react";
import Theme from "./core/Theme";
import Routes from "./routes";
import { GlobalStyles } from "./styles/GlobalStyles";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useUsuario from "./hooks/useUsuario";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAll } from "./store/App.selectors";

function App() {
  const { getDadosUsuarioByToken, token, logado } = useUsuario();
  const { usuario } = useSelector(selectAll);
  const { pathname } = useLocation();
  const routes_not_user = ["/login", "/signup"];
  useEffect(() => {
    if (logado && !usuario.id) {
      if (!routes_not_user.includes(pathname)) {
        getDadosUsuarioByToken();
      }
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
    </Theme>
  );
}

export default App;
