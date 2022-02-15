import React, { useEffect, createContext, useState } from "react";
import Header from "../components/Header";
import PerfilMain from "../components/Perfil/Main";
import Box from "@material-ui/core/Box";
import useUsuario from "../hooks/useUsuario";
import API from "~/API";
import { useParams } from "react-router-dom";

export const PerfilContext = createContext();

export default function Perfil_({ alheio }) {
  const { seNaoLogadoIrParaLogin } = useUsuario();
  const { id } = useParams();
  console.log("id", id);
  const [usuario, setUsuario] = useState({});
  useEffect(() => {
    async function get() {
      const res = await API.getUsuarioById(id);
      setUsuario(res);
    }
    if (alheio) {
      get();
    }
  }, []);
  useEffect(seNaoLogadoIrParaLogin, []);
  console.log(alheio);
  const dadosContext = {
    usuario,
    alheio,
  };
  return (
    <Box>
      <PerfilContext.Provider value={dadosContext}>
        <Header />
        <Box mt={-3}>
          <PerfilMain />
        </Box>
      </PerfilContext.Provider>
    </Box>
  );
}
