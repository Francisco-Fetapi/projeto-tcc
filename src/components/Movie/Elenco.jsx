import React, { useEffect, useState } from "react";
import { Text } from "~/styles";
import { Movie } from "~/styles/pages/Movie";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import useTMDB from "~/hooks/useTMDB";

export default function Elenco({ title, items }) {
  const [elenco, setElenco] = useState(true);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const TMDB = useTMDB();
  const { pathname } = useLocation();
  const eh_filme = pathname.includes("filmes");

  useEffect(() => {
    if (eh_filme) {
      TMDB.getCreditsMovie({ setLoading, setElenco }, id);
    } else {
      TMDB.getCreditsTv({ setLoading, setElenco }, id);
    }
  }, []);
  console.log(elenco);

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
      {loading && <Loading />}
      {!loading && (
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
      )}
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

function Loading() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="50px"
      p={3}
    >
      <CircularProgress />
    </Box>
  );
}
