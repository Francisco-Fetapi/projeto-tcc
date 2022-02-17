import React, { useState } from "react";
import { Atores } from "~/styles/pages/Atores";
import AtorItem from "./AtorItem";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";

export default function AtoresList({ atores }) {
  const [loading, setLoading] = useState(true);
  return (
    <div>
      <Atores.List>
        {atores.map((ator, key) => (
          <AtorItem key={key} ator={ator} />
        ))}
      </Atores.List>
      {loading && (
        <Box mt={5} mb={2} display="flex" justifyContent="center">
          <CircularProgress color="inherit" />
        </Box>
      )}
    </div>
  );
}
