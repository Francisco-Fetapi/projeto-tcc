import React from "react";
import Box from "@material-ui/core/Box";

import DeleteIcon from "@material-ui/icons/Delete";
import EyeIcon from "@material-ui/icons/RemoveRedEye";

export default function Foto({ img, tempo }) {
  return (
    <Box component="figure">
      <img src={img} alt="user" />
      <div className="fundo-preto-1">
        <p>Há {tempo} dia(s)</p>
      </div>
      <div className="fundo-preto-2">
        <DeleteIcon size="small" />
        <EyeIcon size="small" />
      </div>
    </Box>
  );
}
