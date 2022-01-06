import React from "react";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Tooltip from "@material-ui/core/Tooltip";
import { Text } from "../../styles";
import IconButton from "@material-ui/core/IconButton";

import Pagination from "@material-ui/lab/Pagination";

import AddIcon from "@material-ui/icons/Add";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import Foto from "./Foto";

export default function Fotos() {
  const [page, setPage] = React.useState(1);
  // const fotos = [1, 5, 3, 4, 3, 1];
  const fotos = [];
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <Paper className="fotos">
      <Box display="flex" justifyContent="space-between">
        <Box>
          <Text variant="h6">Fotos da Galeria</Text>
          <Text variant="subtitle2" color="textSecondary">
            {fotos.length ? `${fotos.length} fotos` : "Nenhuma foto na galeria"}
          </Text>
        </Box>
        {fotos.length > 0 && (
          <Box>
            <Tooltip title="Adicionar foto" arrow>
              <IconButton>
                <AddIcon />
              </IconButton>
            </Tooltip>
          </Box>
        )}
      </Box>
      <Box mt={2} className="fotos-grid galeria">
        {fotos.map((img, key) => (
          <Foto img={`./img/user${img}.jpg`} key={key} tempo={key + 1} />
        ))}
      </Box>
      {fotos.length === 0 && (
        <Box
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          mt={-7}
          className="msg-sem-foto"
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <AddAPhotoIcon />
            <Text variant="subtitle2" color="textSecondary" align="center">
              Adicione sua primeira foto clicando no icone acima.
            </Text>
          </Box>
          <Text variant="subtitle2" color="textSecondary" align="center">
            Esse é o espaço onde você poderá guardar as fotos de filmes e
            seriados que mais te agradam.
          </Text>
        </Box>
      )}

      {fotos.length > 6 && (
        <Box mt={2.3} display="flex" justifyContent="center">
          <Pagination
            count={5}
            page={page}
            onChange={handleChange}
            variant="outlined"
            shape="rounded"
          />
        </Box>
      )}
    </Paper>
  );
}
