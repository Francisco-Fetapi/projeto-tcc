import React from "react";
// import { Text } from "~/styles";
import { Movie } from "~/styles/pages/Movie";
// import Box from "@material-ui/core/Box";
import Banner from "./Banner";

export default function MainContent() {
  return (
    <Movie.Main>
      <Banner />
      {/* <Text>Movie</Text> */}
    </Movie.Main>
  );
}
