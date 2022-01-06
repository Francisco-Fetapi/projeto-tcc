import React from "react";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";

export default function Foto({ img, tempo }) {
  return (
    <Box component="figure">
      <img src={img} alt="user" />
      <div className="fundo-preto-1">
        <p>Há {tempo} dia(s)</p>
      </div>
      <div className="fundo-preto-2">
        <IconButton>
          <MoreVertIcon style={{ color: "white" }} />
        </IconButton>
      </div>
    </Box>
  );
}
