import React from "react";
import { Text } from "~/styles";
import { Movie } from "~/styles/pages/Movie";
import Box from "@material-ui/core/Box";
import { useNavigate } from "react-router-dom";

export default function Elenco() {
  return (
    <Movie.Elenco>
      <Text variant="h5">Elenco principal</Text>
      <Box mt={2} className="slider-elenco">
        {[1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8].map((item, key) => (
          <CardAtor
            nome1={`Ator ${item}`}
            nome2={`Protagonista ${item}`}
            img={`ator${item}.jpg`}
            id_ator={key}
            key={key}
          />
        ))}
      </Box>
    </Movie.Elenco>
  );
}

function CardAtor({ nome1, nome2, img, id_ator }) {
  const navigate = useNavigate();
  return (
    <Box className="card-ator" onClick={() => navigate(`/ator/${id_ator}`)}>
      <img src={`/img/${img}`} alt={`${nome1} como ${nome2}`} />
      <Box mt={0.5} component="figcaption">
        <Text align="center">{nome1}</Text>
        <Box>
          <Text align="center" color="textSecondary" fontSize={12}>
            {nome2}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
