import React from "react";
// import { Text } from "~/styles";
import { Movie } from "~/styles/pages/Movie";
// import Box from "@material-ui/core/Box";
import Banner from "./Banner";
import Elenco from "./Elenco";

export default function MainContent() {
  return (
    <Movie.Main>
      <Banner />
      <Elenco
        title="Elenco principal"
        items={[1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8]}
      />
      <Elenco
        title="Equipe Técnica"
        items={[1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8].reverse()}
      />
      {/* <Text>Movie</Text> */}
    </Movie.Main>
  );
}
