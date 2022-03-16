import React, { useContext, useEffect, useState } from "react";
import { Text } from "~/styles";
import { Movie } from "~/styles/pages/Movie";
import Chip from "@material-ui/core/Chip";
import Box from "@material-ui/core/Box";
import CalendarToday from "@material-ui/icons/CalendarToday";
import StarIcon from "@material-ui/icons/Star";

import { FaHeart, FaList, FaEye } from "react-icons/fa";
import IconButton from "@material-ui/core/IconButton";
import { MovieContext } from "./MainContent";
import { useLocation } from "react-router-dom";

export default function InfoGerais() {
  const { movie, elenco } = useContext(MovieContext);
  const { pathname } = useLocation();
  const eh_filme = pathname.includes("filmes");
  const [elencoP, setElencoP] = useState([]);
  useEffect(() => {
    const escritor = elenco.crew.find(
      (person) => person.known_for_department === "Writing"
    );
    const produtor = elenco.crew.find(
      (person) => person.known_for_department === "Production"
    );
    const diretor = elenco.crew.find(
      (person) => person.known_for_department === "Directing"
    );
    if (escritor && produtor && diretor) {
      setElencoP([escritor, produtor, diretor]);
    }
  }, [elenco, window.location.href]);

  return (
    <Movie.Info>
      <Box className="header-info1">
        <Chip label={eh_filme ? "Filme" : "Série"} />
        <Chip label={movie.status} />
        <Chip
          label={new Date(
            movie.release_date || movie.first_air_date
          ).toLocaleDateString()}
          icon={<CalendarToday />}
        />
      </Box>
      <Text variant="h4">{movie.title || movie.name}</Text>
      <Box className="header-info2">
        <Chip
          label={movie.original_language}
          variant="outlined"
          style={{ textTransform: "uppercase" }}
        />
        <Text variant="h6" color="primary">
          {movie.original_title || movie.original_name}
        </Text>
        <Box ml={2} display="flex" alignItems="center">
          <Box>
            <StarIcon style={{ color: "rgb(204, 204, 50)" }} />
          </Box>
          <Box ml={0.25}>
            <Text>{movie.vote_average}/10</Text>
          </Box>
        </Box>
      </Box>

      <Box mt={3} maxWidth={550}>
        <Text variant="h6">Sinopse</Text>
        <Box mt={1} style={{ maxHeight: 110, overflow: "auto" }}>
          <Text variant="body2" color="textSecondary">
            {movie.overview}
          </Text>
        </Box>
      </Box>

      <Box mt={2} className="lista-generos">
        {movie.genres?.map((genre) => (
          <Chip variant="outlined" key={genre.id} label={genre.name} />
        ))}
      </Box>

      <Box mt={2} className="btn-actions">
        <IconButton title="Favoritar">
          <FaHeart />
        </IconButton>

        <IconButton title="Ver mais tarde">
          <FaList />
        </IconButton>
        <IconButton title="Ver trailer">
          <FaEye />
        </IconButton>
      </Box>

      <Box mt={2} className="card-elenco-container">
        {elencoP.map((person) => (
          <CardElenco
            key={person.id}
            nome={person.name}
            elenco={person.known_for_department}
          />
        ))}
      </Box>
    </Movie.Info>
  );
}

function CardElenco({ nome, elenco }) {
  return (
    <Box className="card-elenco" display="flex" flexDirection="column">
      <Box>
        <Text>{nome}</Text>
      </Box>
      <Box mt={0.7}>
        <Text variant="subtitle2" style={{ fontSize: 12 }}>
          {elenco}
        </Text>
      </Box>
    </Box>
  );
}
