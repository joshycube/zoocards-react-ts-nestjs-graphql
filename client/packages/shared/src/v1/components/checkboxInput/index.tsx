import React from "react";
import MFormControl from "@material-ui/core/FormControl";
import MFormHelperText from "@material-ui/core/FormHelperText";
import MFormControlLabel from "@material-ui/core/FormControlLabel";
import MCheckbox from "@material-ui/core/Checkbox";

interface Props {
  onChange?: any;
  required?: boolean;
  value: boolean;
  labelPlacement?: "end" | "start" | "top" | "bottom";
  label?: string;
  helperText?: string;
  checked: boolean;
}

function CheckboxInput(props: Props) {
  return (
    <MFormControl>
      <MFormControlLabel
        value={props.value}
        control={<MCheckbox {...props} />}
        label={props.label || "Checkbox"}
        labelPlacement={props.labelPlacement || "end"}
      />
      {props.helperText && (
        <MFormHelperText>{props.helperText}</MFormHelperText>
      )}
    </MFormControl>
  );
}

export default CheckboxInput;
