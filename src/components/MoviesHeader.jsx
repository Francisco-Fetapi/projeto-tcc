import React from "react";
import { Text, Movie } from "~/styles";
// import Box from "@material-ui/core/Box";

export default function MoviesHeader({ pagina, children }) {
  return (
    <Movie.Container>
      <Text variant="h5">{pagina.toUpperCase()}</Text>
      <Text variant="subtitle2" color="textSecondary">
        {children}
      </Text>
    </Movie.Container>
  );
}
