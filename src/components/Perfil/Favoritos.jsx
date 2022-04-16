import React, { useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import { Text } from "~/styles";
import Favorito from "./Favorito";
import { useNavigate } from "react-router-dom";
import { selectAppState } from "~/store/App.selectors";
import { useSelector } from "react-redux";
import { makeFavoritosFixedOnScroll } from "~/helpers";
import useMovie from "~/hooks/useMovie";

export default function Favoritos() {
  const navigate = useNavigate();
  const usuario = useSelector(selectAppState("usuario"));
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const { getMoviesFavoritos } = useMovie();
  const movies_ = [
    {
      name: "Homem-Aranha: Sem Volta a Casa",
      poster_path: "./img/matrix.jpg",
      favoritado_em: "2021-11-02",
      media_type: "movie",
      original_language: "EN",
      overview: `Pela primeira vez na história cinematográfica do Homem-Aranha, a identidade do nosso herói amigo da vizinhança é revelada, colocando as suas responsabilidades de super-herói em conflito com a sua vida pessoal/normal e colocando em risco aqueles com quem se preocupa. Quando Peter pede ajuda ao Doutor Estranho para restaurar o seu segredo, o feitiço abre um buraco no seu mundo, libertando os vilões mais poderosos que já lutaram contra o Homem-Aranha em qualquer universo. Agora, Peter terá que superar o seu maior desafio até hoje, que não alterará apenas o seu próprio futuro para sempre, mas também o futuro do Multiverso.`,
    },
  ];
  useEffect(makeFavoritosFixedOnScroll, []);
  useEffect(() => {
    getMoviesFavoritos({ setLoading, setMovies });
  }, []);
  useEffect(() => {
    console.log(movies);
  }, [movies]);

  return (
    <List mt={3} className="favoritos">
      <Box
        mb={2}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text variant="h6">FAVORITOS</Text>
      </Box>
      <Box>
        {movies_.map((item, key) => (
          <Favorito key={key} movie={item} />
        ))}
      </Box>
      <Box mt={1} display="flex" justifyContent="center">
        <Button
          color="primary"
          onClick={() => navigate("/movies-favoritos/" + usuario.id)}
        >
          Visualizar todos
        </Button>
      </Box>
    </List>
  );
}
