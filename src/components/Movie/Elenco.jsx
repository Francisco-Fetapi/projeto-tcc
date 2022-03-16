import React, { useContext, useEffect, useState } from "react";
import { Text } from "~/styles";
import { Movie } from "~/styles/pages/Movie";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useNavigate } from "react-router-dom";
import { MovieContext } from "./MainContent";
import Pagination from "@material-ui/lab/Pagination";

export default function Elenco({ title, elenco }) {
  const { loadingElenco } = useContext(MovieContext);
  const per_page = 9;
  const [paginate, setPaginate] = useState({
    start: 0,
    ends: per_page,
    page: 1,
  });

  function handleChange(event, page) {
    setPaginate((paginate_) => {
      return {
        start: page * per_page,
        ends: page * per_page + per_page,
        page,
      };
    });
  }
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
        {/* <Box ml={1} style={{ zoom: 0.7 }} position="relative" bottom={-12}>
          <Button
            variant="outlined"
            size="small"
            color="default"
            disableElevation
          >
            Ver mais
          </Button>
        </Box> */}
      </Box>
      {loadingElenco && <Loading />}
      {!loadingElenco && (
        <>
          <Box mt={2} className="slider-elenco">
            {elenco.slice(paginate.start, paginate.ends).map((person, key) => (
              <CardAtor
                nome1={person.name}
                nome2={person.character || person.department}
                img={person.profile_path}
                id_ator={person.id}
                key={key}
              />
            ))}
          </Box>
          <Box display="flex" justifyContent="center">
            <Pagination
              page={paginate.page}
              count={Math.floor(elenco.length / per_page)}
              onChange={handleChange}
              variant="outlined"
              shape="rounded"
            />
          </Box>
        </>
      )}
    </Movie.Elenco>
  );
}

function CardAtor({ nome1, nome2, img, id_ator }) {
  const navigate = useNavigate();
  return (
    <Box className="card-ator" onClick={() => navigate(`/ator/${id_ator}`)}>
      <img src={img} alt={`${nome1} como ${nome2}`} />
      <Box mt={0.5} component="figcaption">
        <Text align="center">{nome1}</Text>
        <Box>
          <Text align="center" color="textSecondary" style={{ fontSize: 12 }}>
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
