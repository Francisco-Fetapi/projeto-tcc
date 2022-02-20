import React from "react";
// import { Text } from "~/styles";
import { Movie } from "~/styles/pages/Movie";

import Banner from "./Banner";
import Elenco from "./Elenco";
import Galeria from "./Galeria";
import Keywords from "./Keywords";
import ListaFilmes from "./ListaFilmes";

import movies from "~/mock/series.json";
import Footer from "./Footer";

export default function MainContent() {
  const elenco = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
  const keywords =
    `mother​,based on novel or book​, beach​, greece​, daughter​, vacation​, doll​, motherhood​, woman, director`.split(
      ","
    );
  const filmes = movies.concat({ img: "spider-man.jpg", nome: "Spider man 2" });

  return (
    <Movie.Main>
      <Banner />
      <Elenco title="Elenco principal" items={elenco} />
      <Elenco title="Equipe Técnica" items={elenco} />
      <Keywords keywords={keywords} />
      <Galeria />
      <ListaFilmes title="Filmes similares" filmes={filmes} />
      <ListaFilmes title="Filmes recomendados" filmes={filmes} />
      <Footer />
    </Movie.Main>
  );
}
