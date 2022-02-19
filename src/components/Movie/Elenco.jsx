import React from "react";
import { Text } from "~/styles";
import { Movie } from "~/styles/pages/Movie";
import Box from "@material-ui/core/Box";
// import StarIcon from "@material-ui/icons/Star";
import Slider from "react-slick";

export default function Elenco() {
  const settings = {
    // dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows: false,
  };
  return (
    <Movie.Elenco>
      <Text variant="h6">Elenco principal</Text>
      <Box mt={2} className="slider-elenco">
        <Slider {...settings}>
          <CardAtor nome1="Tom Holland" nome2="Peter Parker" img="ator3.jpg" />
          <CardAtor nome1="Zendaya" nome2="Michele Jones" img="ator8.jpg" />
        </Slider>
      </Box>
    </Movie.Elenco>
  );
}

function CardAtor({ nome1, nome2, img }) {
  return (
    <Box className="card-ator">
      <img src={`/img/${img}`} alt={`${nome1} como ${nome2}`} />
      <Box mt={0.5} component="figcaption">
        <Text>{nome1}</Text>
        <Box mt={0.5}>
          <Text color="textSecondary" fontSize={12}>
            {nome2}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
