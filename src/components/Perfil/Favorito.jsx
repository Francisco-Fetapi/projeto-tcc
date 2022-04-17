import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import VerERemover from "./VerERemover";
import { Text } from "~/styles";
import { mostrarXCharOntText } from "~/helpers";

export default function Favorito({ movie, removerMovie }) {
  const [removido, setRemovido] = useState(false);

  return (
    <Box
      className="favorito-grid"
      mt={0.3}
      style={{
        opacity: removido ? "0.5" : "1",
        pointerEvents: removido ? "none" : "initial",
      }}
    >
      <Box className="img">
        <img src={movie.poster_path} alt={movie.name} />
      </Box>
      <Box className="info">
        <Text variant="h6" style={{ fontSize: 16 }}>
          {mostrarXCharOntText(movie.name, 20)}
        </Text>
        <Box>
          <Text variant="subtitle2" color="textSecondary">
            {mostrarXCharOntText(movie.overview, 40) ||
              "Sinopse não disponivel"}
          </Text>
        </Box>
        <Box mt={0.5} style={{ zoom: "0.9" }}>
          <Text align="right" variant="subtitle2" color="textSecondary">
            Favoritado {movie.tempo}
          </Text>
        </Box>

        <Box width="100%" mt={0.5} display="flex" justifyContent="flex-end">
          <VerERemover
            movie={movie}
            remover={removerMovie}
            setRemovido={setRemovido}
            removido={removido}
          />
        </Box>
      </Box>
    </Box>
  );
}
