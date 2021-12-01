import React from "react";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import { Text } from "../styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";

export default function TextField1({ icon, id, type, label, ...props }) {
  return (
    <>
      <Text variant="subtitle1" style={{ fontWeight: 500 }}>
        {label}
      </Text>
      <FormControl variant="outlined">
        <OutlinedInput
          id={id}
          type={type || "text"}
          endAdornment={
            <InputAdornment position="end">{icon || ""}</InputAdornment>
          }
          {...props}
        />
      </FormControl>
    </>
  );
}
