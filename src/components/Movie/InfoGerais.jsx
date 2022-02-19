import React from "react";
import { Text } from "~/styles";
import { Movie } from "~/styles/pages/Movie";
import Chip from "@material-ui/core/Chip";
import Box from "@material-ui/core/Box";
import CalendarToday from "@material-ui/icons/CalendarToday";

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
        <Text>Spider Man - No Way Home</Text>
      </Box>
    </Movie.Info>
  );
}
