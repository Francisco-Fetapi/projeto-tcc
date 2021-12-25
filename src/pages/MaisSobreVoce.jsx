import React from "react";
import { MaisSobreVoce, Text } from "../styles";
import Box from "@material-ui/core/Box";
import { FaInfoCircle } from "react-icons/fa";
import IconAndText from "../components/IconAndText";
import FormMaisSobreVoce from "../components/Forms/FormMaisSobreVoce";

export default function MaisSobreVoce_() {
  return (
    <MaisSobreVoce.Container>
      <Box>
        <IconAndText Icon={FaInfoCircle} label="Mais sobre você" />
        <Box mt={1}>
          <Text align="center" variant="body1" color="textSecondary">
            Os teus amigos precisarão saber mais de você do que apenas o seu
            nome. Preencha os campos segunites para completar o processo
          </Text>
        </Box>
      </Box>
      <Box mt={9} className="form">
        <FormMaisSobreVoce />
      </Box>
    </MaisSobreVoce.Container>
  );
}
