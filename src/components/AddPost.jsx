import React from "react";
import { Text } from "../styles";
import Box from "@material-ui/core/Box";
import { FaChevronDown } from "react-icons/fa";
import FormAddPost from "./Forms/FormAddPost";

export default function AddPost() {
  return (
    <Box className="AddPost" mb={8}>
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
        <FormAddPost />
      </Box>
    </Box>
  );
}
