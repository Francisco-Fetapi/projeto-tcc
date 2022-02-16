import React, { useEffect, useRef, useState } from "react";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Tooltip from "@material-ui/core/Tooltip";
import { Text } from "~/styles";
import IconButton from "@material-ui/core/IconButton";

import Pagination from "@material-ui/lab/Pagination";

import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import DoneIcon from "@material-ui/icons/Done";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import Foto from "./Foto";

import Confirmar from "../Modals/ModalConfirmar";

import useUsuario from "~/hooks/useUsuario";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useParams } from "react-router-dom";

export default function Fotos() {
  const [paginate, setPaginate] = useState({
    current_page: 1,
    last_page: 1,
    total: 0,
    data: [],
  });
  const [fotos, setFotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [confirm, setConfirm] = useState(false);
  const [fotoSelecionada, setFotoSelecionada] = useState(null);
  const inputFile = useRef();
  const [preview, setPreview] = useState("");
  const { exibirFoto2ASerAlterada, Galeria } = useUsuario();
  const { id } = useParams();

  const handleChange = (event, value) => {
    setPaginate({ ...paginate, current_page: value });
  };
  useEffect(() => {
    if (preview === "") inputFile.current.value = "";
  }, [preview]);
  useEffect(() => {
    Galeria.get({ setPaginate, setLoading, id }, paginate.current_page);
  }, [paginate.current_page, id]);

  useEffect(() => {
    setFotos(paginate.data);
  }, [paginate.data]);

  function apagarFoto(id) {
    console.log(id);
    Galeria.eliminar({ setPaginate, setLoading, setConfirm, paginate }, id);
  }

  return (
    <Paper className="fotos">
      {loading && (
        <Box className="progress">
          <CircularProgress />
        </Box>
      )}
      <Box display="flex" justifyContent="space-between">
        <Box>
          <Text variant="h6">Galeria de fotos</Text>
          <Text variant="subtitle2" color="textSecondary">
            {paginate.total
              ? `${paginate.total} foto(s)`
              : loading
              ? "Carregando..."
              : "Nenhuma foto na galeria"}
          </Text>
        </Box>
        {(fotos.length > 0 || preview) && !id && (
          <Box>
            {!preview && (
              <Tooltip title="Adicionar foto" arrow>
                <IconButton onClick={() => inputFile.current.click()}>
                  <AddIcon />
                </IconButton>
              </Tooltip>
            )}
            {preview && !loading && (
              <Box display="flex">
                <Tooltip title="Cancelar" arrow>
                  <IconButton onClick={() => setPreview("")}>
                    <CloseIcon />
                  </IconButton>
                </Tooltip>
                <Box>
                  <Tooltip title="Guardar foto" arrow>
                    <IconButton
                      onClick={() =>
                        Galeria.guardar(inputFile.current.files[0], {
                          setLoading,
                          setPaginate,
                          setPreview,
                        })
                      }
                    >
                      <DoneIcon />
                    </IconButton>
                  </Tooltip>
                </Box>
              </Box>
            )}
          </Box>
        )}
      </Box>
      {!loading && (
        <Box mt={2} className="fotos-grid galeria">
          {preview && <Foto img={preview} preview />}
          {preview &&
            fotos.length > 0 &&
            fotos.slice(0, 5).map((img, key) => (
              <Foto
                img={img.url_resized}
                imgFull={img.url_original}
                key={key}
                tempo={img.tempo}
                selecionar={() => {
                  setConfirm(true);
                  setFotoSelecionada(img.id);
                }}
              />
            ))}
          {!preview &&
            !loading &&
            fotos.map((img, key) => (
              <Foto
                img={img.url_resized}
                imgFull={img.url_original}
                key={key}
                tempo={img.tempo}
                selecionar={() => {
                  setConfirm(true);
                  setFotoSelecionada(img.id);
                }}
              />
            ))}
        </Box>
      )}

      {fotos.length === 0 && !preview && (
        <Box
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          mt={-7}
          className="msg-sem-foto"
        >
          {!loading && paginate.data.length === 0 && (
            <>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                {!id ? (
                  <>
                    <AddAPhotoIcon
                      onClick={() => inputFile.current.click()}
                      className="foto"
                    />
                    <Text
                      variant="subtitle2"
                      color="textSecondary"
                      align="center"
                    >
                      Adicione sua primeira foto clicando no icone acima.
                    </Text>
                  </>
                ) : (
                  <>
                    <AddAPhotoIcon
                      className="foto"
                      style={{ pointerEvents: "none" }}
                    />
                    <Text
                      variant="subtitle2"
                      color="textSecondary"
                      align="center"
                    >
                      Sem fotos até o momento.
                    </Text>
                  </>
                )}
              </Box>
              {!id ? (
                <Text variant="subtitle2" color="textSecondary" align="center">
                  Esse é o espaço onde você poderá guardar as fotos de filmes e
                  seriados que mais te agradam.
                </Text>
              ) : (
                <Text variant="subtitle2" color="textSecondary" align="center">
                  Esse é o espaço onde este usuário guardará as fotos de filmes
                  e seriados que mais lhe agradam.
                </Text>
              )}
            </>
          )}
        </Box>
      )}

      <input
        type="file"
        accept="image/*"
        ref={inputFile}
        hidden
        onChange={(e) => exibirFoto2ASerAlterada(e, setPreview)}
      />
      {paginate.total > 6 && (
        <Box className="paginate" display="flex" justifyContent="center">
          <Pagination
            count={paginate.last_page}
            page={paginate.current_page}
            onChange={handleChange}
            variant="outlined"
            shape="rounded"
          />
        </Box>
      )}
      <Confirmar
        open={confirm}
        onClose={() => setConfirm(false)}
        onSim={() => apagarFoto(fotoSelecionada)}
      >
        Estás prestes a apagar esta foto. Esse processo é irreversivel.
      </Confirmar>
    </Paper>
  );
}
