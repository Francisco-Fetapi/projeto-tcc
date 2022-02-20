import React from "react";
// import { Text } from "~/styles";
import { Movie } from "~/styles/pages/Movie";
// import Box from "@material-ui/core/Box";
import Banner from "./Banner";
import Elenco from "./Elenco";
import Keywords from "./Keywords";

export default function MainContent() {
  const elenco = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
  const keywords =
    `mother​,based on novel or book​, beach​, greece​, daughter​, vacation​, doll​, motherhood​, woman, director`.split(
      ","
    );

  return (
    <Movie.Main>
      <Banner />
      <Elenco title="Elenco principal" items={elenco} />
      <Elenco title="Equipe Técnica" items={elenco.reverse()} />
      <Keywords keywords={keywords} />
      {/* <Text>Movie</Text> */}
    </Movie.Main>
  );
}
