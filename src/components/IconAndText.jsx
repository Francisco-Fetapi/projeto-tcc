import React from "react";
import { Text } from "../styles";
import Box from "@material-ui/core/Box";

export default function IconAndText({ Icon, label }) {
  return (
    <Box
      className="IconAndText"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Icon />
      <Text
        align="center"
        variant="h4"
        style={{ paddingLeft: 20, textTransform: "uppercase" }}
      >
        {label}
      </Text>
    </Box>
  );
}
