import React from "react";
import { Text } from "~/styles";
import { Movie } from "~/styles/pages/Movie";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";

export default function Elenco({ title, items }) {
  return (
    <Movie.Elenco>
      <Box
        display="flex"
        // justifyContent="space-between"
        alignItems="center"
        // pr={7}
      >
        <Text
          variant="h6"
          style={{ fontWeight: "bolder", textTransform: "uppercase" }}
        >
          {title}
        </Text>
        <Box ml={1} style={{ zoom: 0.7 }} position="relative" bottom={-12}>
          <Button
            variant="outlined"
            size="small"
            color="default"
            disableElevation
          >
            Ver mais
          </Button>
        </Box>
      </Box>
      <Box mt={2} className="slider-elenco">
        {items.map((item, key) => (
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
