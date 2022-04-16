import React from "react";
import Box from "@material-ui/core/Box";
import VerERemover from "./VerERemover";
import { Text } from "~/styles";
import { formatarData, mostrarXCharOntText } from "~/helpers";

export default function Favorito({ movie }) {
  return (
    <Box className="favorito-grid" mt={3.3}>
      <Box className="img">
        <img src={movie.poster_path} alt={movie.name} />
      </Box>
      <Box className="info">
        <Text variant="h6" style={{ fontSize: 16 }}>
          {mostrarXCharOntText(movie.name, 20)}
        </Text>
        <Box>
          <Text variant="subtitle2" color="textSecondary">
            {mostrarXCharOntText(movie.overview, 40)}
          </Text>
        </Box>
        <Box mt={0.5}>
          <Text align="right" variant="subtitle2" color="textSecondary">
            Favoritado em {formatarData(movie.favoritado_em)}
          </Text>
        </Box>

        <Box width="100%" display="flex" justifyContent="flex-end">
          <VerERemover />
        </Box>
      </Box>
    </Box>
  );
}
