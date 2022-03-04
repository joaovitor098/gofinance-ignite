import { Control } from "react-hook-form";
import { TextInputProps } from "react-native";

export type InputProps = TextInputProps;
export type InputControlledProps = TextInputProps & {
  control: Control;
  name: string;
  erro: string;
};
