import React, { useState, useEffect, useContext } from "react";
import { Perfil } from "~/styles/pages/Perfil";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { FaCamera } from "react-icons/fa";
import useUsuario from "~/hooks/useUsuario";
import { useRef } from "react";

import Done from "@material-ui/icons/Done";
import Clear from "@material-ui/icons/Clear";
import { useSelector } from "react-redux";
import { selectAppState } from "~/store/App.selectors";
import LinearProgress from "../Progress/Linear.jsx";
import useLinearProgress from "~/hooks/useLinearProgress";
import { PerfilContext } from "~/pages/Perfil.jsx";

export default function Banner() {
  // const usuario = useSelector(selectAppState("usuario"));
  const Perfil_Context = useContext(PerfilContext);
  const perfil_alheio = Perfil_Context.alheio;
  const usuario_logado = useSelector(selectAppState("usuario"));
  const [usuario, setUsuario] = useState({});
  useEffect(() => {
    if (Perfil_Context.alheio) {
      setUsuario(Perfil_Context.usuario);
    } else {
      setUsuario(usuario_logado);
    }
  }, [Perfil_Context, usuario_logado]);
  const { exibirFoto2ASerAlterada, alterarFotoDeCapa } = useUsuario();
  const fotoCapaInicial = usuario.foto_capa || "";
  const inputFile = useRef();
  const [fotoDeCapa, setFotoDeCapa] = useState("");
  const LoadingLinear = useLinearProgress();

  useEffect(() => {
    setFotoDeCapa(fotoCapaInicial);
  }, [fotoCapaInicial]);

  function cancelar() {
    setFotoDeCapa(fotoCapaInicial);
    inputFile.current.value = "";
  }
  return (
    <>
      <LinearProgress aberto={LoadingLinear.loading} />
      <Perfil.Banner img={fotoDeCapa}>
        <div>
          {!perfil_alheio && (
            <>
              <div>
                {!fotoDeCapa.includes("base64") && (
                  <Button
                    startIcon={<FaCamera />}
                    onClick={() => inputFile.current.click()}
                    color="default"
                    variant="contained"
                  >
                    Alterar foto de capa
                  </Button>
                )}
                {fotoDeCapa.includes("base64") && (
                  <Box>
                    <Button
                      startIcon={<Done />}
                      onClick={() =>
                        alterarFotoDeCapa(
                          inputFile.current.files[0],
                          cancelar,
                          LoadingLinear
                        )
                      }
                      color="default"
                      variant="contained"
                    >
                      Concluir
                    </Button>
                    <Button
                      startIcon={<Clear />}
                      onClick={cancelar}
                      color="default"
                      variant="contained"
                    >
                      Cancelar
                    </Button>
                  </Box>
                )}
              </div>
              <input
                type="file"
                accept="image/*"
                ref={inputFile}
                hidden
                onChange={(e) => exibirFoto2ASerAlterada(e, setFotoDeCapa)}
              />
            </>
          )}
        </div>
      </Perfil.Banner>
    </>
  );
}
