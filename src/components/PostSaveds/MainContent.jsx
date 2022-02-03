import React from "react";
import { PostSaveds } from "~/styles/pages/PostSaveds";
import { Text } from "~/styles";
import Box from "@material-ui/core/Box";
import Posts from "~/components/Posts";

export default function MainContent() {
  return (
    <PostSaveds.Main>
      <Text variant="h5" style={{ textTransform: "uppercase" }}>
        Publicações Guardadas
      </Text>
      <Text variant="subtitle2" color="textSecondary">
        Gerencie as publicações que guardaste pra ver mais tarde.
      </Text>
      <Box>
        <Posts />
      </Box>
    </PostSaveds.Main>
  );
}
