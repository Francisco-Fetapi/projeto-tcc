import React from "react";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import { Text } from "../../styles";
import Favorito from "./Favorito";

export default function Favoritos() {
  return (
    <List mt={3} className="favoritos">
      <Box mb={2}>
        <Text variant="h6">FAVORITOS</Text>
      </Box>
      <Box>
        {["matrix.jpg", "TWD.jpg", "lucifer.jpg"].map((item) => (
          <Favorito key={item} imgMovie={item} />
        ))}
      </Box>
    </List>
  );
}
