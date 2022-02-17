import React from "react";
import { Atores } from "~/styles/pages/Atores";
import { Text } from "~/styles";

export default function AtorItem({ ator }) {
  return (
    <Atores.Item>
      <img src={`/img/${ator.img}`} alt={ator.nome} />
      <figcaption>
        <Text color="textSecondary" variant="body2">
          {ator.nome}
        </Text>
      </figcaption>
    </Atores.Item>
  );
}
