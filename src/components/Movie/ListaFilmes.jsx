import React from "react";
import { Text } from "~/styles";
import { Movie } from "~/styles/pages/Movie";
import Box from "@material-ui/core/Box";
import { mostrarXCharOntText } from "~/helpers";
// import Button from "@material-ui/core/Button";
// import { useNavigate } from "react-router-dom";

export default function ListaFilmes({ title, filmes }) {
  return (
    <Movie.Lista>
      <Box>
        <Text
          variant="h6"
          style={{ fontWeight: "bolder", textTransform: "uppercase" }}
        >
          {title}
        </Text>
      </Box>

      <Box mt={3} className="filmes">
        {filmes.map((filme, key) => (
          <Filme img={filme.img} nome={filme.nome} key={key} />
        ))}
      </Box>
    </Movie.Lista>
  );
}

function Filme({ img, nome }) {
  return (
    <Box className="filme">
      <img src={`/img/${img}`} alt={nome} />
      <Box component="figcaption">{mostrarXCharOntText(nome, 12)}</Box>
    </Box>
  );
}
