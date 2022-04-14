import React, { useRef, useState, createContext } from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import TextField1 from "../TextField1";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import { FaPhotoVideo, FaEye } from "react-icons/fa";
import Send from "@material-ui/icons/Send";

import { Formik, Form } from "formik";

import { useSelector } from "react-redux";
import { selectAppState } from "~/store/App.selectors";
import ModalAssistindo from "../Modals/ModalAssistindo";
import Skeleton from "@material-ui/lab/Skeleton";
import { Text, Link } from "~/styles";
import { mostrarXCharOntText } from "~/helpers";

export const AddPostContext = createContext();

export default function FormAddPost() {
  const usuario = useSelector(selectAppState("usuario"));
  const fotoPerfil = usuario.foto_perfil;
  const inputFile = useRef();
  const [imgsPreview, setImgsPreview] = useState([]);
  const [modalAssistindo, setModalAssistindo] = useState(false);
  const [movie, setMovie] = useState({});
  const link = {
    movie: "filmes",
    tv: "series",
  };

  function escolherFoto() {
    const file = inputFile.current;
    if (file) {
      console.log(file);
      file.click();
      file.onchange = (e) => {
        setImgsPreview(e.target.files);
      };
    }
  }

  const a_carregar = !usuario.id;
  return (
    <Paper className="paper" elevation={!a_carregar ? 3 : 0}>
      <AddPostContext.Provider
        value={{
          setMovie,
          setModalAssistindo,
        }}
      >
        <Formik
          initialValues={{
            post: "",
          }}
        >
          <Form autoComplete="off">
            <Box display="flex" alignItems="flex-start">
              {a_carregar && (
                <Skeleton
                  variant="circle"
                  width={64}
                  height={54}
                  style={{ marginRight: 10 }}
                  className="img-post"
                />
              )}
              {!a_carregar && (
                <img
                  src={fotoPerfil}
                  alt="imagem do usuario"
                  style={{ width: 64, height: 54 }}
                  className="img-post"
                />
              )}

              {a_carregar && (
                <Skeleton variant="rect" width="100%" height={86} />
              )}
              {!a_carregar && (
                <TextField1
                  multiline
                  maxRows={10}
                  id="post"
                  fullWidth
                  placeholder="Escreva alguma coisa e publique"
                />
              )}
            </Box>
            <Box mt={1} display="flex" justifyContent={"center"}>
              {a_carregar && (
                <Skeleton variant="rect" width={124.83} height={36.5} />
              )}
              {!a_carregar && (
                <Button endIcon={<Send />} variant="contained" color="primary">
                  Publicar
                </Button>
              )}
            </Box>

            <Box mt={2} display="flex" justifyContent="space-between">
              <Text color="textSecondary" variant="subtitle2">
                {imgsPreview.length > 0 && (
                  <>{imgsPreview.length} imagem(s) selecionada(s)</>
                )}
              </Text>

              {movie.id && (
                <Text color="textSecondary" variant="subtitle2">
                  A assistir &nbsp;
                  <Link to={`/${link[movie.media_type]}/${movie.id}`}>
                    {mostrarXCharOntText(movie.name || movie.title, 25)}
                  </Link>
                </Text>
              )}
            </Box>
            <Box mt={1}>{!a_carregar && <Divider />}</Box>
            <Box className="button-group">
              {a_carregar && (
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Skeleton
                    variant="rect"
                    width="50%"
                    height={22}
                    style={{ margin: 7 }}
                  />
                  <Skeleton
                    variant="rect"
                    width="50%"
                    height={22}
                    style={{ margin: 7 }}
                  />
                </Box>
              )}
              {!a_carregar && (
                <ButtonGroup fullWidth variant="text" color="primary">
                  {/* <Button startIcon={<FaVideo />} className="buttons-post-videos">
                  Videos
                </Button> */}
                  <Button startIcon={<FaPhotoVideo />} onClick={escolherFoto}>
                    Foto
                  </Button>
                  <input
                    type="file"
                    style={{ display: "none" }}
                    ref={inputFile}
                    multiple
                  />
                  <Button
                    startIcon={<FaEye />}
                    onClick={() => setModalAssistindo(true)}
                  >
                    A Assistir
                  </Button>
                  {/* <Button startIcon={<AddCircle />}>Mais</Button> */}
                </ButtonGroup>
              )}
            </Box>
          </Form>
        </Formik>
        <ModalAssistindo open={modalAssistindo} setModal={setModalAssistindo} />
      </AddPostContext.Provider>
    </Paper>
  );
}
