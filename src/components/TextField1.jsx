import React from "react";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import { Text } from "../styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import TextField from "@material-ui/core/TextField";

export default function TextField1({
  icon,
  select,
  children,
  id,
  type,
  label,
  multiline,
  ...props
}) {
  if (select) {
    return (
      <TextField
        InputLabelProps={{ shrink: true }}
        variant="outlined"
        id={id}
        select
        label={label}
        {...props}
      >
        {children}
      </TextField>
    );
  }
  if (multiline) {
    return (
      <TextField
        InputLabelProps={{ shrink: true }}
        variant="outlined"
        id={id}
        multiline
        label={label}
        {...props}
      >
        {children}
      </TextField>
    );
  }

  return (
    <>
      {label && (
        <Text variant="subtitle1" style={{ fontWeight: 500 }}>
          {label}
        </Text>
      )}
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
