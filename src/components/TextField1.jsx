import React from "react";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import { Text } from "../styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import TextField from "@material-ui/core/TextField";

import { useField } from "formik";
import FormHelperText from "@material-ui/core/FormHelperText";

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
  const [field, meta] = useField({ name: id, type });
  const Label = label && (
    <Text
      className={meta.error ? "label-error" : ""}
      variant="subtitle1"
      style={{ fontWeight: 500, marginBottom: 5 }}
    >
      {label}
    </Text>
  );
  if (select) {
    return (
      <>
        {Label}
        <TextField
          InputLabelProps={{ shrink: true }}
          variant="outlined"
          id={id}
          select
          fullWidth
          {...props}
          {...field}
          error={meta.touched && !!meta.error}
          helperText={meta.error}
        >
          {children}
        </TextField>
      </>
    );
  }

  if (multiline) {
    return (
      <>
        {Label}
        <TextField
          InputLabelProps={{ shrink: true }}
          variant="outlined"
          id={id}
          multiline
          {...props}
          {...field}
          error={meta.touched && !!meta.error}
          helperText={meta.error}
        />
      </>
    );
  }

  return (
    <>
      {Label}
      <FormControl variant="outlined">
        <OutlinedInput
          id={id}
          type={type || "text"}
          endAdornment={
            <InputAdornment position="end">{icon || ""}</InputAdornment>
          }
          {...props}
          {...field}
          error={meta.touched && !!meta.error}
        />
        <FormHelperText error={meta.touched && !!meta.error}>
          {meta.error}
        </FormHelperText>
      </FormControl>
    </>
  );
}
