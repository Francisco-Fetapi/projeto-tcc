import React from "react";
import { Text } from "~/styles";
import { Movie } from "~/styles/pages/Movie";
import Box from "@material-ui/core/Box";
import Pagination from "@material-ui/lab/Pagination";
import CardDiscussao from "./CardDiscussao";
import { IMG_USER_PADRAO } from "~/API";
// import Posts from "../Posts";

export default function ListaDiscussoes() {
  const dados = {
    usuario: {
      nome: "Nome do usuario",
      img: IMG_USER_PADRAO,
    },
    post: {
      tempo: "há 2 meses ",
      publico: true,
      content:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like...",
    },
  };
  return (
    <Movie.Discussoes>
      <Box>
        <Box>
          <Text variant="h4">Discussões</Text>
        </Box>
      </Box>
      <Box className="lista-card">
        {[1, 2, 3, 4].map((item) => (
          <CardDiscussao {...dados} key={item} />
        ))}
      </Box>
      <Box my={3} className="paginate" display="flex" justifyContent="center">
        <Pagination count={9} page={3} variant="outlined" shape="rounded" />
      </Box>
    </Movie.Discussoes>
  );
}
