import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Badge from "@material-ui/core/Badge";
import { FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <Box my={3} display="flex" justifyContent="center">
      <Button
        endIcon={
          <Badge badgeContent={12} max={99}>
            <FaEnvelope style={{ zoom: ".9" }} />
          </Badge>
        }
        color="primary"
        variant="contained"
      >
        Ver discussão
      </Button>
    </Box>
  );
}
