import React from "react";
import { Text } from "../styles";
import Box from "@material-ui/core/Box";
import { FaChevronDown } from "react-icons/fa";
import FormAddPost from "./Forms/FormAddPost";

import { useSelector } from "react-redux";
import Skeleton from "@material-ui/lab/Skeleton";
import { selectAll } from "../store/App.selectors";

export default function AddPost() {
  const { usuario } = useSelector(selectAll);
  const a_carregar = !usuario.id;
  return (
    <Box className="AddPost" mb={8}>
      {!a_carregar && (
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
      )}
      {a_carregar && <Skeleton variant="rect" width="60%" height={20} />}

      <Box mt={1}>
        <FormAddPost />
      </Box>
    </Box>
  );
}
