import React, { useRef } from "react";
import Box from "@material-ui/core/Box";

import DeleteIcon from "@material-ui/icons/Delete";
import EyeIcon from "@material-ui/icons/RemoveRedEye";
import { useParams } from "react-router-dom";

export default function Foto({ img, imgFull, selecionar, tempo, preview }) {
  const link = useRef();
  const { id } = useParams();
  console.log(id);
  return (
    <Box
      component="figure"
      onClick={() => link.current?.click()}
      style={id ? { cursor: "pointer" } : null}
    >
      <img src={img} alt="user" />
      <div className={`fundo-preto-1 ${preview ? "preview" : ""}`}>
        {!preview && <p>{tempo}</p>}
        {preview && "Pré-visualização"}
      </div>
      {!preview && (
        <div className="fundo-preto-2">
          {!id && (
            <>
              <DeleteIcon size="small" onClick={selecionar} />
              <EyeIcon size="small" onClick={() => link.current.click()} />
              <a
                href={imgFull}
                ref={link}
                target="__blank"
                style={{ display: "none" }}
              >
                ver imagem original
              </a>
            </>
          )}
        </div>
      )}
    </Box>
  );
}
