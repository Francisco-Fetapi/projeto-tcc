import React, { useEffect } from "react";
import Theme from "./core/Theme";
import Routes from "./routes";
import { GlobalStyles } from "./styles/GlobalStyles";
import LinearProgress from "./components/Progress/Linear.jsx";
import CircularProgress from "./components/Progress/Circular.jsx";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Alerta from "./components/Alerta";
import useUsuario from "./hooks/useUsuario";

function App() {
  const { getDadosUsuarioByToken, token, logado, usuario } = useUsuario();
  useEffect(() => {
    if (logado && !usuario.id) {
      getDadosUsuarioByToken();
    }
  }, [token]);

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
