import React from "react";
import Box from "@material-ui/core/Box";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemText from "@material-ui/core/ListItemText";
// import ListItemAvatar from "@material-ui/core/ListItemAvatar";
// import Avatar from "@material-ui/core/Avatar";
import VerERemover from "./VerERemover";
import { Text } from "~/styles";

export default function Favorito({ imgMovie }) {
  return (
    <Box className="favorito-grid" mt={3.3}>
      <Box className="img">
        <img src={`./img/${imgMovie}`} alt="Matrix" />
      </Box>
      <Box className="info">
        <Text variant="h6">Nome do Movie</Text>
        <Box>
          <Box display="flex" alignItems="center" component="figure" mr={1.2}>
            <img src="./img/user1.jpg" alt="user" />
            <img src="./img/user4.jpg" alt="user" />
            <img src="./img/user3.jpg" alt="user" />
          </Box>
          <Text variant="subtitle2" color="textSecondary">
            João e 5 outras pessoas favoritaram
          </Text>
        </Box>

        <Box width="100%" display="flex" justifyContent="flex-end">
          <VerERemover />
        </Box>
      </Box>
    </Box>
  );
}
