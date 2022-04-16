import React from "react";
import Box from "@material-ui/core/Box";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import VerERemover from "./VerERemover";

export default function Publicacao({ nomeUsuario, children }) {
  return (
    <ListItem>
      <ListItemText
        primary={nomeUsuario || "Nome do usuario"}
        secondary={children}
      />

      <Box width="100%" display="flex" justifyContent="flex-end">
        <VerERemover remover={null} setRemovido={() => null} removido={false} />
      </Box>
    </ListItem>
  );
}
