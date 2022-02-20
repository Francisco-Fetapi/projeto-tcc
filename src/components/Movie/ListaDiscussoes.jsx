import React from "react";
import { Text } from "~/styles";
import { Movie } from "~/styles/pages/Movie";
import Box from "@material-ui/core/Box";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import Posts from "../Posts";

export default function ListaDiscussoes() {
  return (
    <Movie.Discussoes>
      <Box display="flex" justifyContent="space-between">
        <Box>
          <Text variant="h4">Discussões</Text>
        </Box>
        <Box>
          <IconButton>
            <Badge badgeContent={12} max={15}>
              <AddIcon />
            </Badge>
          </IconButton>
        </Box>
      </Box>
      <Box mt={3} className="posts-movie-container">
        <Posts />
      </Box>
    </Movie.Discussoes>
  );
}
