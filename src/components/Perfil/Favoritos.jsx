import React, { useEffect } from "react";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import { Text } from "~/styles";
import Favorito from "./Favorito";
import { useNavigate } from "react-router-dom";

export default function Favoritos() {
  const navigate = useNavigate();
  useEffect(() => {
    const favoritos = document.querySelector(".favoritos");
    const parent_favoritos = favoritos.parentElement;

    document.onscroll = function () {
      const favoritos_visivel =
        window.pageYOffset >= parent_favoritos.offsetTop - 80;

      if (favoritos_visivel) {
        favoritos.classList.add("fixed");
      } else {
        favoritos.classList.remove("fixed");
      }
    };
    window.onresize = function () {
      if (window.innerWidth <= 915) {
        favoritos.classList.remove("fixed");
      }
    };
    return () => {
      document.onscroll = null;
      window.onresize = null;
    };
  }, []);

  return (
    <List mt={3} className="favoritos">
      <Box
        mb={2}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text variant="h6">FAVORITOS</Text>
      </Box>
      <Box>
        {["matrix.jpg", "TWD.jpg", "lucifer.jpg"].map((item) => (
          <Favorito key={item} imgMovie={item} />
        ))}
      </Box>
      <Box mt={1} display="flex" justifyContent="center">
        <Button color="primary" onClick={() => navigate("/movies-favoritos")}>
          Visualizar todos
        </Button>
      </Box>
    </List>
  );
}
