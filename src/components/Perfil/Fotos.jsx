import React from "react";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Tooltip from "@material-ui/core/Tooltip";
import { Text } from "../../styles";
import IconButton from "@material-ui/core/IconButton";

import Pagination from "@material-ui/lab/Pagination";

import AddIcon from "@material-ui/icons/Add";
import Foto from "./Foto";

export default function Fotos() {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <Paper className="fotos">
      <Box display="flex" justifyContent="space-between">
        <Box>
          <Text variant="h6">Fotos da Galeria</Text>
          <Text variant="subtitle2" color="textSecondary">
            9 fotos
          </Text>
        </Box>
        <Box>
          <Tooltip title="Adicionar foto" arrow>
            <IconButton>
              <AddIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      <Box mt={2} className="fotos-grid galeria">
        {[1, 5, 3, 4, 3, 1].map((img, key) => (
          <Foto img={`./img/user${img}.jpg`} key={key} tempo={key + 1} />
        ))}
      </Box>
      <Box mt={2.3} display="flex" justifyContent="center">
        <Pagination
          count={5}
          page={page}
          onChange={handleChange}
          variant="outlined"
          shape="rounded"
        />
      </Box>
    </Paper>
  );
}
