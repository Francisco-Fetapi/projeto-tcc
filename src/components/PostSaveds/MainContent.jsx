import React from "react";
import { PostSaveds } from "~/styles/pages/PostSaveds";
import { Text } from "~/styles";

export default function MainContent() {
  return (
    <PostSaveds.Main>
      <Text variant="h5" style={{ textTransform: "uppercase" }}>
        Publicações Guardadas
      </Text>
    </PostSaveds.Main>
  );
}
