import { TouchableOpacityProps } from "react-native";

export type ButtonProps = TouchableOpacityProps & {
  title: string;
};

export type TransactionButtonProps = TouchableOpacityProps & {
  title: string;
  type: "up" | "down";
  isActie: boolean;
};
