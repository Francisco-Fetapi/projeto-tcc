import React, { useContext, useState } from "react";
import { Text } from "~/styles";
import { Movie } from "~/styles/pages/Movie";
import Box from "@material-ui/core/Box";
import { MovieContext } from "./MainContent";
import Pagination from "@material-ui/lab/Pagination";
// import Chip from "@material-ui/core/Chip";
// import Button from "@material-ui/core/Button";
// import { useNavigate } from "react-router-dom";

export default function Galeria() {
  const {
    loadingImages,
    images: { posters },
  } = useContext(MovieContext);
  const per_page = 8;
  const [paginate, setPaginate] = useState({
    start: 0,
    ends: per_page,
    page: 1,
  });

  if (loadingImages) {
    return <div />;
  }

  function handleChange(event, page) {
    let start = page * per_page;
    let ends = page * per_page + per_page;
    setPaginate(() => {
      return {
        start,
        ends,
        page,
      };
    });
  }
  return (
    <Movie.Galeria>
      <Box>
        <Text
          variant="h5"
          align="center"
          style={{ fontWeight: "bolder", textTransform: "uppercase" }}
        >
          Galeria
        </Text>
      </Box>

      <Box className="fotos">
        {posters.slice(paginate.start, paginate.ends).map((item, key) => (
          <img src={item.file_path} key={key} alt={item} />
        ))}
      </Box>
      {posters.slice(paginate.start, paginate.ends).length === 0 && (
        <Box mb={2}>
          <Text align="center" variant="subtitle2" color="textSecondary">
            Todas as imagens já foram exibidas
          </Text>
        </Box>
      )}
      <Box display="flex" justifyContent="center">
        <Pagination
          page={paginate.page}
          count={Math.floor(posters.length / per_page)}
          onChange={handleChange}
          variant="outlined"
          shape="rounded"
        />
      </Box>
    </Movie.Galeria>
  );
}
