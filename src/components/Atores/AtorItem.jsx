import React from "react";
import { Atores } from "~/styles/pages/Atores";
import { Text } from "~/styles";

export default function AtorItem({ ator }) {
  return (
    <Atores.Item>
      <img src={ator.profile_path} alt={ator.name} />
      <figcaption>
        <Text color="textSecondary" variant="body2">
          {ator.name}
        </Text>
      </figcaption>
    </Atores.Item>
  );
}
