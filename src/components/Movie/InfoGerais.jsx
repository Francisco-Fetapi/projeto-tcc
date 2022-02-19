import React from "react";
import { Text } from "~/styles";
import { Movie } from "~/styles/pages/Movie";
import Chip from "@material-ui/core/Chip";
import Box from "@material-ui/core/Box";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import CalendarToday from "@material-ui/icons/CalendarToday";
import StarIcon from "@material-ui/icons/Star";

import { FaHeart, FaList, FaEye } from "react-icons/fa";

export default function InfoGerais() {
  return (
    <Movie.Info>
      <Box className="header-info1">
        <Chip label="Filme" />
        <Chip label="Released" />
        <Chip label="22/12/2021" icon={<CalendarToday />} />
      </Box>
      <Text variant="h4">Homem-Aranha: Sem Volta a Casa (2021)</Text>
      <Box className="header-info2">
        <Chip label="EN" variant="outlined" />
        <Text variant="h6" color="primary">
          Spider Man - No Way Home
        </Text>
        <Box ml={2} display="flex" alignItems="center">
          <Box>
            <StarIcon style={{ color: "rgb(204, 204, 50)" }} />
          </Box>
          <Box ml={0.25}>
            <Text>7/10</Text>
          </Box>
        </Box>
      </Box>

      <Box mt={3} maxWidth={550}>
        <Text variant="h6">Sinopse</Text>
        <Box mt={1}>
          <Text variant="body2" color="textSecondary">
            Peter Parker is unmasked and no longer able to separate his normal
            life from the high-stakes of being a Super Hero. When he asks for
            help from Doctor Strange the stakes become even more dangerous,
            forcing him to discover what it truly means to be Spider-Man.
          </Text>
        </Box>
      </Box>

      <Box mt={2} className="lista-generos">
        <Chip variant="outlined" label="Ação" />
        <Chip variant="outlined" label="Aventura" />
        <Chip variant="outlined" label="Ficção Cientifica" />
      </Box>

      <Box mt={2} className="btn-actions">
        <ButtonGroup size="small" color="default" variant="outlined">
          <Button startIcon={<FaHeart />}>Favoritar</Button>
          <Button startIcon={<FaList />}>Ver mais tarde</Button>
          <Button startIcon={<FaEye />}>Ver trailer</Button>
        </ButtonGroup>
      </Box>

      <Box mt={2} className="card-elenco-container">
        <CardElenco nome="Stan Lee" elenco="Characters" />
        <CardElenco nome="Steve Ditko" elenco="Characters" />
        <CardElenco nome="Erik Sommers" elenco="Writers" />
        <CardElenco nome="Chris McKenna" elenco="Writers" />
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
