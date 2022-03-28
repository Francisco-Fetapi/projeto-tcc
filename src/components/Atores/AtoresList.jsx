import React from "react";
import { Atores } from "~/styles/pages/Atores";
import AtorItem from "./AtorItem";

export default function AtoresList({ atores }) {
  return (
    <div>
      <Atores.List>
        {atores.map((ator, key) => (
          <AtorItem key={key} ator={ator} />
        ))}
      </Atores.List>
    </div>
  );
}
