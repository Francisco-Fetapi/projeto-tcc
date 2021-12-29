import React from "react";
import { Perfil } from "../../styles/pages/Perfil";
import Button from "@material-ui/core/Button";
import { FaCamera } from "react-icons/fa";

export default function Banner() {
  return (
    <Perfil.Banner>
      <div>
        <div>
          <Button startIcon={<FaCamera />} color="default" variant="contained">
            Adicionar foto de capa
          </Button>
        </div>
      </div>
    </Perfil.Banner>
  );
}
