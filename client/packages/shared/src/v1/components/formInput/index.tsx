import React from "react";
import MFormControl from "@material-ui/core/FormControl";
import MTextField from "@material-ui/core/TextField";

interface Props {
  onChange?: any;
  defaultValue?: string;
  required?: boolean;
  variant?: any;
  value: string;
  placeholder?: string;
  helperText?: string;
  error?: boolean;
}

function FormInput(props: Props) {
  return (
    <MFormControl>
      <MTextField {...props} />
    </MFormControl>
  );
}

export default FormInput;
