import React from "react";
import Theme from "./core/Theme";
import Routes from "./routes";
import { GlobalStyles } from "./styles/GlobalStyles";
import LinearProgress from "./components/Progress/Linear.jsx";
import useLinearProgress from "./hooks/useLinearProgress";

function App() {
  const [linearProgressAberto] = useLinearProgress();

  return (
    <Theme>
      <GlobalStyles />
      <Routes />
      {linearProgressAberto && <LinearProgress />}
    </Theme>
  );
}

export default App;
