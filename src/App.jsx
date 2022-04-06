import React, { useEffect } from "react";
import Theme from "./core/Theme";
import Routes from "./routes";
import { GlobalStyles } from "./styles/GlobalStyles";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useUsuario from "./hooks/useUsuario";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAppState } from "./store/App.selectors";

function App() {
  const { getDadosUsuarioByToken, token, logado } = useUsuario();
  const usuario = useSelector(selectAppState("usuario"));
  const { pathname } = useLocation();
  const routes_not_user = ["/login", "/signup"];
  const routes_not_scroll = ["/ator/"];
  useEffect(() => {
    if (logado && !usuario.id) {
      if (!routes_not_user.includes(pathname)) {
        getDadosUsuarioByToken();
      }
    }
  }, [token]);

  useEffect(() => {
    if (pathname.includes(routes_not_scroll[0])) return;
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Theme>
      <GlobalStyles />
      <Routes />
    </Theme>
  );
}

export default App;
