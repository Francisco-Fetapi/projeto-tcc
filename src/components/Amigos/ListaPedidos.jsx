import React from "react";
import Box from "@material-ui/core/Box";
import { Text } from "../../styles";
import Pedido from "./Pedido";

import Slider from "react-slick";

export default function ListaPedidos() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Box className="lista-pedidos">
      <Text variant="h5">PEDIDOS DE AMIZADE</Text>
      <Box mt={2}>
        <Text variant="subtitle2" color="textSecondary">
          Aceite o pedido de amizade dessas pessoas caso você queira se
          atualizar sobre as suas atividades.
        </Text>
      </Box>
      <Box mt={2} className="slider-pedidos">
        <Slider {...settings}>
          <Box className="pedidos">
            <Pedido img="user1.jpg" />
            <Pedido img="user3.jpg" />
          </Box>
          <Box className="pedidos">
            <Pedido img="user4.jpg" />
            <Pedido img="user5.jpg" />
          </Box>
        </Slider>
      </Box>
    </Box>
  );
}
