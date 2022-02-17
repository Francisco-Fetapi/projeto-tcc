import React from "react";
import { Text, Movie } from "~/styles";
// import Box from "@material-ui/core/Box";

export default function MoviesHeader({ pagina }) {
  return (
    <Movie.Container>
      <Text variant="h5">{pagina.toUpperCase()}</Text>
      <Text variant="subtitle2" color="textSecondary">
        Veja as informações das séries que mais gostas e interaja com outros
        usuários acerca delas. Além de ver, você também pode guardar e marcar
        uma série como favorita.
      </Text>
    </Movie.Container>
  );
}
