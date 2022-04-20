import React, { useContext, useEffect, useState } from "react";
import { Text } from "~/styles";
import { Movie } from "~/styles/pages/Movie";
import Chip from "@material-ui/core/Chip";
import Box from "@material-ui/core/Box";
import CalendarToday from "@material-ui/icons/CalendarToday";
import StarIcon from "@material-ui/icons/Star";

import { FaEye } from "react-icons/fa";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FormatListBulleted from "@material-ui/icons/FormatListBulleted";
import IconButton from "@material-ui/core/IconButton";
import { MovieContext } from "./MainContent";
import { useLocation } from "react-router-dom";
import useMovie from "~/hooks/useMovie";
import { departamento } from "~/helpers";

export default function InfoGerais() {
  const { movie, elenco } = useContext(MovieContext);
  const { pathname } = useLocation();
  const eh_filme = pathname.includes("filmes");
  const { toggleFavoritarMovie, toggleGuardarMovie } = useMovie();
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState({
    favoritei: movie.favoritei,
    quantos_favoritaram: 0,
    guardei: movie.guardei,
    quantos_guardaram: 0,
  });
  function guardar() {
    toggleGuardarMovie(
      { setInfo, setLoading, movie },
      movie.id,
      movie.media_type
    );
  }
  function favoritar() {
    toggleFavoritarMovie(
      { setInfo, setLoading, movie },
      movie.id,
      movie.media_type
    );
  }
  const [elencoP, setElencoP] = useState([]);
  useEffect(() => {
    const escritor = elenco.crew.find(
      (person) => person.known_for_department === departamento("Writing")
    );
    const produtor = elenco.crew.find(
      (person) => person.known_for_department === departamento("Production")
    );
    const diretor = elenco.crew.find(
      (person) => person.known_for_department === departamento("Directing")
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
        {movie.number_of_seasons && (
          <Chip label={movie.number_of_seasons + " temporadas"} />
        )}
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
            {movie.overview || "Sinopse não disponivel"}
          </Text>
        </Box>
      </Box>
      <Box mt={2} className="lista-generos">
        {movie.genres?.map((genre) => (
          <Chip variant="outlined" key={genre.id} label={genre.name} />
        ))}
      </Box>
      <Box
        mt={2}
        className="btn-actions"
        style={{
          opacity: loading ? 0.7 : 1,
          pointerEvents: loading ? "none" : "initial",
        }}
      >
        <IconButton title="Favoritar" onClick={favoritar}>
          <FavoriteIcon style={{ color: info.favoritei ? "#e41e3f" : null }} />
        </IconButton>

        <IconButton title="Ver mais tarde" onClick={guardar}>
          <FormatListBulleted
            style={{ color: info.guardei ? "#435fec" : null }}
          />
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
