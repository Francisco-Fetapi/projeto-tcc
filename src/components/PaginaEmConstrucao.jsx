import React from "react";
import { Text } from "~/styles";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  display: flex;
  max-width: 250px;
  margin: 50px auto;
  justify-content: center;
  border: 5px dotted currentColor;
  p {
    font-weight: bold;
  }
`;

export default function PaginaEmConstrucao({ pagina }) {
  return (
    <div style={{ margin: 20 }}>
      <Text variant="h4">{pagina.toUpperCase()}</Text>
      <Text variant="subtitle2" color="textSecondary">
        Esta página ainda não foi construida.
      </Text>

      <Container className="MuiTypography-colorTextSecondary">
        <Text color="textSecondary">Template da página</Text>
      </Container>
    </div>
  );
}
