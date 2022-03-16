import React, { useContext } from "react";
import { Text } from "~/styles";
import { Movie } from "~/styles/pages/Movie";
import Box from "@material-ui/core/Box";
import Chip from "@material-ui/core/Chip";
import CircularProgress from "@material-ui/core/CircularProgress";
import { MovieContext } from "./MainContent";
// import Button from "@material-ui/core/Button";
// import { useNavigate } from "react-router-dom";

export default function Keywords() {
  const { movie, keywords, loadingKeywords } = useContext(MovieContext);
  const on_internet = navigator.onLine;
  return (
    <Movie.Keywords
      imagem={on_internet ? movie.backdrop_path : "/img/" + movie.backdrop_path}
      carregando={loadingKeywords}
    >
      {!loadingKeywords && (
        <Box className="container">
          <Box mb={2}>
            <Text
              variant="h4"
              style={{ fontWeight: "bolder", textShadow: "1px 1px 1px #111" }}
            >
              Palavras-chave
            </Text>
          </Box>
          <Box maxWidth={500}>
            {keywords.map((item) => (
              <Chip label={item.name} clickable key={item.id} />
            ))}
          </Box>
        </Box>
      )}
      {loadingKeywords && (
        <Box
          width="100%"
          height="100%"
          style={{ background: "rgba(0,0,0,.75)" }}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <CircularProgress />
          <Text
            style={{ paddingTop: 5, zoom: 0.9 }}
            color="textSecondary"
            variant="subtitle2"
          >
            Carregando palavas-chave
          </Text>
        </Box>
      )}
    </Movie.Keywords>
  );
}
