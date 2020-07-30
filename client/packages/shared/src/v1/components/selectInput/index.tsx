import React from "react";
import MFormHelperText from "@material-ui/core/FormHelperText";
import MFormControl from "@material-ui/core/FormControl";
import MNativeSelect from "@material-ui/core/NativeSelect";

interface Option {
  [k: string]: string;
}

interface Props {
  onChange?: any;
  required?: boolean;
  variant?: any;
  options: Option;
  value: string;
  helperText?: string;
  name?: string;
}

function SelectInput(props: Props) {
  return (
    <MFormControl>
      <MNativeSelect
        value={props.value}
        onChange={props.onChange}
        inputProps={{ name: props.name }}
        variant={props.variant}
      >
        {Object.keys(props.options).map((item) => {
          return (
            <option key={props.options[item]} value={props.options[item]}>
              {props.options[item]}
            </option>
          );
        })}
      </MNativeSelect>
      {props.helperText && (
        <MFormHelperText>{props.helperText}</MFormHelperText>
      )}
    </MFormControl>
  );
}
export default SelectInput;
