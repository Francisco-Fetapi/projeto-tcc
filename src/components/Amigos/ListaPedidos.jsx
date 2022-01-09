import React, { useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import { Text } from "../../styles";
import Pedido from "./Pedido";

import Slider from "react-slick";

import useUsuario from "../../hooks/useUsuario";
import Skeleton from "@material-ui/lab/Skeleton";

export default function ListaPedidos() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
  };
  const { getPedidosDeAmizade } = useUsuario();
  const [pedidos, setPedidos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (pedidos.length === 0) {
      getPedidosDeAmizade({ setLoading, setPedidos });
    }
  }, []);
  useEffect(() => {
    console.log(pedidos);
  }, [pedidos]);
  return (
    <Box className="lista-pedidos">
      {loading && (
        <>
          <Skeleton variant="rect" height="20px" width="40%" />
          <Box mt={2}>
            <Skeleton variant="rect" height="40px" width="100%" />
          </Box>
          <Box mt={2} px="15px">
            <Skeleton variant="rect" height="200px" width="100%" />
          </Box>
        </>
      )}
      {!loading && pedidos.length > 0 && (
        <>
          <Text variant="h5">{pedidos.length} PEDIDO(S) DE AMIZADE</Text>
          <Box mt={2}>
            <Text variant="subtitle2" color="textSecondary">
              Aceite o pedido de amizade dessas pessoas caso você queira se
              atualizar sobre as suas atividades.
            </Text>
          </Box>

          <Box mt={2} className="slider-pedidos">
            <Slider {...settings} className="pedidos">
              {pedidos.map((user) => (
                <Pedido user={user} key={user.id} setPedidos={setPedidos} />
              ))}
            </Slider>
          </Box>
        </>
      )}
      {!loading && pedidos.length === 0 && (
        <>
          <Text variant="h5">NENHUM PEDIDO DE AMIZADE</Text>
          <Box mt={2}>
            <Text variant="subtitle2" color="textSecondary">
              Todas as solicitações de amizade aparecerão aqui. Além de receber
              solicitações de amizade você também pode enviá-las. Confira
              algumas
              <b> sugestões de amizade</b> abaixo.
            </Text>
          </Box>
        </>
      )}
    </Box>
  );
}
