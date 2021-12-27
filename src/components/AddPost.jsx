import React from "react";
import { Text } from "../styles";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import TextField1 from "./TextField1";
import Divider from "@material-ui/core/Divider";
import { FaChevronDown, FaVideo, FaPhotoVideo, FaEye } from "react-icons/fa";
import Send from "@material-ui/icons/Send";
import AddCircle from "@material-ui/icons/AddCircle";

export default function AddPost() {
  return (
    <Box className="AddPost">
      <Box display="flex" alignItems="center">
        <Text variant="body1" color="textSecondary">
          Publique algo para:
        </Text>
        <Box className="publico" ml={1} display="flex" alignItems="center">
          <Text variant="body1" color="primary">
            Amigos
          </Text>
          <Box ml={0.5} display="flex" alignItems="center">
            <FaChevronDown />
          </Box>
        </Box>
      </Box>
      <Box mt={1}>
        <Paper className="paper" elevation={3}>
          <Box display="flex" alignItems="flex-start">
            <img src="./img/user.jpg" alt="logo user" />
            <TextField1
              multiline
              rowsMax={10}
              id="post"
              fullWidth
              placeholder="Escreva alguma coisa e publique"
            />
          </Box>
          <Box mt={1} display="flex" justifyContent={"center"}>
            <Button endIcon={<Send />} variant="contained" color="primary">
              Publicar
            </Button>
          </Box>
          <Box mt={1}>
            <Divider />
          </Box>
          <Box className="button-group">
            <ButtonGroup fullWidth variant="text" color="primary">
              <Button startIcon={<FaVideo />}>Videos</Button>
              <Button startIcon={<FaPhotoVideo />}>Foto</Button>
              <Button startIcon={<FaEye />}>A Assistir</Button>
              <Button startIcon={<AddCircle />}>Mais</Button>
            </ButtonGroup>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
