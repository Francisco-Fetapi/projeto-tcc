import React, { useRef } from "react";
import Box from "@material-ui/core/Box";

import DeleteIcon from "@material-ui/icons/Delete";
import EyeIcon from "@material-ui/icons/RemoveRedEye";

export default function Foto({ img, imgFull, tempo, preview }) {
  const link = useRef();
  return (
    <Box component="figure">
      <img src={img} alt="user" />
      <div className={`fundo-preto-1 ${preview ? "preview" : ""}`}>
        {!preview && <p>Há {tempo} dia(s)</p>}
        {preview && "Pré-visualização"}
      </div>
      {!preview && (
        <div className="fundo-preto-2">
          <DeleteIcon size="small" />
          <EyeIcon size="small" onClick={() => link.current.click()} />
          <a
            href={imgFull}
            ref={link}
            target="__blank"
            style={{ display: "none" }}
          >
            ver imagem original
          </a>
        </div>
      )}
    </Box>
  );
}
