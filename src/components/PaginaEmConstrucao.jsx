import React from "react";
import { Text } from "~/styles";

export default function PaginaEmConstrucao({ pagina }) {
  return (
    <div style={{ padding: 20 }}>
      <Text variant="h3">{pagina}</Text>
    </div>
  );
}
