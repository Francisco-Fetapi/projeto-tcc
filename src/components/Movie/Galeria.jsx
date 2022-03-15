import React from "react";
import { Text } from "~/styles";
import { Movie } from "~/styles/pages/Movie";
import Box from "@material-ui/core/Box";
// import Chip from "@material-ui/core/Chip";
// import Button from "@material-ui/core/Button";
// import { useNavigate } from "react-router-dom";

export default function Galeria() {
  return (
    <Movie.Galeria>
      <Box>
        <Text
          variant="h5"
          align="center"
          style={{ fontWeight: "bolder", textTransform: "uppercase" }}
        >
          Galeria
        </Text>
      </Box>

      <Box className="fotos">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item, key) => (
          <img src={`/img/galeria${item}.jpg`} key={key} alt={item} />
        ))}
      </Box>
    </Movie.Galeria>
  );
}
