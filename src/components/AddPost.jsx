import React from "react";
import { Text } from "../styles";
import Box from "@material-ui/core/Box";
import { FaChevronDown } from "react-icons/fa";
import FormAddPost from "./Forms/FormAddPost";

import { useSelector } from "react-redux";
import Skeleton from "@material-ui/lab/Skeleton";
import { selectAppState } from "../store/App.selectors";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export default function AddPost() {
  const usuario = useSelector(selectAppState("usuario"));
  const a_carregar = !usuario.id;

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box className="AddPost" mb={8}>
      {!a_carregar && (
        <Box display="flex" alignItems="center">
          <Text variant="body1" color="textSecondary">
            Publique algo para:
          </Text>
          <Box
            className="publico"
            ml={1}
            display="flex"
            alignItems="center"
            onClick={handleClick}
          >
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
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Amigos</MenuItem>
        <MenuItem onClick={handleClose}>Público</MenuItem>
      </Menu>
    </Box>
  );
}
