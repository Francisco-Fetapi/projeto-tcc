import React from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";

import Eye from "@material-ui/icons/RemoveRedEye";
import Delete from "@material-ui/icons/Delete";

export default function VerERemover() {
  return (
    <ButtonGroup size="small" className="ver_e_remover" variant="text">
      <Button className="ver" startIcon={<Eye />}>
        Ver
      </Button>
      <Button className="remover" startIcon={<Delete />}>
        Remover
      </Button>
    </ButtonGroup>
  );
}
